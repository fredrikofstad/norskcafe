<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import useReviewQueue from '../composables/useReviewQueue'
import { useSrsUpload } from '../composables/useSrsUpload'
import { useAnswerCheck } from '../composables/useAnswerCheck'
import {ReviewItem, Word} from '../types/words'
import {getDueEntries, updateSrsProgress} from '../firebase/firebaseSrs'
import grammarLesson from '../assets/lessons/lesson0.json'
import arrowDown from '../assets/arrow-down.svg'
import {SrsSessionEntry} from "../types/srs";

// Utility functions (inlined)
function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Setup data

const today = new Date()
const dueEntries = getDueEntries(today)

const sessionState = ref(
    Object.fromEntries(
        dueEntries.map(entry => [entry.wordId, entry])
    )
)
const levelMessage = ref('')
const showLevelAnimation = ref(false)

const reviewWords = useReviewQueue(grammarLesson as Word[], dueEntries)
const reviewedWords = ref<ReviewItem[]>([])

// word levels
const levelChange = ref<null | { wordId: string; delta: number }>(null)
const showLevelFeedback = ref(false)


useSrsUpload(() => reviewedWords.value)

const currentIndex = ref(0)
const answer = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const checked = ref(false)

const isInputEmpty = computed(() => answer.value.trim() === '')
const currentWord = computed(() => reviewWords.value?.[currentIndex.value] ?? null)
const showDetails = ref(false)

const {
  check: checkAnswer,
  isCorrect,
  feedbackMessage,
  showFeedback
} = useAnswerCheck(
    reviewWords,
    currentWord,
    answer,
    reviewedWords,
    () => {
      nextTick(() => (document.querySelector('.review-session') as HTMLElement)?.focus())
    }
)

function toggleDetails() {
  if (checked.value) {
    showDetails.value = !showDetails.value
  }
}

function maybeToggleDetails(e: KeyboardEvent) {
  const target = e.target as HTMLElement
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
  e.preventDefault()
  if (checked.value) toggleDetails()
}

function nextCard() {
  const word = currentWord.value
  if (!word) return

  const wordId = word.word.id
  const direction = word.direction
  const correct = !!word.correct

  updateSrsProgress(wordId, direction, correct, sessionState.value, (id, leveledUp) => {
    levelMessage.value = leveledUp ? 'Level UP!' : 'Level Down'
    showLevelAnimation.value = true

    setTimeout(() => {
      showLevelAnimation.value = false
    }, 1500)
  })

  // Reset state
  showFeedback.value = false
  answer.value = ''
  checked.value = false
  isCorrect.value = false
  showDetails.value = false

  if (currentIndex.value < reviewWords.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
    completeLesson()
  }

  nextTick(() => inputRef.value?.focus())
}


function completeLesson(){
  alert('Økten er ferdig!')
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
      @keyup.enter.prevent="(!isInputEmpty && !checked) ? (checkAnswer(), checked = true) : (checked ? nextCard() : null)"
      @keydown.space="maybeToggleDetails"
      tabindex="0"
  >

    <transition name="level-pop">
      <div
          v-if="showLevelAnimation"
          :class="['level-animation', levelMessage.includes('UP') ? 'level-up' : 'level-down']"
      >
        {{ levelMessage }}
      </div>
    </transition>



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
        <button @click="checked ? nextCard() : (checkAnswer(), checked = true)" :disabled="isInputEmpty && !checked" class="check-button">
          {{ checked ? 'Neste' : 'Sjekk' }}
        </button>
      </div>

      <div class="feedback-wrapper">
        <div v-if="showFeedback" class="feedback visible">
          <p>{{ feedbackMessage }}</p>
        </div>
        <div v-else class="feedback hidden">
          <p>&nbsp;</p>
        </div>
      </div>
    </div>

    <button class="details-toggle" :class="{ disabled: !checked }" @click="toggleDetails">
      <img :src="arrowDown" alt="Vis mer" />
    </button>

    <div v-if="showDetails && currentWord" class="word-details">
      <div class="word-meta">
        <h4>Ordinfo:</h4>
        <p><strong>Norsk: </strong>
          <template v-if="currentWord.word.type === 'noun'">
            {{ currentWord.word.gender }} {{ currentWord.word.norwegian }}
          </template>
          <template v-else>
            {{ currentWord.word.norwegian }}
          </template>
        </p>

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
        <h4>Eksempelsetninger:</h4>
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
  min-height: 2rem;
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

.level-animation {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: 0.95;
}

.level-up {
  background-color: #d4edda;
  color: #155724;
}

.level-down {
  background-color: #f8d7da;
  color: #721c24;
}

/* Animation */
.level-pop-enter-active,
.level-pop-leave-active {
  transition: all 0.5s ease;
}
.level-pop-enter-from {
  opacity: 0;
  transform: translateX(-50%) scale(0.8);
}
.level-pop-enter-to {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
.level-pop-leave-from {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
.level-pop-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(0.8);
}



</style>
