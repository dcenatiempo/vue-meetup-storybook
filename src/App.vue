<template>
  <div id="app">
    <svg-icon
      name="logo"
      :size="100"
      color="green"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SvgIcon from './components/SvgIcon.vue'

export default {
  name: 'app',
  components: {
    SvgIcon,
  },
  methods: {
    ...mapActions(['fetchCatFact']),
  },
  mounted() {
    this.fetchCatFact();
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
