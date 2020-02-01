import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, select, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Load decorators
// import darkMode from './decorators/darkMode';

// Load component to use in storybook
import StarInput from './StarInput.vue';


// Create stories
storiesOf('inputs.StarInput', module)
	.addDecorator(withKnobs)
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
			isEditMode: { default: boolean('isEditMode', false) },
			size: { default: select('size', ['small', 'large', 30, 40, 50, 60], 'large')},
			color: { default: color('color', '#ebaa41')}
		},
		methods: {
			onInput(val) {
				action(`@input`)(val)
			}
		},
		template: `
			<star-input
				v-model="priority"
				:min="min"
				:max="max"
				:isEditMode="isEditMode"
				:isInverted="isInverted"
				:disabled="disabled"
				@input="onInput"
				:size="size"
				:color="color"
			/>`,
	}));
