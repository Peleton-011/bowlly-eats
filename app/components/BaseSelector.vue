<template>
	<div>
		<label for="base-selector">Select Base:</label>
		<select
			id="base-selector"
			:value="value"
			@change="emitUpdate($event.target.value)"
		>
			<option v-for="base in options" :key="base" :value="base">
				{{ base }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		options: { type: Array, required: true },
		value: { type: String, required: true }, // Using 'value' as the prop name for v-model compatibility
	},
	methods: {
		emitUpdate(newValue) {
			this.$emit("update:value", newValue); // Emit the update event
		},
	},
};
</script>
