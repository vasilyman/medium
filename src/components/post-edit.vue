<template>
  <form @submit.prevent="$emit('submit')">
    <b-field label="Title" label-position="inside">
      <b-input :value="title" @input="(value) => $emit('update:title', value)"></b-input>
    </b-field>
    <b-field label="Content" label-position="inside">
      <b-input
        maxlength="500"
        type="textarea"
        :value="description"
        @input="(value) => $emit('update:description', value)"
      ></b-input>
    </b-field>
    <b-button native-type="submit">{{button || 'Submit'}}</b-button>
  </form>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    button: String,
  },
};
</script>
