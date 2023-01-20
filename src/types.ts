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
			feedback: {
				Row: {
					created_at: string | null;
					email: string | null;
					id: number;
					message: string | null;
				};
				Insert: {
					created_at?: string | null;
					email?: string | null;
					id?: number;
					message?: string | null;
				};
				Update: {
					created_at?: string | null;
					email?: string | null;
					id?: number;
					message?: string | null;
				};
			};
			smoothies: {
				Row: {
					description: string | null;
					id: number;
					img_url: string;
					ingredients: Json | null;
					nutrition_info: Json | null;
					recipe: string[] | null;
					title: string;
					yield: number | null;
				};
				Insert: {
					description?: string | null;
					id?: number;
					img_url?: string | null;
					ingredients?: Json | null;
					nutrition_info?: Json | null;
					recipe?: string[] | null;
					title?: string | null;
					yield?: number | null;
				};
				Update: {
					description?: string | null;
					id?: number;
					img_url?: string;
					ingredients?: Json | null;
					nutrition_info?: Json | null;
					recipe?: string[] | null;
					title?: string | null;
					yield?: number | null;
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

export type smoothie = Database['public']['Tables']['smoothies']['Row'];
