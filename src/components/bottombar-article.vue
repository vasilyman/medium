<template>
  <Bottombar>
    <div class="level">
      <div
        v-for="(item, i) in menu"
        :key="i"
        @click="clickEvent(item.action)"
        :exact="item.exact"
        class="level-item has-text-centered button is-white is-flat is-medium"
      >
        <div>
          <b-icon :icon="item.icon"></b-icon>
          <p class="title">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </Bottombar>
</template>

<script>
import Bottombar from '@/components/bottombar.vue';

export default {
  components: {
    Bottombar,
  },
  data() {
    return {
      menu: [
        {
          action: 'clap',
          icon: 'sign-language',
        },
        {
          action: 'share',
          icon: 'share',
        },
        {
          action: 'bookmark',
          icon: 'bookmark',
        },
        {
          action: 'font',
          icon: 'font',
        },
      ],
    };
  },
  methods: {
    clap() {
      console.log('clap');
    },
    share() {
      //
    },
    bookmark() {
      //
    },
    font() {
      //
    },
    clickEvent(method) {
      if (['clap', 'share', 'bookmark', 'font'].includes(method)) this[method]();
    },
  },
};
</script>
