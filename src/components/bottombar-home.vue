<template>
  <Bottombar>
    <div class="level">
      <router-link
        v-for="(item, i) in menu"
        :key="i"
        :to="item.to"
        :exact="item.exact"
        class="level-item has-text-centered button is-black is-flat"
      >
        <div>
          <b-icon :icon="item.icon"></b-icon>
          <p class="title">{{ item.title }}</p>
        </div>
      </router-link>
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
          icon: 'home',
          to: '/',
          exact: true,
        },
        {
          icon: 'bookmark',
          to: '/bookmarks',
        },
        {
          icon: 'file-medical',
          to: '/new',
        },
        {
          icon: 'user',
          to: '/profile',
        },
      ],
    };
  },
};
</script>
