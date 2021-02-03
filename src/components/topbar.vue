<template>
  <div id="topbar" class="shadow" v-resize="resize">
    <div :class="{ 'has-text-white has-background-black': dark }" class="level px-3 mb-0">
      <div class="level-left">
        <slot name="left"></slot>
      </div>
      <div class="level-item h-full">
        <slot name="center">
          {{title}}
        </slot>
      </div>
      <div class="level-right">
        <slot name="right"></slot>
      </div>
    </div>
    <div v-if="$slots.append" id="topbar-append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    dark: Boolean,
  },
  mounted() {
    //
  },
  methods: {
    resize(box) {
      this.setTopbarHeight(box);
    },
    setTopbarHeight(box) {
      document.documentElement.style.setProperty('--topbar', `${box.height}px`);
    },
  },
};
</script>
<style lang="scss">
  #topbar {
    position: fixed;
    top: 0;
    width: 100%;

    &>* {
      height: 3.25rem;
    }
  }
  #topbar-append {
    border-top: 1px solid var(--gray);
  }
</style>
