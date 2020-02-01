import { action } from '@storybook/addon-actions';
import { withKnobs, select, number, color } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/vue';

import SvgIcon from './SvgIcon';

const iconList = ['camera', 'check', 'chevron', 'delete', 'location-marker', 'location', 'logo', 'minus', 'person', 'photos', 'plus', 'question', 'search', 'vehicle', 'star'];

export default {
  title: '<SvgIcon>',
  component: SvgIcon,
};

export const AllIcons = () => ({
  components: { SvgIcon },
  data() {
    return {
      iconList,
    }
  },
  template: `<div style="display: flex; flex-flow: row wrap;">
    <div v-for="icon in iconList" style="display: flex; flex-flow: column; align-items: center; margin: 25px">
      <svg-icon :name="icon" :size="30"/>
      <span style="margin-top: 5px;">{{icon}}</span>
    </div>
  </div>`,
  methods: { action: action('clicked') },
});

AllIcons.story = {
  decorators: [withKnobs],
};

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
  decorators: [centered, withKnobs],
  parameters: { 
    docs: { 
      disable: true,
    },
  },
};
