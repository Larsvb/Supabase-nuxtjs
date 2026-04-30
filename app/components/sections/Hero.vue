<script setup lang="ts">
</script>

<template>
  <section class="hero bg-sec w-full h-screen">
    <div class="hero-wrapper">
      <div class="hero__grid w-full h-screen">
        <div class="hero__grid-item hero__grid-item--1">
          <img src="https://placehold.co/320x320" alt="Profile picture" class="object-cover">
        </div>
        <div class="hero__grid-item hero__grid-item--2">
          <h1 class="hero__title">
            Frontend<br>developer
          </h1>
        </div>
        <div class="hero__grid-item hero__grid-item--3">
          <ul class="hero__meta-list">
            <li>Working @ Radancy</li>
            <li>Based in NL</li>
            <li>NL / EN</li>
          </ul>
        </div>
        <div class="hero__grid-item hero__grid-item--4">
          <h2 class="hero__subtitle">
            With <span class="text-ter">UI/UX</span> experience
          </h2>
        </div>
      </div>
    </div>
    <!-- <div class="hero__overlay">
      <img src="assets/images/hero_overlay.svg" alt="Decorative overlay image" class="w-full object-contain">
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: 100vh;

  &__grid {
    display: grid;
    grid-template-columns: 1.4fr 2fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  &__grid-item {
    width: 100%;
    padding: 40px;
    border: 1px solid rgb(186, 186, 186);
    box-sizing: border-box;

    &--1 {
      display: flex;
      grid-area: 1 / 1 / 2 / 2;
      justify-content: flex-end;
      align-items: end;
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
  }

  &__title {
    font-size: 5rem;
    line-height: 0.8;
  }

  &__subtitle {
    font-size: 2.2rem;
  }

  &__meta-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
    }
  }

  &__overlay {
    position: absolute;
    bottom: -130px;
    left: 0;
    width: 100%;
    height: 800px;
    pointer-events: none;
  }
}

</style>
