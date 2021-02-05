<template>
  <div class="is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-center">
    <section class="section">
      <div class="container">
        <div class="columns is-justify-content-center">
          <div class="column is-6 is-12-mobile">
            <h1 class="has-text-centered is-size-3 mb-4">Login</h1>
            <form @submit.prevent="submit">
              <b-field
                label="Username"
                label-position="inside"
                :type="{
                  'is-danger': $v.login.$error,
                }"
                :message="{
                  'Invalid E-mail': $v.login.$error
                }"
              >
                <b-input v-model="$v.login.$model"></b-input>
              </b-field>
              <b-field
                label="Password"
                label-position="inside"
                :type="{
                  'is-danger': $v.password.$error,
                }"
                :message="{
                  'Password length must be greater 6 symbols': $v.password.$error
                }"
              >
                <b-input
                  type="password"
                  password-reveal
                  v-model="$v.password.$model"
                ></b-input>
              </b-field>
              <b-button :disabled="$v.$anyError" native-type="submit">Enter!</b-button>
              <transition name="fade">
                <b-notification
                  v-if="error"
                  class="my-3"
                  type="is-danger"
                  has-icon
                  aria-close-label="Close notification"
                  role="alert">
                  {{error}}
                </b-notification>
              </transition>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      login: '',
      password: '',
      error: '',
    };
  },
  validations() {
    return {
      login: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    };
  },
  methods: {
    submit() {
      this.error = '';
      const link = this.$route.query.redirect || '/';
      this.$store.dispatch('user/login', { login: this.login, password: this.password })
        .then(() => this.$router.push(link))
        .catch((e) => {
          this.error = e.message;
        });
    },
  },
};
</script>
