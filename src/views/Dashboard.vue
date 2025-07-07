<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase'

const router = useRouter()
const userName = ref('')

// check for user
onMounted(() => {
  const user = auth.currentUser
  if (user) {
    userName.value = user.displayName || user.email || 'Bruker'
  } else {
    router.push('/login')
  }
})

function logout() {
  auth.signOut()
  router.push('/login')
}
</script>

<template>
  <div class="dashboard-page">

    <main class="dashboard-content">
      <h2>Hei {{ userName }}!</h2>
      <p>Velkommen til Norsk Cafe sin læringsplattform.</p>

      <section class="courses-card">
        <h3>Dine kurs</h3>
        <ul class="courses-list">
          <li>Grunnleggende norsk</li>
          <li>Norsk samtalepraksis</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  background-color: var(--color-cream);
}


.dashboard-content {
  flex: 1;
  padding: 1rem;
}

.courses-card {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  margin-top: 1rem;
}

.courses-card h3 {
  margin-top: 0;
}

.courses-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.courses-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.courses-list li:last-child {
  border-bottom: none;
}

h2 {
  margin-top: 1rem;
}
</style>
