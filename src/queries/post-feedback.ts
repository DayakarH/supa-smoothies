import { supabase } from '../utils/Supabase-Client';

export async function postFeedback(messageBody) {
	const { data, error } = await supabase.from('feedback').insert(messageBody);
	if (error) {
		throw new Error('unable to fetch smoothies at this point of time.');
	}
	return data;
}
