<script setup>
import {computed, ref} from 'vue'
import privacyData from '../locales/privacy.json'

const language = ref('no')

function toggleLanguage() {
  language.value = language.value === 'no' ? 'en' : 'no'
}

const content = computed(() => privacyData[language.value])
</script>

<template>
  <div class="privacy-page">

    <div class="privacy-content">
      <div class="title-bar">
        <h1>{{ content.title }}</h1>
        <button class="lang-switch" @click="toggleLanguage">
          {{ language === 'no' ? 'Switch to English' : 'Bytt til norsk' }}
        </button>
      </div>
      <p><strong>{{ content.updated }}</strong></p>

      <h2>{{ content.who.title }}</h2>
      <p>{{ content.who.text }}</p>

      <h2>{{ content.what.title }}</h2>
      <p>{{ content.what.text }}</p>
      <ul>
        <li v-for="item in content.what.items" :key="item">{{ item }}</li>
      </ul>
      <p>{{ content.what.note }}</p>

      <h2>{{ content.where.title }}</h2>
      <p>{{ content.where.text }}</p>

      <h2>{{ content.cookies.title }}</h2>
      <p>{{ content.cookies.text }}</p>

      <h2>{{ content.sharing.title }}</h2>
      <p>{{ content.sharing.text }}</p>

      <h2>{{ content.rights.title }}</h2>
      <ul>
        <li v-for="item in content.rights.items" :key="item">{{ item }}</li>
      </ul>

      <h2>{{ content.deletion.title }}</h2>
      <p>{{ content.deletion.text }}</p>

    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  max-width: 800px;
  margin: 2rem auto 4rem auto; /* ⬅ adds top margin */
  padding: 0 1rem;
  line-height: 1.6;
  color: var(--color-medium);
  background-color: white;
  opacity: 0.95;
}


.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.lang-switch {
  background-color: var(--color-accent);
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
}

.lang-switch:hover {
  background-color: var(--color-accent-hover);
}


.language-toggle button {
  background-color: var(--color-accent);
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.language-toggle button:hover {
  background-color: var(--color-accent-hover);
}
</style>
