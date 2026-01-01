import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// In-memory cache with timestamp
let cachedData: { shows: Show[]; timestamp: number } | null = null;
const CACHE_DURATION = 14 * 24 * 60 * 60 * 1000; // 2 weeks in milliseconds

interface Show {
  date: string;
  venue: string;
  city: string;
  status: string;
  ticketUrl: string;
  eventId: string;
}

interface TicketmasterEvent {
  id: string;
  name: string;
  url: string;
  dates: {
    start: {
      localDate: string;
      localTime?: string;
    };
    status: {
      code: string;
    };
  };
  _embedded?: {
    venues?: Array<{
      name: string;
      city: { name: string };
      state?: { stateCode: string; name: string };
      country: { countryCode: string; name: string };
    }>;
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function formatCity(venue: TicketmasterEvent['_embedded']): string {
  const venueInfo = venue?.venues?.[0];
  if (!venueInfo) return 'TBA';
  
  const city = venueInfo.city?.name || '';
  const stateOrCountry = venueInfo.state?.stateCode || venueInfo.country?.name || '';
  
  return `${city}${stateOrCountry ? `, ${stateOrCountry}` : ''}`;
}

function mapStatus(statusCode: string): string {
  switch (statusCode?.toLowerCase()) {
    case 'onsale':
      return 'Tickets Available';
    case 'offsale':
      return 'Off Sale';
    case 'cancelled':
      return 'Cancelled';
    case 'postponed':
      return 'Postponed';
    case 'rescheduled':
      return 'Rescheduled';
    default:
      return 'Check Availability';
  }
}

async function fetchFromTicketmaster(): Promise<Show[]> {
  const apiKey = Deno.env.get('TICKETMASTER_API_KEY');
  
  if (!apiKey) {
    console.error('TICKETMASTER_API_KEY not found in environment');
    throw new Error('Ticketmaster API key not configured');
  }

  const url = new URL('https://app.ticketmaster.com/discovery/v2/events.json');
  url.searchParams.set('keyword', 'Big Bad Voodoo Daddy');
  url.searchParams.set('classificationName', 'music');
  url.searchParams.set('size', '50');
  url.searchParams.set('sort', 'date,asc');
  url.searchParams.set('apikey', apiKey);

  console.log('Fetching from Ticketmaster API...');
  
  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Ticketmaster API error:', response.status, errorText);
    throw new Error(`Ticketmaster API error: ${response.status}`);
  }

  const data = await response.json();
  console.log('Ticketmaster response received, total events:', data?.page?.totalElements || 0);

  const events: TicketmasterEvent[] = data?._embedded?.events || [];
  
  const shows: Show[] = events.map((event) => ({
    date: formatDate(event.dates.start.localDate),
    venue: event._embedded?.venues?.[0]?.name || 'TBA',
    city: formatCity(event._embedded),
    status: mapStatus(event.dates.status.code),
    ticketUrl: event.url,
    eventId: event.id,
  }));

  // Sort by date
  shows.sort((a, b) => {
    const dateA = new Date(a.date + ', 2025');
    const dateB = new Date(b.date + ', 2025');
    return dateA.getTime() - dateB.getTime();
  });

  console.log('Processed shows:', shows.length);
  return shows;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const now = Date.now();
    
    // Check if cache is valid
    if (cachedData && (now - cachedData.timestamp) < CACHE_DURATION) {
      console.log('Returning cached data, age:', Math.round((now - cachedData.timestamp) / 1000 / 60 / 60), 'hours');
      return new Response(JSON.stringify({ 
        shows: cachedData.shows,
        cached: true,
        cacheAge: now - cachedData.timestamp,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Cache expired or empty, fetching fresh data...');
    const shows = await fetchFromTicketmaster();
    
    // Update cache
    cachedData = {
      shows,
      timestamp: now,
    };

    return new Response(JSON.stringify({ 
      shows,
      cached: false,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ticketmaster-shows function:', error);
    
    // If we have cached data and the API fails, return cached data
    if (cachedData) {
      console.log('API failed, returning stale cached data');
      return new Response(JSON.stringify({ 
        shows: cachedData.shows,
        cached: true,
        stale: true,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
