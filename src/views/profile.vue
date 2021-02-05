<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="is-size-3">Hi, <strong>{{me.login}}!</strong></h1>
        <p>Your role is <strong class="has-text-success">{{me.role}}</strong></p>
        <b-button class="my-3" type="is-primary" @click="logout">Logout</b-button>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  components: {
  },
  computed: {
    ...mapState({
      me: (state) => state.user.me,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
      this.$router.push({ name: 'index' });
    },
  },
};
</script>
