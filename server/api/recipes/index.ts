import data from "@/../assets/recipes.json";
import { Ingredient, type Recipe } from "../../../types/types";
import { type RecipeResponse } from "../../../types/types";

export default defineEventHandler(async () => {
	const internalRecipes = data.map((recipe, index) => ({
		...recipe,
		id: index + 1, // Assign ID based on index
	}));

	// Fetch external recipes from the API
	let externalRecipes: Recipe[] = [];
	try {
		const fetchedResponse = await globalThis.$fetch<RecipeResponse>(
			"https://dummyjson.com/recipes?limit=6"
		);

		externalRecipes = fetchedResponse.recipes.map((recipe, index) => ({
			...recipe,
			id: internalRecipes.length + index + 1, // Assign ID sequentially after internal recipes
			ingredients: recipe.ingredients.map(
				(ingredient) =>
					({
						name: ingredient,
					} as Ingredient)
			),
		}));
	} catch (error) {
		console.error("Error fetching external recipes:", error);
	}

	// Combine internal and external recipes
	const allRecipes = [...internalRecipes, ...externalRecipes];

	return allRecipes;
});
