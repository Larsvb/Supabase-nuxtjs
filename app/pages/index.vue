<script setup lang="ts">
  import Hero from '~/components/sections/Hero.vue'
  import About from '~/components/sections/About.vue'
</script>

<template>
  <div class="page">
    <Hero />
    <About />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.page {
  width: 100%;
  min-height: 100vh;
}
</style>
