<template>
  <div class="login">
    <form @submit.prevent="">
      <SInput
        label="Email"
        placeholder="Insira seu Email"
        v-model="email"
      />

      <SInput
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
        v-model="password"
      />

      <SSelect label="Seletor" placeholder="Selecione um valor">
        <option value="1">Item 1</option>
        <option value="2">Item 2</option>
        <option value="3">Item 3</option>
      </SSelect>
    </form>
  </div>
</template>

<script>
import SInput from '@/components/SInput.vue';
import SSelect from '@/components/SSelect.vue';

export default {
  name: 'Login',
  components: {
    SInput,
    SSelect,
  },
  data() {
    return {
      email: 'teste@teste.com',
      password: '12345678',
      test: '',
    };
  },
  watch: {
    test: (value) => console.log(value),
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
