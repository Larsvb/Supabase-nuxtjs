<script setup lang="ts">
  import Hero from '~/components/Hero.vue'
  import Features from '~/components/Features.vue'
  import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="page">
    <Hero />
    <Features />
    <Footer />
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
}
</style>
