<script lang="ts" setup>
import { type Recipe } from "../../../types/types";
const { id } = useRoute().params;

const { data, error } = await useFetch<Recipe>(
	`https://dummyjson.com/recipes/${id}`
);
</script>

<template>
	<div class="text-3xl">
		<h1>{{ data?.name }}</h1>
	</div>
</template>

<style></style>
