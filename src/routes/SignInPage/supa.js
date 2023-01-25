import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://pwmiaynbgmbfcqnjcjgf.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3bWlheW5iZ21iZmNxbmpjamdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4ODg3MTgsImV4cCI6MTk4NjQ2NDcxOH0.mPoIwf2MthZJXwWgx4xutfXbTPCxCa7HAMbMoUYUk1M');

export default supabase;