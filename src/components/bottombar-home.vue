<template>
  <Bottombar>
    <div class="level is-mobile">
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
import { mapState } from 'vuex';

export default {
  components: {
    Bottombar,
  },
  computed: {
    ...mapState({
      me: (state) => state.user.me,
    }),
    menu() {
      let menu = [
        {
          icon: 'home',
          to: '/',
          exact: true,
          name: 'index',
        },
        {
          icon: 'bookmark',
          to: '/bookmarks',
          name: 'bookmark',
        },
        {
          icon: 'file-medical',
          to: '/new',
          name: 'new',
        },
        {
          icon: 'user',
          to: '/profile',
          name: 'profile',
        },
      ];
      // filter for unauth users
      if (!this.me.id) menu = menu.filter((m) => !['bookmark', 'new'].includes(m.name));
      // filter for not writer users
      if (this.me.role !== 'writer') menu = menu.filter((m) => m.name !== 'new');
      return menu;
    },
  },
};
</script>
