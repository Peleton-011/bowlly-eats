<script lang="ts" setup>
import { type Recipe } from "../../types/types";

const { startingIndex, pageLength } = defineProps<{
	startingIndex: Ref<number>;
	pageLength: number;
	pageForward: () => void;
	pageBackward: () => void;
}>();

// Define reactive variables for recipes and errors
const recipes = ref<Recipe[] | null>(null);
const error = ref<string | null>(null);

// Reactive fetch logic
watchEffect(async () => {
	try {
		const { data, error: fetchError } = await useFetch<Recipe[]>(
			`/api/recipes/${startingIndex.value + 1}/${
				startingIndex.value + pageLength
			}`
		);

		if (fetchError.value) {
			error.value =
				fetchError.value.message || "Failed to fetch recipes.";
			recipes.value = null;
		} else {
			recipes.value = data.value ?? [];
			error.value = null;
		}
	} catch (err) {
		error.value = "An unexpected error occurred.";
		recipes.value = null;
	}
});
</script>

<template>
	<section class="py-20 container">
		<div class="flex justify-between">
			<h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
			<div class="flex gap-4 mb-6">
				<button
					class="btn px-4 py-2 self-start bg-metallic-blue rounded-md text-base lg:text-lg cursor-pointer font-bold"
					@click="pageBackward"
				>
					{{ "\<" }}
				</button>
				<button
					class="btn px-4 py-2 self-start bg-metallic-blue rounded-md text-base lg:text-lg cursor-pointer font-bold"
					@click="pageForward"
				>
					{{ "\>" }}
				</button>
			</div>
		</div>
		<div class="flex justify-between">
			<p class="text-lg lg:text-xl mb-8">
				Check out our most popular recipes! We have something for
				everyone
			</p>
			<span>
				Showing recipes {{ startingIndex.value + 1 }} to
				{{ startingIndex.value + pageLength }}</span
			>
		</div>
		<div
			v-if="!error"
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
		>
			<RecipeCard v-for="recipe in recipes" :recipe="recipe" />
		</div>
		<p v-else class="text-xl">
			Oops, something went wrong. Please try again later
		</p>
	</section>
</template>
