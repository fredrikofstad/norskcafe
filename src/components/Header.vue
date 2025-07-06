<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToLogin() {
  router.push('/login')
}
</script>

<template>
  <ion-header>
    <ion-toolbar color="coffee">
      <div class="header-content">
       <ion-title class="header-title">Norsk Cafe</ion-title>
      </div>

      <ion-buttons slot="end">
        <div class="footer-end">
        <ion-button color="accent" fill="solid" @click="goToLogin">
          Login
        </ion-button>
        </div>

      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>


</style>