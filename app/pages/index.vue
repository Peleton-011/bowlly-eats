<script lang="ts" setup>
import { type RecipeResponse } from "../../types/types";
const { data, error } = await useFetch<RecipeResponse>(
	// "/api/recipes"
	"https://dummyjson.com/recipes?limit=6"
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
				<div
					v-for="recipe in data?.recipes"
					class="flex flex-col shadow rounded-md"
				>
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
								<span
									>{{ recipe.rating }} ({{
										recipe.reviewCount
									}})</span
								>
							</div>
						</div>
						<NuxtLink
							:to="`/recipes/${recipe.id}`"
							class="px-4 py-2 self-start bg-metallic-blue rounded-md text-base lg:text-lg cursor-pointer font-bold"
						>
							View
						</NuxtLink>
					</div>
				</div>
			</div>
			<p v-else class="text-xl">
				Oops, something went wrong. Please try again later
			</p>
		</section>
	</main>
</template>

<style></style>
