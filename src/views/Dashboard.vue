<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="coffee">
        <ion-title>Dashboard</ion-title>
        <ion-buttons slot="end">
          <ion-button color="accent" fill="solid" @click="logout">
            Logg ut
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content color="cream" class="ion-padding">
      <h2>Hei {{ userName }}!</h2>
      <p>Velkommen til Norsk Cafe sin læringsplattform.</p>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Dine kurs</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label>Grunnleggende norsk</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Norsk samtalepraksis</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase'

const router = useRouter()
const userName = ref('')

// fetch the user name
onMounted(() => {
  const user = auth.currentUser
  if (user) {
    userName.value = user.displayName || user.email || 'Bruker'
  } else {
    // redirect if no user
    router.push('/login')
  }
})

function logout() {
  auth.signOut()
  router.push('/login')
}
</script>

<style scoped>
h2 {
  margin-top: 1rem;
}
</style>
