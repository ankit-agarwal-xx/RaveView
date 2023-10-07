import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://txichhmrtzxeozvmpvib.supabase.co';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4aWNoaG1ydHp4ZW96dm1wdmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNTAwNzYsImV4cCI6MjAxMTkyNjA3Nn0.iw76L9N5dQkP8cGk19WmSogxrJdtZ2DflgOMFKiuWEo';
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default () => {};