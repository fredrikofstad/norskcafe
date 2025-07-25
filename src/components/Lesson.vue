<!-- src/components/Lesson.vue (or src/views/Lesson.vue) -->
<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import ReviewCard from '../components/ReviewCard.vue'
import { useAnswerCheck } from '../composables/useAnswerCheck'
import useReviewQueue from '../composables/useReviewQueue'
import { Word, ReviewItem } from '../types/words'
import { loadAllLessons } from '../utils/lessonLoader'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const props = defineProps<{
  lessonId: string;
}>()

const numericLessonId = computed(() => parseInt(props.lessonId));


const lessonWords = ref<ReviewItem[]>([]);
const currentIndex = ref(0);
const answer = ref('');
const checked = ref(false);
const isLoading = ref(true);

const currentWord = computed(() => lessonWords.value?.[currentIndex.value] ?? null);

const reviewedWordsPlaceholder = ref<ReviewItem[]>([]);

const {
  check: checkAnswerLogic,
  isCorrect,
  feedbackMessage,
  showFeedback
} = useAnswerCheck(
    currentWord,
    answer,
    reviewedWordsPlaceholder,
    () => {
      nextTick(() => {
        const reviewCardComponent = document.querySelector('.card') as HTMLElement
        if (reviewCardComponent) {
          const inputElement = reviewCardComponent.querySelector('input') as HTMLInputElement;
          inputElement?.focus();
        }
      })
    }
)

async function loadLessonWords() {
  isLoading.value = true;
  lessonWords.value = [];
  currentIndex.value = 0;

  console.log(`[Lesson.vue] --- Starting load for lessonId: ${numericLessonId.value} ---`);

  try {
    const allWords = await loadAllLessons(); // Load all words from all JSONs
    console.log(`[Lesson.vue] Total words loaded from ALL lessons: ${allWords.length}`);
    // console.log("[Lesson.vue] All loaded words (for inspection):", allWords); // Uncomment for deep inspection

    const filteredWords = allWords.filter(word => {
      // Ensure word.id exists and is a string
      if (!word.id || typeof word.id !== 'string' || word.id.length === 0) {
        console.warn(`[Lesson.vue] Skipping word with invalid ID:`, word);
        return false;
      }
      const firstCharOfId = word.id.charAt(0);
      const parsedDigit = parseInt(firstCharOfId);

      // Log each word's ID and the comparison result
      console.log(`[Lesson.vue] Checking word ID: ${word.id} | First Char: '${firstCharOfId}' | Parsed Digit: ${parsedDigit} | Target LessonId: ${numericLessonId.value} | Match: ${parsedDigit === numericLessonId.value}`);

      return parsedDigit === numericLessonId.value;
    });

    console.log(`[Lesson.vue] Words filtered for lesson ${numericLessonId.value}: ${filteredWords.length}`);

    lessonWords.value = useReviewQueue(filteredWords, []).value;

    console.log(`[Lesson.vue] Final review items for lesson ${numericLessonId.value} (after useReviewQueue): ${lessonWords.value.length}`);

  } catch (error) {
    console.error(`[Lesson.vue] Error loading words for lesson ${numericLessonId.value}:`, error);
    lessonWords.value = [];
  } finally {
    isLoading.value = false;
    console.log(`[Lesson.vue] --- Finished load for lessonId: ${numericLessonId.value} ---`);
  }
}

function handleCheckAnswer() {
  if (!currentWord.value) return
  checkAnswerLogic()
  checked.value = true
}

function handleNextCard() {
  answer.value = ''
  checked.value = false
  isCorrect.value = false
  showFeedback.value = false

  if (currentIndex.value < lessonWords.value.length - 1) {
    currentIndex.value++
  } else {
    alert('Lesson completed!');
    router.push({ name: 'Lessons' });
  }
}

watch(numericLessonId, (newId, oldId) => {
  // Only reload if the ID actually changes AND it's a valid number
  if (typeof newId === 'number' && !isNaN(newId) && newId !== oldId) {
    loadLessonWords();
  } else if (typeof newId === 'number' && !isNaN(newId) && oldId === undefined) {
    // Handle initial load when oldId is undefined
    loadLessonWords();
  }
}, { immediate: true });

watch(currentWord, () => {
  answer.value = ''
  checked.value = false
  isCorrect.value = false
  showFeedback.value = false
}, { immediate: true })

</script>

<template>
  <div class="lesson-session">
    <h1 class="lesson-title">Lesson {{ numericLessonId + 1 }}</h1>

    <template v-if="isLoading">
      <p class="loading-message">Loading lesson...</p>
    </template>
    <template v-else-if="lessonWords.length === 0">
      <p class="no-words-message">No words found for this lesson, or lesson data is empty.</p>
    </template>
    <template v-else>
      <ReviewCard
          v-if="currentWord"
          :word="currentWord"
          :checked="checked"
          :is-correct="isCorrect"
          :feedback-message="feedbackMessage"
          :show-feedback="showFeedback"
          @update:answer="val => answer = val"
          @check-answer="handleCheckAnswer"
          @next-card="handleNextCard"
          @toggle-details="() => {}"
      />
    </template>
  </div>
</template>

<style scoped>
/* ... (styles remain unchanged) ... */
.lesson-session {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.lesson-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(#000);
}

.loading-message, .no-words-message {
  font-size: 1.5rem;
  color: #777;
  margin-top: 3rem;
}
</style>