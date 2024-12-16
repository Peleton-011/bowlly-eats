import data from "@/../assets/recipes.json";
import { type Recipe } from "../../../../types/types";
import { type RecipeResponse } from "../../../../types/types";

export default defineEventHandler(async (event) => {
	const { starting, amount } = getRouterParams(event);

	const last = Number(starting) + Number(amount) - 1;

	// Make sure ids are up to order on internal recipes
	const internalRecipes = data.map((recipe, index) => ({
		...recipe,
		id: index + 1, // Assign ID based on index
	}));

	// If internal recipes are enough then return them without even fetching any more
	if (last <= data.length) {
		return internalRecipes.slice(Number(starting) - 1, last);
	}

	// Fetch external recipes from the API
	let externalRecipes: Recipe[] = [];
	try {
		const fetchedResponse = await globalThis.$fetch<RecipeResponse>(
			`https://dummyjson.com/recipes?limit=${
				last - internalRecipes.length
			}`
		);

		externalRecipes = fetchedResponse.recipes.map((recipe, index) => ({
			...recipe,
			id: internalRecipes.length + index + 1, // Assign ID sequentially after internal recipes
		}));
	} catch (error) {
		console.error("Error fetching external recipes:", error);
	}

	// Combine internal and external recipes
	const allRecipes = [...internalRecipes, ...externalRecipes];

	return allRecipes.slice(Number(starting) - 1, last);
});
