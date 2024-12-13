import data from "@/../assets/recipes.json";
import { type Recipe } from "../../../types/types";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, "id");

	// Fetch the recipe from local data
	let recipe = data[Number(id) - 1];

	// Check if the ID is beyond the local data length
	if (Number(id) > data.length) {
		try {
			// Use $fetch for server-side fetching
			const externalRecipe: Recipe = await globalThis.$fetch(
				`https://dummyjson.com/recipes/${Number(id) - data.length}`
			);

			return { ...externalRecipe, id: Number(id) }; // Return the external recipe
		} catch (error) {
			// Handle fetch errors gracefully
			throw createError({
				statusCode: 404,
				statusMessage: "Recipe not found",
			});
		}
	}

	// Return the local recipe if found
	if (recipe) {
		return recipe;
	}

	// Handle cases where the recipe is missing
	throw createError({
		statusCode: 404,
		statusMessage: "Recipe not found",
	});
});
