import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dipwebufeocjtwzmmcjt.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpcHdlYnVmZW9janR3em1tY2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNDM2NjgsImV4cCI6MjAzMzkxOTY2OH0.2y1oQo1FqttJC-EvBQc-NBmPujkywL51MrPXX-LHlek'
export const supabase = createClient(supabaseUrl, supabaseKey)