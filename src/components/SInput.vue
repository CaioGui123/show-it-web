<template>
  <div class="box">
    <label>{{ label }}</label>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :class="{
        'full-width': fullWidth,
        'is-invalid': validation,
      }"
      @input="emitValue($event)"
    >

    <span
      v-show="validation"
      class="invalid-feedback"
    >
      {{ validation }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SInput',
  props: {
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
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    validation: {
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
.box {
  margin: 1.5rem;

  display: flex;
  flex-direction: column;

  input {
    background: var(--white);
    height: 5.5rem;
    width: 100%;
    padding: 1.6rem;
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

    &.is-invalid {
      border: 2px solid var(--red) ;
      &:focus {
        box-shadow: 0 0 0 .3rem var(--red-transparent) ;
      }
    }

    &.full-width {
      width: 100%;
    }
  }

  span.invalid-feedback {
    color: var(--red);
  }
}
</style>
