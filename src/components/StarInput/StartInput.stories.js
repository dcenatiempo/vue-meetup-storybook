import { storiesOf } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';

// Load component to use in storybook
import StarInput from './StarInput.vue';

// Create stories
storiesOf('inputs.StarInput', module)
	.addDecorator(centered)

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
