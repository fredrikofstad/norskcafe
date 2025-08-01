<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import { useSrsReview } from '../composables/useSrsReview'
import { useAnswerCheck } from '../composables/useAnswerCheck'
import ReviewCard from '../components/ReviewCard.vue'
import ReviewSummary from '../components/ReviewSummary.vue'
import { Word } from '../types/words'


const {
  reviewWords, // The actual queue of items to review
  currentIndex,
  currentWord,
  levelMessage,
  showLevelAnimation,
  processSrsUpdate,
  moveToNextSrsCard,
  reviewedWords, // The global Ref from useReviewStats, used by useAnswerCheck and useSrsUpload
  reviewedCount, // Stat: number of words completed both directions
  correctCount,  // Stat: number of correct answers
  totalCount,    // Stat: initial total items in session
  sessionState,
  isLoadingLessons
} = useSrsReview()


const answer = ref('')
const checked = ref(false) // State indicating if the current card's answer has been checked

// for debugging, consider making  a global var for other files
const showDebugStats = ref(false)

// storing last review session:
const lastSessionReviewedItems = ref<ReviewItem[]>([]);
const lastSessionFinalSrsState = ref<Record<string, SrsSessionEntry>>({});
const lastSessionInitialTotalItems = ref(0);

const sessionCompleted = ref(false)

const {
  check: checkAnswerLogic,
  isCorrect,
  feedbackMessage,
  showFeedback
} = useAnswerCheck(
    currentWord,    // The current word to check
    answer,         // The user's answer input
    reviewedWords,  // The shared Ref to record all reviewed items (for stats/upload)
    () => {         // Callback after an answer is checked
      nextTick(() => {
        // After checking the input for the next card is focused.
        const reviewCardComponent = document.querySelector('.card') as HTMLElement
        if (reviewCardComponent) {
          const inputElement = reviewCardComponent.querySelector('input') as HTMLInputElement;
          inputElement?.focus();
        }
      })
    }
)


function handleCheckAnswer() {
  if (!currentWord.value) return
  checkAnswerLogic()
  checked.value = true
}

function handleNextCard() {
  if (!currentWord.value) return

  processSrsUpdate(
      currentWord.value.word.id,
      currentWord.value.direction,
      currentWord.value.correct! // Asserting it's not null/undefined here after check
  )

  answer.value = ''
  checked.value = false
  isCorrect.value = false
  showFeedback.value = false

  const isSessionEnd = moveToNextSrsCard() // Assume moveToNextSrsCard will be updated to return this
  if (isSessionEnd) {
    // Session just completed, store its data before showing summary
    lastSessionReviewedItems.value = [...reviewedWords.value]; // Deep copy
    lastSessionFinalSrsState.value = { ...sessionState.value }; // Shallow copy
    lastSessionInitialTotalItems.value = totalCount.value;

    sessionCompleted.value = true;
  }
}


watch(currentWord, () => {
  answer.value = ''
  checked.value = false
  isCorrect.value = false
  showFeedback.value = false
}, { immediate: true })


watch(isLoadingLessons, (newLoadingState) => {
  if (!newLoadingState) {
    // Determine view based on whether words are available
    if (reviewWords.value.length === 0) {
      lastSessionReviewedItems.value = [];
      lastSessionFinalSrsState.value = {};
      lastSessionInitialTotalItems.value = 0;
      sessionCompleted.value = true; // Show summary if no words
      console.log("Initial load complete: No words due. Displaying empty summary.");
    } else {
      sessionCompleted.value = false; // Show review card if words are due
      console.log("Initial load complete: Words due. Starting review session.");
      nextTick(() => {
        const reviewCardComponent = document.querySelector('.card') as HTMLElement
        if (reviewCardComponent) {
          const inputElement = reviewCardComponent.querySelector('input') as HTMLInputElement;
          inputElement?.focus();
        }
      });
    }
  }
}, { immediate: true }); // Run immediately to catch initial loading state


</script>

<template>
  <div class="review-session">
    <transition name="level-pop">
      <div
          v-if="showLevelAnimation"
          :class="['level-animation', levelMessage.includes('UP') ? 'level-up' : 'level-down']"
      >
        {{ levelMessage }}
      </div>
    </transition>

    <template v-if="isLoadingLessons">
      <p class="loading-message">Loading words...</p>
    </template>

    <!-- Conditional rendering based on session completion -->
    <template v-if="!sessionCompleted">

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


    <!-- Conditional rendering for debug stats -->
    <div v-if="showDebugStats" class="review-stats">
      <p>Reviewed words (both directions done): {{ reviewedCount }}</p>
      <p>Correct answers in session: {{ correctCount }}</p>
      <p>Total initial items in session: {{ totalCount }}</p>
      <p>Current queue size: {{ reviewWords.length }}</p>
    </div>

    </template>

    <!-- Summary page when session is completed -->
    <ReviewSummary
        v-else
        :reviewed-items="reviewedWords"
        :final-srs-state="sessionState"
        :initial-total-items="totalCount"
    />


  </div>


</template>



<style scoped>

.review-session {
  max-width: 900px;
  margin: 3rem auto;
  position: relative;
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

.review-stats {
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: #555;
}

.loading-message {
  font-size: 1.8rem;
  color: var(--color-accent);
  text-align: center;
  margin-top: 5rem;
}
</style>