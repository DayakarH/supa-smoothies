import { createClient } from '@supabase/supabase-js';
import { Database } from '../types';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient<Database>(supabaseURL, supabaseKey);
export default function getSupabaseClient() {
	return createClient<Database>(supabaseURL, supabaseKey);
}
