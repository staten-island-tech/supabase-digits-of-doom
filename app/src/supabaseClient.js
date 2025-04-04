import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  'https://zaopmujcaguwrencinvb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphb3BtdWpjYWd1d3JlbmNpbnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2OTY5NDcsImV4cCI6MjA1OTI3Mjk0N30.W5gFDGok26BpPvd_7JuADOf53HbGe-KLNFXP08woZKA',
)
