<template>
  <Topbar :dark="true" :title="title">
    <template #left>
      <b-button type="is-link" @click.prevent="$router.back()" icon-left="chevron-left" />
    </template>
    <template v-if="!title" #center>
      Article
    </template>
  </Topbar>
</template>
<script>
import Topbar from '@/components/topbar.vue';

export default {
  props: {
    title: String,
  },
  components: {
    Topbar,
  },
};
</script>
