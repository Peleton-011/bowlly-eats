<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { type Recipe, type Base } from "../../types/types";

// Props
const { recipe, base } = defineProps<{
	recipe: Recipe;
	base: Base;
}>();

// Reactive State
const selectedBase = ref<string>(base?.name || "");

// Computed Properties
const displayedIngredients = computed(() => {
	if (!recipe || !base) return [];

	return recipe.ingredients.map((ingredient) => {
		if (ingredient.type === "base" && base) {
			return base;
		}
		return ingredient;
	});
});

const displayedInstructions = computed(() => {
	if (!recipe || !base) return [];

	const baseInstructions = selectedBase.value
		? base?.instructions || []
		: [];

	return recipe.instructions
		.map((step) =>
			step.includes("following its specific instructions")
				? step.replace(
						"its specific instructions",
						`the instructions for ${selectedBase.value}`
				  )
				: step
		)
		.concat(baseInstructions);
});

// Method to update base
const updateBase = (newBase: string) => {
	selectedBase.value = newBase;
};

// Watcher for Side Effects (if needed)
watch(selectedBase, (newVal) => {
	console.log(`Selected base changed to: ${newVal}`);
});
</script>

<template>
	<div class="recipe-details">
		<h1>{{ recipe.name }}</h1>
		<p>{{ recipe.description }}</p>

		<h3>Ingredients</h3>
		<ul>
			<li
				v-for="ingredient in displayedIngredients"
				:key="ingredient.name"
			>
				{{ ingredient.quantity || "" }} {{ ingredient.name }}
			</li>
		</ul>

		<h3>Instructions</h3>
		<ol>
			<li v-for="step in displayedInstructions" :key="step">
				{{ step }}
			</li>
		</ol>

		<!-- <BaseSelector
			v-if="recipe.baseOptions"
			:options=""
			:selectedBase="selectedBase"
			@update="updateBase"
		/> -->
	</div>
</template>
