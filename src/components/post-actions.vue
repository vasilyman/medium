<template>
  <nav class="level is-mobile">
    <div class="level-left">
      <b-button
        type="is-primary is-text is-inverted"
        rounded
        icon-right="sign-language"
        @click.prevent="$emit('clap')"
        :disabled="!me.id || userId === me.id"
      >{{claps}}</b-button>
    </div>
    <div v-if="me.role === 'writer' && userId === me.id" class="level-right">
      <div class="level-item">
        <b-button
          type="is-danger is-text is-inverted"
          rounded
          icon-right="trash"
          @click.prevent="$emit('del')"
        ><span v-if="!bp.mobile">Удалить</span></b-button>
      </div>
      <div class="level-item">
        <b-button
          tag="router-link"
          type="is-info is-text is-inverted"
          rounded
          icon-right="edit"
          :to="{ name: 'edit', params: { id: id } }"
        ><span v-if="!bp.mobile">Редактировать</span></b-button>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex';

export default {
  props: {
    id: Number,
    claps: Number,
    userId: Number,
  },
  computed: {
    ...mapState(['bp']),
    ...mapState({
      me: (state) => state.user.me,
    }),
  },
};
</script>
