<template>
  <div clas="contrived">
    <ul>
      <li
        v-for="fact in allFacts"
        :key="fact.id"
      >
        {{fact.fact}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ContrivedExample',
  props: {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['allFacts']),
  }
}
</script>

<style lang="scss">
  .contrived {

  }
</style>

