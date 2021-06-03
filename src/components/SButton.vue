<template>
  <button
    v-if="!to"
    :type="type"
    :class="{
      btn: true,
      'btn-yellow': true,
      outlined
    }"
  >
    <slot />
  </button>

  <router-link
    v-else
    :to="to"
    :class="{
      btn: true,
      'btn-yellow': true,
      outlined
    }"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'SButton',
  props: {
    type: {
      type: String,
      required: false,
      default: 'submit',
    },
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
  margin: 1.5rem;
  height: 4.5rem;
  width: 30rem;
  font-weight: bold;
  border: none;
  border-radius: 1.5rem;
  transition: all .2s;

  display: flex;
  justify-content: center;
  align-items: center;
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
