<template>
  <div id="app">
    <router-view />

    <notifications position="bottom right" />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;700&display=swap');

:root {
  --yellow: #FCC003;
  --dark-yellow: #E5AF03;
  --yellow-transparent: #FCC00355;
  --blue: #1F5EFF;
  --blue-dark: #1a4ac5;
  --blue-transparent: #1F5EFF55;
  --green: #0EEA6D;
  --dark-green: #0DAC52;
  --green-transparent: #0DAC5255;
  --red: #C93359;
  --dark-red: #85223b;
  --red-transparent: #C9335955;

  --black: #232323;
  --white: #FFFFFF;
  --gray-100: #B4B8BD;
  --gray-200: #92969E;
  --gray-300: #878C94;
  --gray-400: #6E737D;
  --gray-500: #575C66;

  font-size: 62.5%;
}

#app {
  font-size: 1.6rem;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  color: var(--black);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input, textarea, button {
  font-family:  'Jost', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--black);
}

button {
  cursor: pointer;
}

a {
  color: var(--blue);
  text-decoration: none;

  &:hover {
    color: var(--blue-dark);
  }
}

@import '~@/assets/scss/notification.scss';
</style>
