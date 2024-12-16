export interface Recipe {
	id: number;
	name: string;
	ingredients: Ingredient[];
	description?: string;
	instructions: string[];
	prepTimeMinutes?: number;
	cookTimeMinutes?: number;
	servings?: number;
	difficulty?: string;
	cuisine?: string;
	caloriesPerServing?: number;
	tags?: string[];
	userId?: number;
	image?: string;
	rating?: number;
	reviewCount?: number;
	mealType?: string[];
	cost?: number;
}

export interface SingleRecipeResponse {
	id: number;
	name: string;
	ingredients: string[];
	description?: string;
	instructions: string[];
	prepTimeMinutes?: number;
	cookTimeMinutes?: number;
	servings?: number;
	difficulty?: string;
	cuisine?: string;
	caloriesPerServing?: number;
	tags?: string[];
	userId?: number;
	image?: string;
	rating?: number;
	reviewCount?: number;
	mealType?: string[];
	cost?: number;
}

export interface Base {
	id: number;
	name: string;
	cooking_time: number;
	cost: number;
	instructions: string[];
}

export interface Ingredient {
	name: string;
	quantity?: string;
	type?: string;
	options?: Ingredient[];
}

export interface RecipeResponse {
	recipes: SingleRecipeResponse[];
	total: number;
	skip: number;
	limit: number;
}
