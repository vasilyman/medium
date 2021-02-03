<template>
  <section class="section">
    <article class="container">
      <h1 class="is-size-2">{{title}}</h1>
      <p>{{description}}</p>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      authorId: '',
    };
  },
  methods: {
    getPost() {
      //
    },
  },
};
</script>
