<template>
  <section class="hero">
    <h1>Welcome to Your App</h1>
    <p>This is your hero section</p>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>
