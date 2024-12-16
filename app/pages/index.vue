<script lang="ts" setup>
const pageLength = 12;

const currentRecipe = ref(0);


function pageForward() {
	currentRecipe.value += Number(pageLength);
    console.log(currentRecipe.value);
}
function pageBackward() {
	if (currentRecipe.value < pageLength) {
		currentRecipe.value = 0;
		return;
	}
	currentRecipe.value -= Number(pageLength);
}

const options = {
	startingIndex: currentRecipe,
	pageLength,
	pageBackward,
	pageForward,
};

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

		<RecipeList v-bind="options" />
	</main>
</template>

<style></style>
