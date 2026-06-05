import { createClient } from "@supabase/supabase-js";

const apiKey = import.meta.env.VITE_API_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL

const supabaseKey = apiKey
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
