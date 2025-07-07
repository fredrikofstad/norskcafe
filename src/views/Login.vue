<script setup>
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

async function googleSignIn() {
  const provider = new GoogleAuthProvider()
  try {
    await signInWithPopup(auth, provider)
    router.push('/dashboard')
  } catch (e) {
    console.error('Google sign-in failed', e)
    alert('Google sign-in failed: ' + e.message)
  }
}
</script>

<template>
  <div class="login-page">

    <main class="login-content">
      <div class="login-inner">
        <h2 class="login-title">Velkommen tilbake!</h2>
        <p class="login-subtitle">
          Logg inn med Google for å fortsette å lære norsk.
        </p>

        <div class="google-wrapper" @click="googleSignIn">
          <button class="gsi-material-button">
            <div class="gsi-material-button-content-wrapper">
              <div class="gsi-material-button-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    style="width: 24px; height: 24px"
                >
                  <path fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98
                    6.19C6.51 42.62 14.62 48 24 48z" />
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span class="gsi-material-button-contents">Fortsett med Google</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  background-color: #fdf6ee; /* cream */
}

.login-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
}

.login-inner {
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

.login-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.login-subtitle {
  color: #636469; /* medium color */
  margin-bottom: 2rem;
}

.google-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.gsi-material-button {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  background-color: white;
  border: 1.3px solid #747775;
  border-radius: 20px;
  box-sizing: border-box;
  color: var(--color-medium);
  cursor: pointer;
  font-family: 'Roboto', arial, sans-serif;
  font-size: 18px;
  height: 50px;
  letter-spacing: 0.25px;
  line-height: 1.4;
  outline: none;
  overflow: hidden;
  padding: 0 36px;
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
  white-space: nowrap;
  max-width: 400px;
}

.gsi-material-button .gsi-material-button-icon {
  height: 28px;
  margin-right: 12px;
  min-width: 28px;
  width: 28px;
}

.gsi-material-button-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
