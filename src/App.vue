<script setup lang="ts">
  import NavbarVue from './components/Navbar/Navbar.vue'

  function m1() {
    console.log(import.meta.env)
  }
  m1()
</script>

<template>
  <NavbarVue></NavbarVue>
  <div class="null"></div>
  <router-view></router-view>
</template>

<style>
  .null {
    width: 100%;
    height: 70px;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
