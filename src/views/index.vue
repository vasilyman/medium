<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column is-12"
            v-for="(item, i) in posts"
            :key="i"
          >
            <PostCard
              v-bind="item"
            ></PostCard>
          </div>
          <div class="column">
            <b-pagination
              :total="count"
              :current="Number.parseInt(page)"
              :range-before="1"
              :range-after="1"
              :per-page="10"
              order="is-centered"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page"
              @change="(v) => $router.push({ query: { page: v } })"
            >
          </b-pagination>
          </div>
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
