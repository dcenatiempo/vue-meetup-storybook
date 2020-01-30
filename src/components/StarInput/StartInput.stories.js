import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

// Load decorators
// import darkMode from './decorators/darkMode';
// import centered from './decorators/centered';

// Load component to use in storybook
import StarInput from './StarInput.vue';


// Create stories
storiesOf('inputs.StarInput', module)
	.addDecorator(withKnobs)
	// .addDecorator(centered)
	// .addDecorator(darkMode)
	.add('display mode', () => ({
		components: { StarInput },
		props: {
			value: { default: number('value', 2) },
			min: { default: number('min', 1) },
			max: { default: number('max', 3) },
			isInverted: { default: boolean('isInverted', true) },
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
				priority: 1,
			};
		},
		props: {
			min: { default: number('min', 1) },
			max: { default: number('max', 3) },
			isInverted: { default: boolean('isInverted', true) },
			disabled: { default: boolean('disabled', false) },
		},
		template: `
			<star-input
				v-model="priority"
				:min="min"
				:max="max"
				isEditMode
				:isInverted="isInverted"
				:disabled="disabled"
			/>`,
	}));
