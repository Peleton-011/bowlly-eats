<template>
	<div v-if="recipe && baseDetails">
		<h1>{{ recipe.name }}</h1>
		<p>{{ recipe.description }}</p>

		<h3>Ingredients</h3>
		<ul>
			<li
				v-for="ingredient in displayedIngredients"
				:key="ingredient.name"
			>
				{{ ingredient.quantity || "" }} {{ ingredient.name }}
			</li>
		</ul>

		<h3>Instructions</h3>
		<ol>
			<li v-for="step in displayedInstructions" :key="step">
				{{ step }}
			</li>
		</ol>

		<BaseSelector
			v-if="baseDetails"
			:options="baseDetails"
			v-model="selectedBase"
		/>
	</div>
	<div v-else>
		<p>Loading recipe...</p>
	</div>
</template>

<script>
export default {
	props: {
		recipe: { type: Object, required: true },
		baseDetails: { type: Object, required: true },
	},
	data() {
		return {
			selectedBase: this.baseDetails
				? this.baseDetails[0]
				: null,
		};
	},
	computed: {
		displayedIngredients() {
			const baseIngredient = {
				name: this.selectedBase,
				...this.baseDetails[this.selectedBase],
			};
			return this.recipe.ingredients.map((ingredient) => {
				if (ingredient.type === "base") {
					return baseIngredient;
				}
				return ingredient;
			});
		},
		displayedInstructions() {
			const baseInstructions =
				this.baseDetails[this.selectedBase]?.instructions || [];
			return this.recipe.instructions
				.map((step) =>
					step.includes("following its specific instructions")
						? step.replace(
								"its specific instructions",
								`the instructions for ${this.selectedBase}`
						  )
						: step
				)
				.concat(baseInstructions);
		},
	},
	methods: {
		updateBase(newBase) {
			this.selectedBase = newBase;
		},
	},
};
</script>
