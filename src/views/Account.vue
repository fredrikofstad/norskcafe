<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase'
import pandaAvatar from '../assets/avatar/panda256.png'

const router = useRouter()
const user = ref(auth.currentUser)

async function deleteAccount() {
  const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.')
  if (!confirmed) return

  try {
    await user.value.delete()
    alert('Your account has been deleted.')
    router.push('/login')
  } catch (error) {
    if (error.code === 'auth/requires-recent-login') {
      alert('Please sign in again to delete your account.')
      router.push('/login')
    } else {
      console.error('Account deletion failed:', error)
      alert('Something went wrong. Please try again.')
    }
  }
}
</script>

<template>
  <div class="account-settings">
    <h1>Account Settings</h1>

    <div v-if="user" class="user-info">
      <img :src="user?.photoURL || pandaAvatar" alt="Profile" class="profile-pic" />
      <p><strong>Name:</strong> {{ user.displayName }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>

    <hr />

    <button class="delete-button" @click="deleteAccount">Delete Account</button>
  </div>
</template>

<style scoped>
.account-settings {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.user-info {
  margin-bottom: 1.5rem;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.delete-button {
  background-color: #a23e48;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #8c373f;
}
</style>
