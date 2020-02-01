<template>
  <div
    class="icon-container"
    :style="`height: ${size}px; width: ${size}px; color: ${color}; fill: ${color}`"
    v-html="svg"
  />
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      default: 'logo'
    },
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
  computed: {
    svg() { return require(`!!html-loader!@/assets/svg/${this.name}.svg`)},
  },
  methods: {
    prepareSvg() {
      this.$nextTick(() => {
        this.$el.firstChild.classList.add('svg-icon');
        this.$el.firstChild.removeAttribute('height');
        this.$el.firstChild.removeAttribute('width');
      });
    }
  },
  mounted () {
    this.prepareSvg();
  },
  watch: {
    name(val) {
      this.prepareSvg();
    },
  },
}
</script>

<style lang='scss'>
  .icon-container {
    box-sizing: border-box;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .svg-icon {
      fill: currentColor;
      height: 100%;
      width: 100%;
    }
  }
</style>
