<template>
  <div id="app" v-w-orientation="orientation" v-w-resize="resize">
    <router-view name="topbar"/>
    <Main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </Main>
    <Bottombar>
      <router-view name="bottombar"/>
    </Bottombar>
  </div>
</template>
<script>
import Main from '@/components/main.vue';
import Bottombar from '@/components/bottombar.vue';
import { users, posts } from '@/db.json';

export default {
  components: {
    Main,
    Bottombar,
  },
  data() {
    return {
      bp: {},
    };
  },
  mounted() {
    this.setVHeight();
    this.calcBp();

    // set posts to localstorage from db file
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('users', JSON.stringify(users));
  },
  methods: {
    orientation() {
      this.setVHeight();
    },
    resize() {
      this.setVHeight();
      this.calcBp();
    },
    setVHeight() {
      document.documentElement.style.setProperty('--v-height', `${window.innerHeight}px`);
    },
    calcBp() {
      this.$store.dispatch('calcBp');
    },
  },
};
</script>
<style lang="scss">
  #app {
    position: relative;
    height: var(--v-height);
  }
</style>
