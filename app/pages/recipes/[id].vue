<script lang="ts" setup>
import { type Recipe } from "../../../types/types";
const { id } = useRoute().params;

const { data: recipe, error } = await useFetch<Recipe>(`/api/recipes/${id}`);

if (error.value) {
	throw createError({
		statusCode: error.value?.statusCode,
		statusMessage: error.value?.statusMessage,
	});
}

useSeoMeta({
	title: recipe.value?.name,
	description: "Recipes for you to cook!",
	ogTitle: recipe.value?.name,
	ogDescription: "Recipes for you to cook!",
	ogImage: recipe.value?.image,
	ogUrl: `http:localhost:3001/recipes/${recipe.value?.id}`,
	twitterTitle: recipe.value?.name,
	twitterDescription: "Recipes for you to cook!",
	twitterImage: recipe.value?.image,
	twitterCard: "summary",
});
</script>

<template>
	<FullRecipe v-if="recipe" :recipe="recipe" />
	<div v-else>Loading recipe...</div>
</template>

<style scoped></style>
