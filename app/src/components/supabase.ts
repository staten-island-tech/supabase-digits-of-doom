import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mykeygmtonnznvmtxocl.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15a2V5Z210b25uem52bXR4b2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzc3OTUsImV4cCI6MjA2MDkxMzc5NX0.SwHRCepx4ik_jdvfi0kU1TztUyL98AJFCR308DXqi_A'; 

export const supabase = createClient(supabaseUrl, supabaseKey);