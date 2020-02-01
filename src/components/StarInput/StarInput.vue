<template>
	<div :class="$style.container">
		<button
			v-for="n in max"
			:key="n"
			:disabled="disabled"
			:class="isEditMode ? $style.editMode : ''"
			:style="`height: ${iconSize}; width: ${iconSize};`"
			@click="onChange(n)"
		>
			<svg-icon
				name="star"
				:size="iconSize"
				:color="getColor(n)"
			/>
		</button>
	</div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon/SvgIcon';

/**
 * Use `StarInput` as a simple numerical input represented by a familiar star rating.
 */
export default {
	name: 'StarInput',
  inheritAttrs: false,
  components: {
    SvgIcon,
  },
	props: {
		color: {
			type: String,
			default: '#ebaa41',
		},
		value: {
			type: Number,
			default: 2,
		},
		min: {
			type: Number,
			default: 1,
		},
		max: {
			type: Number,
			default: 3,
		},
		isInverted: {
			// 3 stars == priority 1, 1 star == priority 3
			type: Boolean,
			default: false,
		},
		isEditMode: {
			type: Boolean,
			default: true,
		},
		size: {
			type: [String, Number],
			default: 'small',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		boundedValue() {
			let boundedValue = this.value < this.min ? this.min : this.value;
			boundedValue = this.value > this.max ? this.max : boundedValue;
			return boundedValue;
		},
		iconSize() {
			if ('number' === typeof this.size) return this.size;
			if (this.size === 'small') return 14;
			return 20;
		},
	},
	methods: {
		getNormalizedValue(val) {
			return this.isInverted ? this.max - val + 1 : val;
		},
		onChange(val) {
			if (!this.isEditMode) return;
			const normalizedValue = this.getNormalizedValue(val);
			let newVal = normalizedValue === this.value
				? 0 // zero means no priority
				: normalizedValue;
			newVal = newVal < this.min
				? this.min
				: newVal;
			this.$emit('input', newVal);
		},
		getColor(n) {
			const normalizedValue = this.getNormalizedValue(this.boundedValue);
			return n <= normalizedValue
				? this.color
				: 'rgba(150, 150, 150, .5)';
		},
	},
};
</script>

<style lang="scss" module>
.container {
	display: flex;
	flex-flow: row;

	button {
		padding: 0;
		background-color: transparent;
		border-width: 0;
		font-size: 0;
		margin: 0 2px;
		box-sizing: border-box;
		border-radius: 50%;
		cursor: pointer;

		&:focus {
			outline: none;
			box-shadow: 0 0 3pt 2pt rgba(83, 165, 254, 0.5), rgba(83, 165, 254, 0.5) 0px 0px 3px inset;
		}

		&:not(.editMode) {
			cursor: inherit;
			&:focus {
				outline: none;
				box-shadow: none;
			}
		}

		&:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
}
</style>
