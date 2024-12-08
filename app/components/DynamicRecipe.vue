<template>
	<div class="recipe-card" @click="navigateToRecipe">
		<h2>{{ recipe.title }}</h2>
		<p>{{ recipe.description }}</p>
		<p>
			<strong>Cost:</strong> ${{ recipe.approximate_cost.min }} - ${{
				recipe.approximate_cost.max
			}}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		recipe: { type: Object, required: true },
	},
	methods: {
		navigateToRecipe() {
			this.$router.push(`/recipes2/${this.recipe.id}`);
		},
	},
};
</script>

<style scoped>
.recipe-card {
	border: 1px solid #ddd;
	padding: 1rem;
	margin: 0.5rem 0;
	cursor: pointer;
}
</style>
