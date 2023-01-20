import { useLoaderData } from 'react-router-dom';
import { getSmoothies } from '../queries/get-smoothies';
import { supabase } from '../utils/Supabase-Client';
import SmoothiesList from '../components/Smoothies-List';
import { QueryClient } from '@tanstack/react-query';
import { smoothie } from '../types';

const Smoothies = () => {
	const data = useLoaderData() as smoothie[];
	return <SmoothiesList smoothies={data} />;
};

const smoothiesQuery = () => {
	return {
		queryKey: ['smoothies'],
		queryFn: async () => {
			return getSmoothies(supabase);
		},
		staleTime: 5 * 60 * 1000,
	};
};

export const loadSmoothies = (queryClient: QueryClient) => async () => {
	const query = smoothiesQuery();
	// ⬇️ return data or fetch it
	return (
		queryClient.getQueryData(query.queryKey) ??
		(await queryClient.fetchQuery(query))
	);
};

export default Smoothies;
