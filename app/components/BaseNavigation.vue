<script lang="ts" setup></script>

<template>
	<header class="py-4 border-b">
		<nav class="flex container items-center">
			<NuxtLink to="/" class="flex gap-1 items-center text-emerald">
				<IconHat class="w-14" color="#61D095" size="100" />
				<span class="text-3xl font-bold">Bowlly Eats</span>
			</NuxtLink>
			<ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about">About</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
