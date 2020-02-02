import store from '@/store';
import { mapMutations } from 'vuex';

const MockStore = () => ({
  store,
  methods: {
    ...mapMutations(['setFacts']),
  },
  mounted() {
    this.setFacts([
      { fact: 'I am awesome', id: 1 },
      { fact: 'You are awesome', id: 2 }
    ])
  },
  template: `
    <div>
      <story />
    </div>
    `
});

export { MockStore as default };