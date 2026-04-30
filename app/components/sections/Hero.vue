<script setup lang="ts">
</script>

<template>
  <section class="hero vh-100 w-full">
    <div class="hero-wrapper">
      <div class="hero-grid vh-100 w-full">
        <div class="hero-grid-item hero-grid-item--1">
          <img src="https://placehold.co/270x270" alt="Profile picture" class="object-cover">
        </div>
        <div class="hero-grid-item hero-grid-item--2">
          <h1>Frontend developer</h1>
        </div>
        <div class="hero-grid-item hero-grid-item--3">
          <ul class="hero-meta-list">
            <li>Working @ Radancy</li>
            <li>based in NL</li>
            <li>NL / EN</li>
          </ul>
        </div>
        <div class="hero-grid-item hero-grid-item--4">
          <p>With UI/UX experience</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 100vh;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.4fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  min-height: 100vh;
}

.hero-grid-item {
  width: 100%;
  padding: 40px;
  border: 1px solid rgb(186, 186, 186);
  box-sizing: border-box;

  &--1 {
    grid-area: 1 / 1 / 2 / 2;
    padding: 0;
  }

  &--2 {
    display: flex;
    grid-area: 1 / 2 / 2 / 3;
    align-items: end;
  }

  &--3 {
    grid-area: 2 / 1 / 3 / 2;
    text-align: right;
    border-bottom: none;
  }

  &--4 {
    grid-area: 2 / 2 / 3 / 3;
    border-bottom: none;
  }

  .hero-meta-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
    }
  }
}

</style>
