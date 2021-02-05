<template>
  <section class="section">
    <article class="container">
      <h1 class="is-size-2">{{title}}</h1>
      <h3 class="is-size-7">Author: {{user}}</h3>
      <p class="my-4">{{description}}</p>
      <PostActions
        class="border-y py-3"
        :id="id"
        :userId="userId"
        :claps="claps"
        @clap="clap"
        @del="del"
      />
    </article>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import PostActions from '@/components/post-actions.vue';

export default {
  components: {
    PostActions,
  },
  data() {
    return {
      title: '',
      description: '',
      claps: 0,
      user: '',
      userId: '',
    };
  },
  computed: {
    ...mapState({
      post: (state) => state.post.post,
    }),
    id() {
      return Number.parseInt(this.$route.params.id, 10);
    },
  },
  watch: {
    post: {
      immediate: true,
      handler(post) {
        this.title = post.title;
        this.description = post.description;
        this.claps = post.claps;
        this.userId = post.userId;

        if (post.userId) {
          this.$store.dispatch('user/getUserLogin', post.userId)
            .then((u) => {
              this.user = u;
            });
        }
      },
    },
  },
  created() {
    this.getPost()
      .then(() => {
        this.$root.$on('clap', this.clap);
      })
      .catch(() => {
        this.$router.push({ name: 'index' });
      });
  },
  destroyed() {
    this.$root.$off('clap', this.clap);
  },
  methods: {
    getPost() {
      return this.$store.dispatch('post/getPost', this.id);
    },
    del() {
      this.$store.dispatch('post/deletePost', this.id)
        .then(() => {
          this.$buefy.toast.open({
            message: `Post ${this.id} deleted!`,
            type: 'is-success',
          });
          this.$store.dispatch('post/getPosts');
          this.$router.push({ name: 'index' });
        });
    },
    clap() {
      this.$store.dispatch('post/clapPost', this.id)
        .then(() => this.$store.dispatch('post/getPost', this.id));
    },
  },
};
</script>
