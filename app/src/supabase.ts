import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://teepfybsthueqgbgcoew.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZXBmeWJzdGh1ZXFnYmdjb2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTU4MjQsImV4cCI6MjA1OTc5MTgyNH0.HXYXa4NTfhAviazhGMaM8lXwvGshbjGrqIVDMNYwrjA'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);