<template>
  <Topbar>
    <template #center>
      <div class="h-full">
        <img
          style="height:100%;width:auto;"
          src="https://miro.medium.com/max/4489/1*s986xIGqhfsN8U--09_AdA.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </div>
    </template>
    <template #right>
      <b-button type="is-text" icon-left="search"/>
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
