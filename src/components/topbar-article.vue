<template>
  <Topbar :dark="true">
    <template #left>
      <b-button type="is-link" @click.prevent="$router.back()" icon-left="chevron-left" />
    </template>
    <template #center>
      Article
    </template>
  </Topbar>
</template>
<script>
import Topbar from '@/components/topbar.vue';

export default {
  components: {
    Topbar,
  },
};
</script>
