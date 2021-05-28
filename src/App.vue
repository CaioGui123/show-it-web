<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;700&display=swap');

:root {
  --yellow: #FCC003;
  --dark-yellow: #E0AF15;
  --orange: #EE7B01;
  --brown: #2B1106;
  --black: #232323;
  --white: #FFFFFF;

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
  font-weight: 500;
  color: var(--black);
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
