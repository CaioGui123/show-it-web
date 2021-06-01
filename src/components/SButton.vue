<template>
  <button v-if="!to" :class="{
      btn: true,
      'btn-yellow': true,
      outlined
    }"
  >
    <slot />
  </button>

  <router-link v-else :to="to" :class="{
      btn: true,
      'btn-yellow': true,
      outlined
    }"
  >
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: 'SButton',
  props: {
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.btn {
  font-weight: bold;
  padding: 1.5rem 8rem;
  border: none;
  border-radius: .5rem;
  margin-right: 1.5rem;
  transition: all .2s;
}

.btn-yellow {
  background: var(--yellow);

  &:hover {
    background: var(--dark-yellow);
  }

  &.outlined {
    background: transparent;
    color: var(--yellow);
    border: 2px solid var(--yellow);

    &:hover {
      background: var(--yellow);
      color: var(--black);
    }
  }
}
</style>
