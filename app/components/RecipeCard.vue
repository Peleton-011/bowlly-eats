<script lang="ts" setup>
import { type Recipe } from "../../types/types";

defineProps<{
	recipe: Recipe;
}>();
</script>

<template>
	<div class="flex flex-col shadow rounded-md">
		<NuxtImg
			:src="recipe.image"
			sizes="xs:100vw sm:50vw lg:400px"
			format="webp"
			densities="x1"
			alt=""
			class="rounded-t-md"
		/>
		<div class="flex flex-col py-6 px-4 flex-1">
			<p class="text-xl lg:text-2xl font-semibold mb-2">
				{{ recipe.name }}
			</p>
			<div
				class="font-normal w-full bg-[#2b2e31] flex gap-8 text-lg lg:text-xl mb-4 mt-auto pl-5 py-2 rounded-md"
			>
				<div class="flex items-center gap-1">
					<Icon
						name="mdi:clock-time-eight-outline"
						style="color: #61d095"
					/>
					<span>{{ recipe.cookTimeMinutes }}</span>
				</div>
				<div class="flex items-center gap-1">
					<Icon name="mdi:fire" style="color: #61d095" />
					<span>{{ recipe.caloriesPerServing }}</span>
				</div>
				<div class="flex items-center gap-1">
					<Icon name="mdi:star" style="color: #61d095" />
					<span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
				</div>
			</div>
			<BaseBtn label="View" :to="`/recipes/${recipe.id}`" />
		</div>
	</div>
</template>

<style></style>
