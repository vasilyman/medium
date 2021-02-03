<template>
  <b-navbar id="topbar" v-resize="resize"></b-navbar>
</template>

<script>
export default {
  mounted() {
    //
  },
  methods: {
    resize(box) {
      this.setTopbarHeight(box);
    },
    setTopbarHeight(box) {
      document.documentElement.style.setProperty('--topbar', `${box.height}px`);
    },
  },
};
</script>
<style>
  #topbar {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
