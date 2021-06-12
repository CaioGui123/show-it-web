<template>
  <div class="container">
    <div class="content">
      <h1>Cadastre-se no Show.it</h1>

      <form @submit.prevent="register">
        <SInput
          v-model="user.name"
          label="Nome"
          placeholder="Insira seu nome"
          :validation="validations.name ? validations.name[0] : ''"
        />

        <SInput
          v-model="user.email"
          label="Email"
          placeholder="Insira seu email"
          :validation="validations.email ? validations.email[0] : ''"
        />

        <SInput
          v-model="user.password"
          label="Senha"
          type="password"
          placeholder="Insira sua senha"
          :validation="validations.password ? validations.password[0] : ''"
        />

        <SInput
          v-model="user.password_confirmation"
          label="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha"
          :validation="validations.password_confirmation ? validations.password_confirmation[0] : ''"
        />

        <SButton>
          Cadastrar-se
        </SButton>
      </form>

      <p>
        Já tem uma conta?
        <router-link :to="{ name: 'login' }">
          Clique entrar
        </router-link>
      </p>
    </div>

    <div class="background" />
  </div>
</template>

<script>
import SInput from '@/components/SInput.vue';
import SButton from '@/components/SButton.vue';

export default {
  name: 'Login',
  components: {
    SInput,
    SButton,
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      validations: [],
    };
  },
  methods: {
    async register() {
      try {
        const data = await this.$store.dispatch('user/register', this.user);

        this.validations = [];

        this.$notify({
          type: 'success',
          title: 'Sucesso!',
          text: 'Usuário cadastrado com sucesso!',
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
          text: 'Houve um erro durante o cadastro.',
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
    width: 50vw;

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
    max-height: 100vh;
    max-width: 50vw;
    background: url('~@/assets/images/register-bg.jpg') no-repeat;
    background-size: cover;
  }
}
</style>
