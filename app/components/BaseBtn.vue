<script lang="ts" setup>
defineProps<{
	label?: string;
	to?: string;
}>();
</script>

<template>
	<NuxtLink
		:to="{ path: to }"
		class="px-4 py-2 self-start bg-metallic-blue rounded-md text-base lg:text-lg cursor-pointer font-bold"
	>
        {{ label }}
	</NuxtLink>
</template>

<style></style>
