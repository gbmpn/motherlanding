<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <p>Coming soon...</p>
      <a href="mailto:contact@motherparis.com">contact@motherparis.com</a>
      <!-- <nav>
        <RouterLink to="/"> <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /></RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
        <RouterLink to="/order">Commande en ligne</RouterLink>
        <RouterLink to="/subscription">Abonnement Floral </RouterLink>
        <RouterLink to="/objects">Vases & Objets</RouterLink>
        <RouterLink to="/gallery">Gallerie </RouterLink>
        <RouterLink to="/contact">Contact </RouterLink>
      </nav> -->

  </header>

  <RouterView />
</template>

<script></script>

<style scoped>

</style>
