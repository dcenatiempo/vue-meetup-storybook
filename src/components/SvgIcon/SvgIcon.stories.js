import { action } from '@storybook/addon-actions';
import { withKnobs, select, number, color } from '@storybook/addon-knobs';

import SvgIcon from './SvgIcon';

const iconList = ['camera', 'check', 'chevron', 'delete', 'location-marker', 'location', 'logo', 'minus', 'person', 'photos', 'plus', 'question', 'search', 'vehicle', 'star'];

export default {
  title: '<SvgIcon>',
  component: SvgIcon,
  decorators: [withKnobs],
};

export const allIcons = () => ({
  components: { SvgIcon },
  data() {
    return {
      iconList,
    }
  },
  template: `<div style="display: grid; grid-template-columns: max-content max-content; grid-gap: 5px;">
    <template v-for="icon in iconList">
      <span>{{icon}}:</span>
      <svg-icon :name="icon" :size="30"/>
    </template>
  </div>`,
  methods: { action: action('clicked') },
});

export const WithKnobs = () => ({
  components: { SvgIcon },
  data() {
    return {
      iconList,
    }
  },
  props: {
    name: {
      default: select('name', iconList, 'plus'),
    },
    size: {
      default: number('size', 30, {
        range: true,
        min: 5,
        max: 200,
        step: 5,
      }),
    },
    color: {
      default: color('color', '#000000'),
    },
  },
  template: `
  <svg-icon
    :name="name"
    :size="size"
    :color="color"
  />`,
  methods: { action: action('clicked') },
});

WithKnobs.story = {
  parameters: { 
    docs: { 
      disable: true,
    },
  },
};
