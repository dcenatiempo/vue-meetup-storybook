import { storiesOf } from '@storybook/vue';

// Load component to use in storybook
import StarInput from './StarInput.vue';

// Create stories
storiesOf('inputs.StarInput', module)
	.add('display mode', () => ({
		components: { StarInput },
		data() {
			return {
				value: 2,
				min: 1,
				max: 3,
				isInverted: true,
			}
		},
		template: `
			<star-input
				:value="value"
				:min="min"
				:max="max"
				:isInverted="isInverted"
			/>`,
	}))
	.add('Edit mode', () => ({
		components: { StarInput },
		data() {
			return {
				value: 2,
				min: 1,
				max: 3,
				isInverted: true,
				disabled: false,
			};
		},

		template: `
			<star-input
				v-model="value"
				:min="min"
				:max="max"
				isEditMode
				:isInverted="isInverted"
				:disabled="disabled"
			/>`,
	}));
