<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { ReviewItem } from '../types/words'
import arrowDown from '../assets/arrow-down.svg'

function capitalizeFirst(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const props = defineProps<{
  word: ReviewItem | null;
  checked: boolean;
  isCorrect: boolean;
  feedbackMessage: string;
  showFeedback: boolean;
}>()

const emit = defineEmits<{
  (e: 'update:answer', value: string): void;
  (e: 'check-answer'): void;
  (e: 'next-card'): void;
  (e: 'toggle-details'): void;
}>()

const answer = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const cardRef = ref<HTMLDivElement | null>(null);

const localAnswer = computed({
  get: () => answer.value,
  set: (val: string) => {
    answer.value = val
    emit('update:answer', val)
  }
})

const isInputEmpty = computed(() => localAnswer.value.trim() === '')
const showDetails = ref(false)

function handleToggleDetails() {
  if (props.checked) {
    showDetails.value = !showDetails.value
    emit('toggle-details')
  }
}


function handleCardEnter(e: KeyboardEvent) {

  e.preventDefault();


  if (!props.checked) {

    if (!isInputEmpty.value) {
      emit('check-answer');
    }
  } else {
    emit('next-card');
  }
}


function handleCardSpace(e: KeyboardEvent) {

  if (e.target === inputRef.value) {
    return;
  }
  e.preventDefault();
  handleToggleDetails();
}


watch(() => props.word, () => {
  localAnswer.value = ''
  showDetails.value = false
  nextTick(() => {
    // Attempt to focus the input first
    inputRef.value?.focus();
    //otherwise focus the card itself
    if (!inputRef.value || inputRef.value.disabled || !props.word) {
      cardRef.value?.focus();
    }
  });
}, { immediate: true })


watch(() => props.checked, (newVal) => {
  nextTick(() => {
    if (!newVal) { // If checked becomes false (meaning it's ready for new input)
      inputRef.value?.focus();
    } else { // If checked becomes true (answer submitted), focus the card to allow Space/Enter for "Next" or "Details"
      cardRef.value?.focus();
    }
  });
});
</script>

<template>
  <div
      class="card"
      ref="cardRef"
      @keyup.enter="handleCardEnter" @keydown.space="handleCardSpace"
      tabindex="0"
  >
    <div v-if="props.word" class="word-display">
      <p class="big-word">{{ capitalizeFirst(props.word.prompt) }}</p>
      <p class="direction-hint">
        {{ props.word.direction === 'toEnglish' ? 'Oversett til engelsk' : 'Oversett til norsk' }}
      </p>
    </div>

    <div class="input-group">
      <input
          ref="inputRef"
          v-model="localAnswer"
          :class="{ correct: props.checked && props.isCorrect, incorrect: props.checked && !props.isCorrect }"
          :disabled="props.checked"
          placeholder="Ditt svar"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
      />
      <button
          @click="props.checked ? emit('next-card') : emit('check-answer')"
          :disabled="isInputEmpty && !props.checked"
          class="check-button"
          type="button"
      >
        {{ props.checked ? 'Neste' : 'Sjekk' }}
      </button>
    </div>

    <div class="feedback-wrapper">
      <div v-if="props.showFeedback" class="feedback visible">
        <p>{{ props.feedbackMessage }}</p>
      </div>
      <div v-else class="feedback hidden">
        <p>&nbsp;</p>
      </div>
    </div>

    <button class="details-toggle" :class="{ disabled: !props.checked, active: showDetails }" @click="handleToggleDetails" aria-label="Toggle word details">
      <img :src="arrowDown" alt="Vis mer" />
    </button>

    <div v-if="showDetails && props.word" class="word-details">
      <div class="word-meta">
        <h4>Ordinfo:</h4>
        <p><strong>Norsk: </strong>
          <template v-if="props.word.word.type === 'noun'">
            {{ props.word.word.gender }} {{ props.word.word.norwegian }}
          </template>
          <template v-else>
            {{ props.word.word.norwegian }}
          </template>
        </p>

        <p><strong>Engelsk: </strong>
          <template v-if="props.word.word.type === 'noun'">
            {{ props.word.word.article }} {{ props.word.word.english }}
          </template>
          <template v-else>
            {{ props.word.word.english }}
          </template>
        </p>
      </div>

      <div v-if="props.word.word.example?.length">
        <h4>Eksempelsetninger:</h4>
        <ul>
          <li v-for="(ex, idx) in props.word.word.example" :key="idx">{{ ex }}</li>
        </ul>
      </div>

      <div v-if="props.word.word.type === 'verb' && props.word.word.conjugation">
        <h4>Bøying:</h4>
        <p>Nåtid: {{ props.word.word.conjugation.present }}</p>
        <p>Fortid: {{ props.word.word.conjugation.past }}</p>
        <p>Perfektum: {{ props.word.word.conjugation.perfect }}</p>
      </div>

      <div v-if="props.word.word.type === 'adjective' && props.word.word.comparison">
        <h4>Gradbøying:</h4>
        <p>Positiv: {{ props.word.word.comparison.positive }}</p>
        <p>Komparativ: {{ props.word.word.comparison.comparative }}</p>
        <p>Superlativ: {{ props.word.word.comparison.superlative }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* No style changes needed */
.card {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  outline: none;
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

input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px rgba(var(--color-accent), 0.3);
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
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

button.check-button:hover:not(:disabled) {
  background-color: var(--color-accent-hover);
}
button.check-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}


.feedback {
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  min-height: 1.5em;
  color: #333;
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

.word-display {
  text-align: center;
  margin-bottom: 1rem;
}

.big-word {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
}

.direction-hint {
  font-size: 1rem;
  color: #777;
  margin-top: 0.25rem;
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
  transition: transform 0.3s ease;
}

.details-toggle:hover:not(.disabled) img {
  filter: brightness(1.2);
}

.details-toggle.active img {
  transform: rotate(180deg);
}


.word-details {
  margin-top: 1.5rem;
  font-size: 1.05rem;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  line-height: 1.6;
  color: #444;
}

.word-details h4 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #222;
  font-size: 1.2rem;
}

.word-details p {
  margin-bottom: 0.5rem;
}

.word-details ul {
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.word-details li {
  margin-bottom: 0.3rem;
}
</style>