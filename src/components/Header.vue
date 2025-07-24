<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { auth } from '../firebase'
import coffeeLogo from '../assets/coffee.svg'

import { useReviewStats } from '../composables/useReviewStats'
const { reviewedCount, correctCount, totalCount, reviewedWords } = useReviewStats()

import ProfileMenu from '../components/UserMenu.vue'

const router = useRouter()
const route = useRoute()

const user = ref(null)

const isReviewPage = computed(() => route.name === 'review')

const accuracy = computed(() => {
  if (!correctCount.value || !reviewedCount.value || reviewedCount.value === 0) return 100

  return Math.round((correctCount.value / reviewedWords.value.length) * 100)
})

onMounted(() => {
  user.value = auth.currentUser
  auth.onAuthStateChanged((u) => {
    user.value = u
  })
})


function goToLogin() {
  router.push('/login')
}

function goHome() {
  router.push('/dashboard')
}
</script>

<template>
  <header class="header">
    <div class="header-left">
      <button class="header-title-button" @click="goHome">
        <span class="header-title-text">Norsk</span>
        <img :src="coffeeLogo" alt="Logo" class="header-logo" />
        <span class="header-title-text">Cafe</span>
      </button>
    </div>
    <!-- For review session -->
    <div v-if="isReviewPage" class="review-stats">
      <span>{{ reviewedCount }} / {{ totalCount / 2 }} ord</span>
      <span class="accuracy">{{ accuracy }}% riktige</span>
    </div>
    <!-- For most pages -->
    <div v-else>
      <div class="header-user">
        <button v-if="!user" class="login-button" @click="goToLogin">
          Login
        </button>
        <ProfileMenu v-else :user="user" />
      </div>
    </div>
  </header>
</template>

<style scoped>

.header-title-text {
  font-family: 'Caveat', cursive;
  font-size: 1.8rem;
  font-weight: 700;
}

.header-logo {
  margin-left: 8px;
  width: 32px;
  height: 32px;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  transform: translateY(3px);
}

.header-title-button {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: bold;
  padding: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.header-title-button:hover {
  text-decoration: underline;
}

.header-user {
  display: flex;
  align-items: center;
  position: relative;
}

.login-button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.login-button:hover {
  background-color: var(--color-accent-hover);
}

.review-stats {
  font-size: 0.95rem;
  color: #fff;
  display: flex;
  gap: 1rem;
}

.accuracy {
  font-weight: 600;
}

</style>