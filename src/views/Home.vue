<template>
  <div class="home">
    <div class="card">
      <div class="card-header">
        <h1 class="title">
          Descubra e mostre o seu mundo para a humanidade!
        </h1>

        <p class="subtitle">
          <em>"Deixe prevalecer aquilo que te dá forças."</em>
        </p>
      </div>

      <div class="card-footer">
        <SButton :to="{ name: 'login' }">
          Login
        </SButton>

        <SButton
          :to="{ name: 'register' }"
          outlined
        >
          Cadastrar-se
        </SButton>
      </div>
    </div>
  </div>
</template>

<script>
import SButton from '@/components/SButton.vue';

export default {
  name: 'Home',
  components: {
    SButton,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: url('~@/assets/images/home-bg.jpg') no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: var(--white);
  padding: 3rem;
  width: 55rem;
  height: 33rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .card-header {
    .title {
      font-size: 3.6rem;
      font-weight: bold;
      line-height: 4rem;
      color: var(--orange);
    }
    .subtitle {
      margin-top: 1rem;
    }
  }

  .card-footer {
    width: 100%;
  }
}
</style>
