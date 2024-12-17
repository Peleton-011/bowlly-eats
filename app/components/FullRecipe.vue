<script lang="ts" setup>
import { ref, computed } from "vue";
import { type Recipe, type Base } from "../../types/types";
import commonBases from "../../assets/common_bases.json";

const props = defineProps<{
	recipe: Recipe;
}>();

// Create a reactive reference for the selected base
const selectedBase = ref<Base>(commonBases?.[0] as Base);

// Compute instructions based on the selected base
const dynamicInstructions = computed(() => {
	// Start with the base-specific instructions
	const baseInstructions = selectedBase.value.instructions || [];

	// Combine base instructions with the original recipe instructions
	return [...baseInstructions, ...props.recipe.instructions];
});

// Function to update the selected base
const updateBase = (event: Event) => {
	const target = event.target as HTMLSelectElement;
	const baseName = target.value;
	const foundBase = commonBases.find((base) => base.name === baseName);
	if (foundBase) {
		selectedBase.value = foundBase;
	}
};
</script>

<template>
	<div class="flex flex-col max-w-screen-lg container py-20">
		<!-- <RecipeDetails :recipe="recipe" :base="selectedBase" /> -->

		<!-- Header and other existing sections remain the same -->

        <!-- Image Section -->
        <div class="mb-8">
            <NuxtImg 
                :src="recipe.image"
                :alt="recipe.name"
                format="webp"
                sizes="xs:100vw sm:50vw lg:400px"
                class="rounded-md aspect-square object-cover"
                :quality="50"
            />
        </div>
		<!-- Ingredients Section with Base Selection -->
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
							<select
								v-if="
									ingredient.options &&
									ingredient.type === 'base'
								"
								@change="updateBase($event)"
								class="bg-inherit decoration-inherit"
							>
								<option
									v-for="option in ingredient.options"
									:key="String(option)"
									:value="option"
									class="decoration-inherit"
								>
									{{ option }}
								</option>
							</select>
							<select
								v-else-if="ingredient.options"
								name=""
								id=""
								class="bg-inherit decoration-inherit"
							>
								<option
									v-for="option in ingredient.options"
									:key="option.name || String(option)"
									:value="option.name || option"
									class="decoration-inherit"
								>
									{{ option.name || option }}
									<span v-if="option.quantity"
										>({{ option.quantity }})</span
									>
								</option>
							</select>
							<div v-else>
								{{ ingredient.name }}
								<span v-if="ingredient.quantity"
									>({{ ingredient.quantity }})</span
								>
							</div>
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
					v-for="(instruction, index) in dynamicInstructions"
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
