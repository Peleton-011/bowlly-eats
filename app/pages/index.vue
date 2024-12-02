<script lang="ts" setup></script>

<template>
	<main>
		<section class="bg-[#282828]">
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
	</main>
</template>

<style></style>
