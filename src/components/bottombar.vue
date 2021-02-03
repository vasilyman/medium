<template>
  <b-navbar id="bottombar" v-resize="resize"></b-navbar>
</template>

<script>
export default {
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
