<template>
  <div class="box">
    <select ref="items" style="display: none;">
      <slot />
    </select>

    <div class="header">
      <label>{{ label }}</label>

      <input
        type="text"
        v-model="checkedOptionLabel"
        :placeholder="placeholder"
        @focus="showOptions"
      />
    </div>

    <div class="body" ref="sselectBody" style="display: none;">
      <div v-for="option in options" :key="option.value" class="option">
        <label
          :for="option.value"
          :class="{ active: option.value === value }"
        >
          {{ option.innerHTML }}
        </label>

        <input
          type="radio"
          v-model="value"
          :id="option.value"
          :value="option.value"
          @input="emitValue($event, option.innerHTML);"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SSelect',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      value: null,
      checkedOptionLabel: '',
      options: [],
    };
  },
  methods: {
    showOptions() {
      this.options = this.$refs.items.children;

      this.$refs.sselectBody.style.display = 'flex';
    },
    hideOptions() {
      this.$refs.sselectBody.style.display = 'none';
    },
    emitValue(event, optionLabel) {
      this.checkedOptionLabel = optionLabel;

      this.$emit('input', event.target.value);
      this.hideOptions();
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin: 1.5rem;

  display: inline-block;

  .header input {
    background: var(--white);
    height: 4.5rem;
    width: 30rem;
    padding: 1rem;
    border: 2px solid var(--gray);
    border-radius: 1.5rem;
    font-weight: 400;
    outline: none;
    position: relative;
    transition: all .2s;

    display: flex;
    flex-direction: column;

    &::placeholder {
      color: var(--dark-gray);
    }

    &:focus {
      border: 2px solid var(--blue) ;
      box-shadow: 0 0 0 .3rem var(--blue-transparent) ;
    }
  }

  .body {
    margin-top: 1rem;
    height: auto;
    width: 30rem;
    background: var(--white);
    padding: 1rem;
    border: 2px solid var(--gray);
    border-radius: 1.5rem;
    font-weight: 400;
    position: absolute;

    display: flex;
    flex-direction: column;

    .option input {
      display: none;
    }

    .option label {
      margin: .2rem 0;
      padding: .8rem;
      border-radius: .5rem;
      cursor: pointer;

      display: block;

      &:hover {
        background: var(--gray);
      }

      // Active
      &.active {
        color: var(--blue);
        background: var(--blue-transparent-light);
      }

      &.active:hover {
        background: var(--blue-transparent);
      }
    }
  }
}
</style>
