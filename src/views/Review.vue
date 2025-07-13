<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import useReviewQueue from '../composables/useReviewQueue.ts'
import grammarLesson from '../assets/lessons/lesson0.json'

const unlockedLessons = ref(['0'])
const reviewIds = ref(['0n1', '0n2', '0n3', '0n4', '0n5'])

// Load the randomized queue
const reviewWords = useReviewQueue(grammarLesson, unlockedLessons.value, reviewIds.value)

const currentIndex = ref(0)
const answer = ref('')
const showFeedback = ref(false)
const feedbackMessage = ref('')
const checked = ref(false)
const isCorrect = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

const currentWord = computed(() => {
  return reviewWords.value?.[currentIndex.value] ?? null
})

function checkAnswer() {
  const word = currentWord.value
  if (!word) return

  const correct = answer.value.trim().toLowerCase() === word.answer.toLowerCase()
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

function nextCard() {
  showFeedback.value = false
  answer.value = ''
  checked.value = false
  isCorrect.value = false

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
  <div class="review-session" @keyup.enter.prevent="checked ? nextCard() : checkAnswer()" tabindex="0">
    <h2>Gjennomgang</h2>
    <div v-if="reviewWords.length && currentWord">
      <p><strong>Oversett:</strong> {{ currentWord.prompt }}</p>

      <div class="input-group">
        <input
            ref="inputRef"
            v-model="answer"
            :class="{ correct: checked && isCorrect, incorrect: checked && !isCorrect }"
            :disabled="checked"
            placeholder="Ditt svar"
        />
        <button @click="checked ? nextCard() : checkAnswer()">
          {{ checked ? 'Neste' : 'Sjekk' }}
        </button>
      </div>

      <transition name="fade">
        <div v-if="showFeedback" class="feedback">
          <p>{{ feedbackMessage }}</p>
        </div>
      </transition>
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

button {
  padding: 1rem;
  font-size: 1.2rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--color-accent-hover);
}

.feedback {
  margin-top: 1rem;
  font-size: 1.1rem;
  transition: opacity 0.4s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
