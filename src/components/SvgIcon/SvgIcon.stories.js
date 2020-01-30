import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, number, color } from '@storybook/addon-knobs';

import SvgIcon from './SvgIcon';

export default {
  title: '<SvgIcon>',
  component: SvgIcon,
  decorators: [withKnobs],
};

export const defaultProps = () => ({
  components: { SvgIcon },
  template: `<svg-icon/>`,
  methods: { action: action('clicked') },
});

export const withProps = () => ({
  components: { SvgIcon },
  props: {
    name: {
      default: select('name', ['camera', 'check', 'chevron', 'delete', 'location-marker', 'location', 'logo', 'minus', 'person', 'photos', 'plus', 'question', 'search', 'vehicle', 'star'], 'plus'),
    },
    size: {
      default: number('number', 30, {
        range: true,
        min: 5,
        max: 200,
        step: 1,
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
