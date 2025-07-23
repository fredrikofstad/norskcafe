<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import pandaAvatar from '../assets/avatar/panda256.png'
import {auth} from "../firebase.js"; // Adjust path as needed

const props = defineProps({
  user: Object // Expecting the user object from the parent
})

const router = useRouter()

const showMenu = ref(false)
const menuRef = ref(null)

onMounted(() => {
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

function logout() {
  auth.signOut()
  router.push('/login')
  showMenu.value = false
}
</script>

<template>
  <div class="profile-menu-wrapper" ref="menuRef">
    <img
        :src="props.user.photoURL || pandaAvatar"
        alt="User Profile"
        class="user-icon"
        @click="toggleMenu"
    />
    <transition name="fade-slide">
      <div v-if="showMenu" class="profile-menu">
        <div class="profile-header">
          <img
              :src="props.user.photoURL || pandaAvatar"
              alt="Large profile"
              class="profile-large"
          />
          <div class="profile-info">
            <div class="profile-name">{{ props.user.displayName || props.user.email }}</div>
            <div class="profile-level">Level 18</div>
          </div>
        </div>
        <hr class="profile-divider" />
        <button class="menu-item" @click="router.push('/account')">Konto Innstillinger</button>
        <button class="menu-item" @click="logout">Logg ut</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
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

/* Transition Styles */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translate(5px, -10px); /* Slightly move it off-screen */
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.profile-menu {
  position: absolute;
  top: 50px; /* Adjust based on icon size and desired spacing */
  right: 0;
  background-color: var(--color-coffee);
  border: 1px solid #252323;
  border-radius: 6px;
  padding: 0.5rem;
  min-width: 180px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 999; /* Ensure it appears above other content */
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
  /* Add hover states if not already defined globally or inherited */
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>