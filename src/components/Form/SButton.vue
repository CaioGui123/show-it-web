<template>
  <div class="box">
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
  </div>
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
.box {
  margin: 1.5rem;

  .btn {
    padding: 0 1.6rem;
    height: 4.8rem;
    width: 100%;
    color: var(--dark);
    font-weight: bold;
    border: none;
    border-radius: 1.5rem;
    transition: all .2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Yellow
  .btn-yellow {
    background: var(--yellow);

    &:hover {
      background: var(--dark-yellow);
    }

    &:focus {
      border: 2px solid var(--yellow) ;
      box-shadow: 0 0 0 .3rem var(--yellow-transparent) ;
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
}
</style>
