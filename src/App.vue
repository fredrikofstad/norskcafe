<template>
  <ion-app>
    <ion-page>
      <router-view />
      <Footer />
    </ion-page>
  </ion-app>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>