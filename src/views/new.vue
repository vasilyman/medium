<template>
  <div class="is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-center">
    <section class="section">
      <div class="container">
        <div class="columns is-justify-content-center">
          <div class="column is-6 is-12-mobile">
            <h1 class="has-text-centered is-size-3 mb-4">{{header}}</h1>
            <PostEdit
              @submit="submit"
              :title.sync="title"
              :description.sync="description"
              :button="button"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import PostEdit from '@/components/post-edit.vue';

export default {
  components: {
    PostEdit,
  },
  data() {
    return {
      title: '',
      description: '',
      header: 'New article',
      button: 'Create!',
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('post/createPost', { title: this.title, description: this.description })
        .then(() => {
          this.$buefy.toast.open({
            message: 'Post created!',
            type: 'is-success',
          });
          // update store
          this.$store.dispatch('post/getPosts');
        });
    },
  },
};
</script>
