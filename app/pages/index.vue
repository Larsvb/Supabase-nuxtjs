<script setup lang="ts">
  import Hero from '~/components/Hero.vue'
  import About from '~/components/About.vue'
</script>

<template>
  <div class="page">
    <Hero />
    <About />
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
}
</style>
