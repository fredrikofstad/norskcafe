<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { auth } from '../firebase'
import coffeeLogo from '../assets/coffee.svg'
import pandaAvatar from '../assets/avatar/panda256.png'


const router = useRouter()
const user = ref(null)
const showMenu = ref(false)
const menuRef = ref(null)

onMounted(() => {
  user.value = auth.currentUser
  auth.onAuthStateChanged((u) => {
    user.value = u
  })

  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function onClickOutside(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    showMenu.value = false
  }
}

function goToLogin() {
  router.push('/login')
}

function logout() {
  auth.signOut()
  router.push('/login')
  showMenu.value = false
}

function goHome() {
  router.push('/')
}
</script>

<template>
  <header class="header">
    <button class="header-title-button" @click="goHome">
      <span class="header-title-text">Norsk</span>
      <img :src="coffeeLogo" alt="Logo" class="header-logo" />
      <span class="header-title-text">Cafe</span>
    </button>


    <div class="header-user">
      <button
          v-if="!user"
          class="login-button"
          @click="goToLogin"
      >
        Login
      </button>
      <div v-else class="profile-menu-wrapper" ref="menuRef">
        <img
            :src="user.photoURL || pandaAvatar"
            alt="User Profile"
            class="user-icon"
            @click="toggleMenu"
        />
        <transition name="fade-slide">
          <div v-if="showMenu" class="profile-menu">
            <div class="profile-header">
              <img
                  :src="user.photoURL || pandaAvatar"
                  alt="Large profile"
                  class="profile-large"
              />
              <div class="profile-info">
                <div class="profile-name">{{ user.displayName || user.email }}</div>
                <div class="profile-level">Level 18</div>
              </div>
            </div>
            <hr class="profile-divider" />
            <button class="menu-item" @click="router.push('/account')">Konto Innstillinger</button>
            <button class="menu-item" @click="logout">Logg ut</button>
          </div>
        </transition>
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

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translate(5px, -10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.profile-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: var(--color-coffee);
  border: 1px solid #252323;
  border-radius: 6px;
  padding: 0.5rem;
  min-width: 180px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 999;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.profile-large {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 0.5rem;
  object-fit: cover;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-weight: bold;
  color: var(--color-coffee-contrast);
}

.profile-level {
  font-size: 0.8rem;
  color: var(--color-coffee-contrast);
}

.profile-divider {
  border: 0;
  border-top: 1px solid rgba(255,255,255,0.2);
  margin: 0.5rem 0;
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
