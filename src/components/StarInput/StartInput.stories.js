import { withKnobs, boolean, number, select, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// import mdx from './StarInput.mdx';

// Load component to use in storybook
import StarInput from './StarInput.vue';

export default {
	title: 'Star Input',
  component: StarInput,
	decorators: [withKnobs],
	parameters: {
		componentSubtitle: 'this is the subtitle',
		// docs: {
		// 	page: mdx,
		// },
  },
};

export const WithProps = () => ({
	components: { StarInput },
		data() {
			return {
				priority: 1,
			};
		},
		props: {
			min: { default: number('min', 1) },
			max: { default: number('max', 3) },
			isInverted: { default: boolean('isInverted', false) },
			disabled: { default: boolean('disabled', false) },
			isEditMode: { default: boolean('isEditMode', true) },
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
	});

	WithProps.story = {
		name: 'Default Props',
		parameters: { 
			docs: { 
				height: '200px',
			}
		}
	};
