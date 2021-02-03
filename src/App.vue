<template>
  <div id="app" v-w-orientation="orientation" v-w-resize="resize">
    <router-view name="topbar"/>
    <Main>
      <router-view />
    </Main>
    <Bottombar>
      <router-view name="bottombar"/>
    </Bottombar>
  </div>
</template>
<script>
import Main from '@/components/main.vue';
import Bottombar from '@/components/bottombar.vue';

export default {
  components: {
    Main,
    Bottombar,
  },
  mounted() {
    this.setVHeight();
  },
  methods: {
    orientation() {
      this.setVHeight();
    },
    resize() {
      this.setVHeight();
    },
    setVHeight() {
      document.documentElement.style.setProperty('--v-height', `${window.innerHeight}px`);
    },
  },
};
</script>
<style lang="scss">
  #app {
    position: relative;
    height: var(--v-height);
    overflow: hidden;
  }
</style>
