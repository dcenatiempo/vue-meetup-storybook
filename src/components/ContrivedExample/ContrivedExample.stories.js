import centered from '@storybook/addon-centered/vue';

import ContrivedExample from './ContrivedExample';
import MockStore from '../decorators/MockStore';

export default {
  title: '<ContrivedExample>',
  component: ContrivedExample,
};

export const Default = () => ({
  components: { ContrivedExample },
  data() {
    return {
    }
  },
  template: `<ContrivedExample />`,
});

Default.story = {
  decorators: [centered, MockStore],
  // parameters: { 
  //   docs: { 
  //     disable: true,
  //   },
  // },
};
