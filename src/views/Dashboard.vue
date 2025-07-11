<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const router = useRouter()
const userName = ref('')

// check for user
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const fullName = user.displayName || user.email || 'Bruker'
      userName.value = fullName.split(' ')[0]  // take first name
    } else {
      router.push('/login')
    }
  })
})

function logout() {
  auth.signOut()
  router.push('/login')
}
</script>

<template>
  <div class="dashboard-page">

    <main class="dashboard-content">

      <div class="dashboard-welcome">
        <h2>Hei {{ userName }}!</h2>
        <p>Velkommen til ditt dashboard. Ta en titt rundt!</p>
      </div>

      <div class="cards-container">
        <div class="dashboard-card" @click="goToLearn">
          <div class="card-text">
            <h3>Lær</h3>
            <p>Start en ny leksjon og lær nye ord.</p>
          </div>
          <img src="../assets/dashboard/read.png" alt="Lær" class="card-icon" />
        </div>

        <div class="dashboard-card" @click="goToReview">
          <div class="card-text">
            <h3>Repeter</h3>
            <p>Gå gjennom ordene  du allerede kan.</p>
          </div>
          <img src="../assets/dashboard/review.png" alt="Repeter" class="card-icon" />
        </div>

        <div class="dashboard-card" @click="goToListen">
          <div class="card-text">
            <h3>Lytt</h3>
            <p>kommer snart.</p>
          </div>
          <img src="../assets/dashboard/listen.png" alt="Lytt" class="card-icon" />
        </div>

      </div>

    </main>
  </div>
</template>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
}

.dashboard-welcome {
  text-align: center;
  margin-top: 2rem;
}

.dashboard-welcome h2 {
  font-family: 'Caveat', cursive;
  font-size: 2.3rem;
}


.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: center;
}



.dashboard-card {
  background-color: white;
  opacity: 0.95;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 390px;
  flex: 1 1 300px;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin-top: 1rem;
}

@media (max-width: 600px) {
  .dashboard-card {
    transform: scale(0.95);
    padding: 0.8rem;
    margin-top: 0rem;
  }
  .card-icon {
    width: 50%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    max-width: 256px;
    min-width: 128px;
  }

  .card-text h3 {
    font-size: 1.25rem;
  }

  .card-text p {
    font-size: 0.9rem;
  }
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* push content toward the top */
  height: 100%;
  padding-left: 1rem;
}

.card-text h3 {
  font-family: 'Caveat', cursive;
  font-size: 3rem; /* adjust as needed */
  margin-bottom: 0.5rem;
}

.dashboard-card:hover {
  transform: scale(1.05);
}

.card-icon {
  width: 256px;
  height: 256px;
  margin-right: 1rem;
}

</style>
