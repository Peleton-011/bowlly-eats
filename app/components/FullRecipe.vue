<script lang="ts" setup>
import { type Recipe, type Base } from "../../types/types";
import commonBases from "../../assets/common_bases.json";

defineProps<{
	recipe: Recipe;
}>();
</script>

<template>
	<div class="flex flex-col max-w-screen-lg container py-20">
		<RecipeDetails :recipe="recipe" :base="commonBases[0] as Base" />
		<pre>
			{{ JSON.stringify(recipe, null, 2) }}
		</pre
		>
		<!-- Header -->
		<div class="flex flex-col mb-6">
			<h2 class="text-5xl mb-4 font-semibold">{{ recipe.name }}</h2>
			<div class="flex gap-4 text-xl mb-6">
				<div class="flex items-center gap-1">
					<Icon
						name="mdi:clock-time-eight-outline"
						style="color: #f79f1a"
					/>
					<span>{{ recipe.cookTimeMinutes }}</span>
				</div>
				<div class="flex items-center gap-1">
					<Icon name="mdi:fire" style="color: #f79f1a" />
					<span>{{ recipe.caloriesPerServing }}</span>
				</div>
				<div
					v-if="recipe.rating && recipe.reviewCount"
					class="flex items-center gap-1"
				>
					<Icon name="mdi:star" style="color: #f79f1a" />
					<span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
				</div>
				<div v-if="recipe.cost" class="flex items-center gap-1">
					<Icon name="mdi:star" style="color: #f79f1a" />
					<span>{{ recipe.cost }}€ </span>
				</div>
			</div>
			<hr />
		</div>

		<!-- Image -->
		<NuxtImg
			:src="recipe.image"
			densities="x1"
			sizes="xs:100vw sm:100vw md:100vw lg:100vw"
			class="w-full max-h-[500px] object-cover rounded-md shadow-sm mb-12"
			alt=""
		/>

		<!-- Description -->
		<div v-if="recipe.description" class="mb-8">
			<h2 class="text-3xl font-semibold mb-4">Description</h2>
			<p class="text-lg">
				{{ recipe.description }}
			</p>
		</div>

		<!-- Ingredients -->
		<div class="mb-8">
			<h2 class="text-3xl font-semibold mb-4">Ingredients</h2>
			<ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
				<li v-for="ingredient in recipe.ingredients">
					<label class="flex gap-2 items-center">
						<input class="hidden peer" type="checkbox" />
						<div
							class="relative w-6 h-6 rounded-full border-2 border-metallic-blue flex items-center justify-center peer-checked:after:absolute peer-checked:after:w-4 peer-checked:after:h-4 peer-checked:after:bg-metallic-blue peer-checked:after:rounded-full"
						></div>
						<span class="peer-checked:line-through">
							{{ ingredient }}
						</span>
					</label>
				</li>
			</ul>
		</div>

		<!-- Instructions -->
		<div>
			<h2 class="text-3xl font-medium mb-4">Instructions</h2>
			<ul class="flex flex-col text-lg gap-4">
				<li
					v-for="(instruction, index) in recipe.instructions"
					class="flex gap-2"
				>
					<span
						class="flex items-center justify-center bg-metallic-blue w-7 h-7 rounded-full text-white text-sm"
					>
						{{ index + 1 }}
					</span>
					<span class="flex-1">{{ instruction }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style></style>
