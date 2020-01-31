import SvgIcon from './SvgIcon';

export default {
  title: '<SvgIcon>',
  component: SvgIcon,
};

export const defaultProps = () => ({
  components: { SvgIcon },
  template: `<svg-icon/>`,
});

export const withProps = () => ({
  components: { SvgIcon },
  data() {
    return {
      name: 'logo',
      size: 100,
      color: 'limegreen',
    }
  },
  template: `
  <svg-icon
    :name="name"
    :size="size"
    :color="color"
  />`,

});
