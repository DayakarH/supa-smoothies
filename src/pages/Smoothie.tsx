import { Query, QueryClient } from '@tanstack/react-query';
import { Params, useLoaderData } from 'react-router-dom';
import { getSmoothieDetails } from '../queries/get-smoothie-details';
import { supabase } from '../utils/Supabase-Client';
import SmoothieDetails from '../components/Smoothie-Details';
import { smoothie } from '../types';

const Smoothie = () => {
	const smoothieData = useLoaderData() as smoothie;
	return <SmoothieDetails smoothie={smoothieData} />;
};

const smoothiesQuery = (id: string) => {
	return {
		queryKey: ['smoothie', id],
		queryFn: async () => {
			return getSmoothieDetails(supabase, id);
		},
		staleTime: 5 * 60 * 1000,
	};
};
export const loadSmoothie =
	(queryClient: QueryClient) =>
	async ({ params }: { params: Params }) => {
		const id = params.id as string;
		const query = smoothiesQuery(id);
		return (
			queryClient.getQueryData(query.queryKey) ??
			(await queryClient.fetchQuery(query))
		);
	};

export default Smoothie;
