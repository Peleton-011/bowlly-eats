<script lang="ts" setup>
import DynamicRecipe from "~/components/DynamicRecipe.vue";
import { type RecipeResponse } from "../../types/types";
const { data, error } = await useFetch<RecipeResponse>(
	// "/api/recipes"
	"https://dummyjson.com/recipes?limit=6"
);

const { data: data2, error: error2 } = await useFetch<any>(
     "/api/recipes"
);

useSeoMeta({
	title: "Bowlly Eats",
	description: "Recipes for you to cook!",
	ogTitle: "Bowlly Eats",
	ogDescription: "Recipes for you to cook!",
	ogImage: "/hero.png",
	ogUrl: `http:localhost:3000`,
	twitterTitle: "Bowlly Eats",
	twitterDescription: "Recipes for you to cook!",
	twitterImage: "/hero.png",
	twitterCard: "summary",
});
</script>

<template>
	<main>
		<section class="bg-[#2b2e31]">
			<div
				class="container flex flex-col lg:flex-row items-center py-20 gap-10"
			>
				<div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
					<h1
						class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance"
					>
						Master the Kitchen: Unleash Your Inner Chef Today!
					</h1>
					<p class="text-xl lg:text-2xl mb-8 text-balance">
						Discover recipes helping you find the easiest way to
						cook and stay healthy on a budget.
					</p>
					<button
						class="px-4 py-2 self-start bg-metallic-blue rounded-md text-lg cursor-pointer"
					>
						Browse Recipes
					</button>
				</div>
				<div class="flex-1 order-1 lg:order-2">
					<NuxtImg
						sizes="xs:100vw sm:667px"
						src="/hero.png"
						format="webp"
						densities="x1"
						alt=""
					/>
				</div>
			</div>
		</section>
		<section class="py-20 container">
			<h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
			<p class="text-lg lg:text-xl mb-8">
				Check out our most popular recipes!
			</p>
			<div
				v-if="!error"
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
			>
				<RecipeCard v-for="recipe in data?.recipes" :recipe="recipe" />
                <DynamicRecipe v-for="recipe2 in data2" :recipe="recipe2" />
			</div>
			<p v-else class="text-xl">
				Oops, something went wrong. Please try again later
			</p>
		</section>
	</main>
</template>

<style></style>
