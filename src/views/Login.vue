<template>
  <div class="container">
    <div class="content">
      <h1>Faça login no Show.it</h1>

      <form @submit.prevent="login">
        <SInput
          v-model="user.email"
          label="Email"
          placeholder="Insira seu Email"
          :validation="validations.email ? validations.email[0] : ''"
        />

        <SInput
          v-model="user.password"
          label="Senha"
          type="password"
          placeholder="Insira sua senha"
          :validation="validations.password ? validations.password[0] : ''"
        />

        <SButton>
          Login
        </SButton>
      </form>

      <p>
        Não tem uma conta?
        <router-link :to="{ name: 'register' }">
          Clique para se cadastrar
        </router-link>
      </p>
    </div>

    <div class="background" />
  </div>
</template>

<script>
import SInput from '@/components/Form/SInput.vue';
import SButton from '@/components/Form/SButton.vue';

export default {
  name: 'Login',
  components: {
    SInput,
    SButton,
  },
  data() {
    return {
      user: {
        email: 'alexandra.kautzer@example.org',
        password: 'password',
      },
      validations: [],
    };
  },
  methods: {
    async login() {
      try {
        const data = await this.$store.dispatch('user/login', this.user);

        this.validations = [];

        this.$notify({
          type: 'success',
          title: 'Sucesso!',
          text: 'Usuário logado com sucesso!',
        });

        this.$router.push({ name: 'feed' });
      } catch (error) {
        if (error.response.status == 422) {
          this.validations = error.response.data;

          this.$notify({
            type: 'warn',
            title: 'Ops!',
            text: 'Verifique se os dados foram preenchidos corretamente.',
          });

          return;
        }

        this.$notify({
          type: 'error',
          title: 'Erro!',
          text: 'Houve um erro durante a autenticação.',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: stretch;

  .content {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 1rem;
      font-size: 4rem;
      font-weight: bold;
    }

    form {
      width: 40rem;
    }
  }

  .background {
    flex: 1;
    max-width: 50vw;
    background: url('~@/assets/images/login-bg.jpg') no-repeat;
    background-size: cover;
  }
}
</style>
