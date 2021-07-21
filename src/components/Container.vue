<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SContainer',
  props: {},
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 600px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
