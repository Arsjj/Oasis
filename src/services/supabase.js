import { createClient } from "@supabase/supabase-js";

const apiKey = import.meta.env.VITE_API_KEY;

export const supabaseUrl = 'https://mlomrciyeslxzdorbvso.supabase.co'
const supabaseKey = apiKey
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
