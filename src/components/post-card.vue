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
          <b>{{title}}</b>
          <br>
          <small>{{author}}</small> <small>{{created}}</small>
          <br>
          {{description}}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <b-button
            type="is-primary"
            rounded
            icon-right="sign-language"
          >{{claps}}</b-button>
        </div>
        <div class="level-right">
          <div class="level-item">
            <b-button
              type="is-danger"
              rounded
              icon-right="trash"
            >Удалить</b-button>
          </div>
          <div class="level-item">
            <b-button
              type="is-info"
              rounded
              icon-right="edit"
            >Редактировать</b-button>
          </div>
        </div>
      </nav>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    createdAt: String,
    claps: String,
    image: String,
  },
  computed: {
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
    edit() {
      //
    },
    del() {
      //
    },
    clap() {
      //
    },
  },
};
</script>
