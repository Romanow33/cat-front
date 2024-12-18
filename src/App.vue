<template>
  <NavBar />
  <div class="py-5 bg-body-tertiary">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import NavBar from './components/layout/NavBar.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b0f14;
}
</style>
