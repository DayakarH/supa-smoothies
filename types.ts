export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			smoothies: {
				Row: {
					id: number;
					title: string | null;
					rating: number | null;
					description: string | null;
					recipe: string[] | null;
					ingredients: string[] | null;
					yield: number | null;
					nutrition_info: Json | null;
				};
				Insert: {
					id?: number;
					title?: string | null;
					rating?: number | null;
					description?: string | null;
					recipe?: string[] | null;
					ingredients?: string[] | null;
					yield?: number | null;
					nutrition_info?: Json | null;
				};
				Update: {
					id?: number;
					title?: string | null;
					rating?: number | null;
					description?: string | null;
					recipe?: string[] | null;
					ingredients?: string[] | null;
					yield?: number | null;
					nutrition_info?: Json | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
