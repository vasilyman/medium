<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <router-link
            class="column is-12"
            v-for="(item, i) in posts"
            :key="i"
            :to="linkPost(item)"
          >
            <PostCard
              v-bind="item"
            ></PostCard>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PostCard from '@/components/post-card.vue';
import postList from '@/mixins/post-list';

export default {
  mixins: [postList],
  components: {
    PostCard,
  },
};
</script>

<style>

</style>
