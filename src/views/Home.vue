<script setup>
import { useRouter } from 'vue-router'
import { auth } from '../firebase'
const router = useRouter()

function goToLogin() {
  const currentUser = auth.currentUser;
  if (currentUser) {
    router.push('/dashboard');
  } else {
    router.push('/login');
  }
}

</script>

<template>
  <div class="home-page">

    <main class="welcome">
      <div class="welcome"></div>
      <h1>Velkommen!</h1>
      <p>Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!</p>
      <button class="start-button" @click="goToLogin">
        La oss komme i gang!
      </button>
    </main>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

.welcome {
  flex: 1;
  text-align: center;
  padding: 2rem;
}

.welcome h1 {
  font-size: 5rem;
  font-family: 'Caveat', cursive;
}

.welcome p {
  margin-bottom: 2rem;
  color: var(--color-medium);
}

.start-button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
}

.start-button:hover {
  background-color: var(--color-accent-hover);
}
</style>
