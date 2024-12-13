import data from "@/../assets/recipes.json";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, "id");

	return data[Number(id) - 1];
});
