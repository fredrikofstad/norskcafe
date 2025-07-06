<template>
  <ion-page>
    <Header />

    <ion-content class="ion-padding" color="cream">
      <div class="welcome">
        <h1>Velkommen!</h1>
        <p>Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!</p>
        <ion-button @click="goToLogin" color="accent">
          La oss komme i gang!
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import { auth } from '../firebase'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  const user = auth.currentUser
  if (user) {
    router.push('/dashboard')
  }
})

function goToLogin() {
  router.push('/login')
}
</script>

<style scoped>
.welcome {
  text-align: center;
  margin-top: 2rem;
}

.welcome h1 {
  font-size: 2rem;
}

.welcome p {
  margin-bottom: 2rem;
  color: var(--ion-color-medium);
}
</style>
