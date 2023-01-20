import { SupabaseClient } from '@supabase/supabase-js';

export async function getSmoothies(client: SupabaseClient) {
	const { data, error } = await client.from('smoothies').select('id,title');
	if (error) {
		throw new Error('unable to fetch smoothies at this point of time.');
	}
	return data;
}
