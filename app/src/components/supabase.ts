import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nrrchrxxblcojhbetqjw.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ycmNocnh4Ymxjb2poYmV0cWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTIwMTQsImV4cCI6MjA2MDgyODAxNH0.-erYrVSmKByXockx4Nw41rv8ioX2Mm5sRJD1BjgkhtQ'; 

export const supabase = createClient(supabaseUrl, supabaseKey);