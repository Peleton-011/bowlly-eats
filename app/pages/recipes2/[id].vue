<template>
	<div>
		<RecipeDetails :recipe="recipe" :baseDetails="baseDetails" />
	</div>
</template>

<script setup>
import RecipeDetails from "~/components/RecipeDetails.vue";
const { id } = useRoute().params;

const { data, error } = await useFetch("/api/recipes");

const recipe = data?.value.find((recipe) => recipe.id == id) || null;
const baseDetails = data?.value.map((recipe) => recipe.base) || null;
</script>
