<template>
  <Topbar title="Bookmarks">
    <template #append>
      <div class="level h-full px-3">
        <div class="level-left">
          <div class="level-item" v-for="(item, i) in groups" :key="i">
            <router-link :to="item.to">
              {{item.title}}
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </Topbar>
</template>
<script>
import Topbar from '@/components/topbar.vue';

export default {
  components: {
    Topbar,
  },
  data() {
    return {
      groups: [
        {
          to: '#',
          title: 'Saved',
        },
        {
          to: '#',
          title: 'Archived',
        },
        {
          to: '#',
          title: 'Recently viewed',
        },
      ],
    };
  },
};
</script>
