export default {
  data() {
    return {
      page: '1',
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.page = this.$route.query?.page || 1;
        this.$store.dispatch('post/getPosts', this.page);
      },
    },
  },
  computed: {
    posts() {
      return this.$store.state.post.posts;
    },
    count() {
      return this.$store.state.post.count;
    },
  },
};
