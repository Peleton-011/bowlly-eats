import data from "@/../assets/recipes.json";

export default defineEventHandler(async (event) => {
	return data.length;
});
