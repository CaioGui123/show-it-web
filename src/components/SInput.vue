<template>
  <div class="container">
    <label>{{ label }}</label>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="emitValue($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'SInput',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: true,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    emitValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 1rem;

  display: flex;
  flex-direction: column;

  input {
    background: var(--white);
    height: 4.5rem;
    width: 30rem;
    padding: 1rem;
    border: 2px solid var(--gray);
    border-radius: 1.5rem;
    font-weight: 400;
    outline: none;
    transition: all .2s;

    &::placeholder {
      color: var(--dark-gray);
    }

    &:focus {
      border: 2px solid var(--blue) ;
      box-shadow: 0 0 0 .3rem var(--blue-transparent) ;
    }
  }
}
</style>
