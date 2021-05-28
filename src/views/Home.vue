<template>
  <div class="home">
    <div class="card">
      <div class="card-header">
        <h1 class="title">Descubra e mostre o seu mundo para a humanidade!</h1>
        <p class="subtitle"><em>"Deixe prevalecer aquilo que te dá forças."</em></p>
      </div>

      <div class="card-footer">
        <router-link :to="{ name: 'login' }" class="sign-in">Login</router-link>

        <router-link :to="{ name: 'register' }" class="sign-up">Cadastrar-se</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  padding: 2.5rem;
  width: 55rem;
  height: 30rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .card-header {
    .title {
      font-size: 4.8rem;
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
    display: flex;
    justify-content: space-between;

    a.sign-in {
      background: var(--yellow);
      font-weight: bold;
      padding: 1.5rem 8rem;
      border: none;
      border-radius: .5rem;
      margin-right: 1.5rem;
      transition: all .2s;

      &:hover {
        background: var(--dark-yellow);
      }
    }
    a.sign-up {
      background: transparent;
      font-weight: bold;
      color: var(--yellow);
      padding: 1.5rem 8rem;
      border: 2px solid var(--yellow);
      border-radius: .5rem;
      transition: all .2s;

      &:hover {
        background: var(--yellow);
        color: var(--black);
      }
    }
  }
}
</style>
