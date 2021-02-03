<template>
  <nav id="bottombar" :class="bottombarType" v-resize="resize">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  props: {
    bottombarType: {
      type: String,
      default: 'has-background-black',
    },
  },
  mounted() {
    //
  },
  methods: {
    resize(box) {
      this.setBottombarHeight(box);
    },
    setBottombarHeight(box) {
      document.documentElement.style.setProperty('--bottombar', `${box.height}px`);
    },
  },
};
</script>
<style>
  #bottombar {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
