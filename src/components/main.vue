<template>
  <main id="main">
    <slot></slot>
  </main>
</template>

<script>
export default {

};
</script>
<style lang="scss">
  #main {
    min-height: 100%;
    padding-top: var(--topbar);
    padding-bottom: var(--bottombar);
  }
</style>
