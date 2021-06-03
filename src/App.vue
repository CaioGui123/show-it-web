<template>
  <div id="app">
    <router-view />

    <notifications />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;700&display=swap');

:root {
  --yellow: #FCC003;
  --dark-yellow: #E0AF15;
  --orange: #EE7B01;
  --blue: #1F5EFF;
  --blue-transparent: #1F5EFF55;
  --blue-transparent-light: #1F5EFF35;
  --red: #C93359;
  --red-transparent: #C9335955;
  --red-transparent-light: #C9335935;

  --black: #232323;
  --white: #FFFFFF;
  --gray: #E0E0E0;
  --dark-gray: #BDBDBD;

  font-size: 62.5%;
}

#app {
  font-size: 1.6rem;
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
  text-decoration: none;
}

@import '~@/assets/scss/notification.scss';
</style>
