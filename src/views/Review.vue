<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import useReviewQueue from '../composables/useReviewQueue.ts'
import grammarLesson from '../assets/lessons/lesson0.json'

import arrowDown from '../assets/arrow-down.svg'

const unlockedLessons = ref(['0'])
const reviewIds = ref(['0n1', '0n2', '0n3', '0n4', '0n5', '0v1', '0a2'])

// Load the randomized queue
const reviewWords = useReviewQueue(grammarLesson, unlockedLessons.value, reviewIds.value)

const currentIndex = ref(0)
const answer = ref('')
const showFeedback = ref(false)
const feedbackMessage = ref('')
const checked = ref(false)
const isCorrect = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

const isInputEmpty = computed(() => answer.value.trim() === '')
const currentWord = computed(() => {
  return reviewWords.value?.[currentIndex.value] ?? null
})

const showDetails = ref(false)

function toggleDetails() {
  if (checked.value) {
    showDetails.value = !showDetails.value
  }
}


function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function normalize(str: string): string {
  return str.trim().toLowerCase().replace(/^(a|an)\s+/, '')
}

function checkAnswer() {
  const word = currentWord.value
  if (!word) return

  const correct = currentWord.value?.accept.includes(normalize(answer.value))

  isCorrect.value = correct

  if (correct) {
    feedbackMessage.value = '✅ Riktig!'
  } else {
    feedbackMessage.value = `❌ Feil. Riktig svar er "${word.answer}".`
    // Re-insert incorrect word at end of queue
    reviewWords.value.push({ ...word })
  }

  showFeedback.value = true
  checked.value = true

  nextTick(() => {
    const wrapper = document.querySelector('.review-session') as HTMLElement
    wrapper?.focus()
  })
}

function maybeToggleDetails(e: KeyboardEvent) {
  // Don’t toggle if input is focused
  if (document.activeElement === inputRef.value) return
  if (checked.value) {
    toggleDetails()
  }
}


function nextCard() {
  showFeedback.value = false
  answer.value = ''
  checked.value = false
  isCorrect.value = false
  showDetails.value = false // ← reset details toggle

  if (currentIndex.value < reviewWords.value.length - 1) {
    currentIndex.value++
  } else {
    alert('Økten er ferdig!')
    currentIndex.value = 0
  }

  nextTick(() => inputRef.value?.focus())
}


watch(currentIndex, () => {
  nextTick(() => inputRef.value?.focus())
})

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <div
      class="review-session"
      @keyup.enter.prevent="(!isInputEmpty && !checked) ? checkAnswer() : (checked ? nextCard() : null)"
      @keydown.space.prevent="maybeToggleDetails"
      tabindex="0"
  >
    <div v-if="reviewWords.length && currentWord" class="card">
      <div class="word-display">
        <p class="big-word">{{ capitalizeFirst(currentWord.prompt) }}</p>
        <p class="direction-hint">
          {{ currentWord.direction === 'toEnglish' ? 'Oversett til engelsk' : 'Oversett til norsk' }}
        </p>
      </div>

      <div class="input-group">
        <input
            ref="inputRef"
            v-model="answer"
            :class="{ correct: checked && isCorrect, incorrect: checked && !isCorrect }"
            :disabled="checked"
            placeholder="Ditt svar"
        />
        <button @click="checked ? nextCard() : checkAnswer()" :disabled="isInputEmpty && !checked" class="check-button">
          {{ checked ? 'Neste' : 'Sjekk' }}
        </button>
      </div>

      <div class="feedback-wrapper">
          <div
              v-if="showFeedback"
              class="feedback visible"
          >
            <p>{{ feedbackMessage }}</p>
          </div>
        <div v-else class="feedback hidden">
          <p>&nbsp;</p>
        </div>
      </div>
    </div>

    <button
        class="details-toggle"
        :class="{ disabled: !checked }"
        @click="toggleDetails"
    >
      <img :src="arrowDown" alt="Vis mer" />
    </button>

    <div v-if="showDetails" class="word-details">
      <div class="word-meta">
        <h4>Ordinfo:</h4>
        <p><strong>Norsk:</strong> {{ currentWord.word.gender }} {{ currentWord.word.norwegian }}</p>
        <p><strong>Engelsk: </strong>
          <template v-if="currentWord.word.type === 'noun'">
            {{ currentWord.word.article }} {{ currentWord.word.english }}
          </template>
          <template v-else>
            {{ currentWord.word.english }}
          </template>
        </p>

      </div>


      <div v-if="currentWord.word.example?.length">
        <h4>Eksempel setninger:</h4>
        <ul>
          <li v-for="(ex, idx) in currentWord.word.example" :key="idx">{{ ex }}</li>
        </ul>
      </div>

      <div v-if="currentWord.word.type === 'verb' && currentWord.word.conjugation">
        <h4>Bøying:</h4>
        <p>Nåtid: {{ currentWord.word.conjugation.present }}</p>
        <p>Fortid: {{ currentWord.word.conjugation.past }}</p>
        <p>Perfektum: {{ currentWord.word.conjugation.perfect }}</p>
      </div>

      <div v-if="currentWord.word.type === 'adjective' && currentWord.word.comparison">
        <h4>Gradbøying:</h4>
        <p>Positiv: {{ currentWord.word.comparison.positive }}</p>
        <p>Komparativ: {{ currentWord.word.comparison.comparative }}</p>
        <p>Superlativ: {{ currentWord.word.comparison.superlative }}</p>
      </div>
    </div>



  </div>
</template>


<style scoped>
.review-session {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.review-session:focus {
  outline: none;
  border: none;
}

.input-group {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: 1.5rem;
}

input {
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 6px 0 0 6px;
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

input.correct {
  background-color: #d4edda;
  border-color: #28a745;
}

input.incorrect {
  background-color: #f8d7da;
  border-color: #dc3545;
}

button.check-button {
  padding: 1rem;
  font-size: 1.2rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.check-button:hover {
  background-color: var(--color-accent-hover);
}


.feedback {
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
}

.word-display {
  text-align: center;
  margin-bottom: 1rem;
}

.big-word {
  font-size: 3rem;
  font-weight: bold;
}

.direction-hint {
  font-size: 1rem;
  color: #777;
  margin-top: 0.25rem;
}

.feedback-wrapper {
  min-height: 2rem; /* juster etter ønsket høyde */
  margin-top: 1rem;
}

.feedback.hidden {
  visibility: hidden;
}

.feedback.visible {
  visibility: visible;
}

.details-toggle {
  display: block;
  margin: 2rem auto 0;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.details-toggle.disabled {
  opacity: 0.3;
  pointer-events: none;
}

.details-toggle img {
  width: 32px;
  height: 32px;
}

.details-toggle:hover img {
  filter: brightness(1.2);
}


.word-details {
  margin-top: 1.5rem;
  font-size: 1.05rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
}


</style>
