<template>
  <article class="media p-3 rounded shadow">
    <figure v-if="image" class="media-left">
      <p class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <router-link :to="{ name: 'article', params: { id, userId } }">
            <b>{{title}}</b>
          </router-link>
          <br>
          <small>{{author}}</small> <small>{{created}}</small>
          <br>
          {{description}}
        </p>
      </div>
      <PostActions
        :id="id"
        :userId="userId"
        :claps="claps"
        @clap="clap"
        @del="del"
      />
    </div>
  </article>
</template>
<script>
import { mapState } from 'vuex';
import PostActions from '@/components/post-actions.vue';

export default {
  props: {
    id: Number,
    title: String,
    description: String,
    createdAt: String,
    claps: Number,
    image: String,
    userId: Number,
  },
  components: {
    PostActions,
  },
  computed: {
    ...mapState({
      me: (state) => state.user.me,
    }),
    created() {
      return this.$moment(this.createdAt).fromNow();
    },
    self() {
      return false;
    },
    author() {
      return '';
    },
  },
  methods: {
    del() {
      this.$store.dispatch('post/deletePost', this.id)
        .then(() => {
          this.$buefy.toast.open({
            message: `Post ${this.id} deleted!`,
            type: 'is-success',
          });
          this.$store.dispatch('post/getPosts');
        });
    },
    clap() {
      this.$store.dispatch('post/clapPost', this.id)
        .then(() => this.$store.dispatch('post/getPosts'));
    },
  },
};
</script>
