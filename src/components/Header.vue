<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { auth } from '../firebase'

const router = useRouter()
const user = ref(null)
const showMenu = ref(false)

onMounted(() => {
  user.value = auth.currentUser
  auth.onAuthStateChanged((u) => {
    user.value = u
  })
})

function goToLogin() {
  router.push('/login')
}

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function logout() {
  auth.signOut()
  router.push('/')
  showMenu.value = false
}

</script>

<template>
  <header class="header">
    <h1 class="header-title">Norsk Cafe</h1>
    <div class="header-user">
      <button
          v-if="!user"
          class="login-button"
          @click="goToLogin"
      >
        Login
      </button>
      <div v-else class="profile-menu-wrapper">
        <img
            :src="user.photoURL || 'https://via.placeholder.com/40'"
            alt="User Profile"
            class="user-icon"
            @click="toggleMenu"
        />
        <div v-if="showMenu" class="profile-menu">
          <button class="menu-item" @click="logout">Logg ut</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-coffee);
  color: var(--color-coffee-contrast);
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.header-title {
  margin: 0;
  font-size: 1.4rem;
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

.user-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  border: 2px solid white;
}

.profile-menu-wrapper {
  position: relative;
}

.profile-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: var(--color-coffee);
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.5rem;
  min-width: 120px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 999;
}

.menu-item {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--color-coffee-contrast);
  padding: 0.5rem;
  text-align: left;
  cursor: pointer;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
