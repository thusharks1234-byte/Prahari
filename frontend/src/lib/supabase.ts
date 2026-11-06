import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://ygxrmmrelifezuxjkwux.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_o1yo815JV7Z7UyUjn7AaUg_GC4qsGqJ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
