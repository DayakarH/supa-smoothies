import { SupabaseClient } from '@supabase/supabase-js';

export async function getSmoothieDetails(client: SupabaseClient, id: string) {
	const { data, error } = await client
		.from('smoothies')
		.select('*')
		.eq('id', id)
		.single();
	if (error) {
		throw new Error('unable to fetch smoothies at this point of time.');
	}
	return data;
}
