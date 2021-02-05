<script>
import NewPost from '@/views/new.vue';

export default {
  extends: NewPost,
  data() {
    return {
      header: '',
      button: 'Change!',
    };
  },
  computed: {
    id() {
      return Number.parseInt(this.$route.params.id, 10);
    },
  },
  created() {
    this.header = `Edit post ${this.id}`;

    this.$store.dispatch('post/getPost', this.id)
      .then(() => {
        const { post } = this.$store.state.post;
        this.title = post.title;
        this.description = post.description;
      })
      .catch(() => this.$router.push({ name: 'index' }));
  },
  methods: {
    submit() {
      this.$store.dispatch('post/updatePost', { id: this.id, title: this.title, description: this.description })
        .then(() => {
          this.$buefy.toast.open({
            message: `Post ${this.id} updated!`,
            type: 'is-success',
          });
          // update store
          this.$store.dispatch('post/getPosts');
        });
    },
  },
};
</script>
