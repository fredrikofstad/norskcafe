<script setup lang="ts">
import { computed } from 'vue'
import { ReviewItem } from '../types/words'
import { SrsSessionEntry } from '../types/srs'
import { capitalizeFirst } from '../utils/helpers'

const props = defineProps<{
  reviewedItems: ReviewItem[]; // All items that were reviewed in the session
  finalSrsState: Record<string, SrsSessionEntry>; // The final SRS state for words in the session
  initialTotalItems: number; // The total number of items at the start of the session
}>()

// Compute overall stats for the session
const totalReviewedAnswers = computed(() => props.reviewedItems.length)
const totalCorrectAnswers = computed(() => props.reviewedItems.filter(item => item.correct).length)
const uniqueWordsCompleted = computed(() => {
  const completedWordIds = new Set<string>()
  for (const wordId in props.finalSrsState) {
    const sessionEntry = props.finalSrsState[wordId]
    if (sessionEntry && !sessionEntry.pending.toEnglish && !sessionEntry.pending.toNorwegian) {
      completedWordIds.add(wordId)
    }
  }
  return completedWordIds.size
})

// Group reviewed items by their base wordId to show combined stats
const groupedReviewedItems = computed(() => {
  const grouped: Record<string, { word: ReviewItem['word'], directions: { [key: string]: ReviewItem } }> = {};
  props.reviewedItems.forEach(item => {
    if (!grouped[item.word.id]) {
      grouped[item.word.id] = { word: item.word, directions: {} };
    }
    grouped[item.word.id].directions[item.direction] = item;
  });
  return grouped;
});

</script>

<template>
  <div class="review-summary">
    <h2 class="summary-title">Review Session Complete!</h2>

    <div class="summary-section overall-stats">
      <h3>Overall Session Statistics</h3>
      <p><strong>Initial Items Due:</strong> {{ initialTotalItems }}</p>
      <p><strong>Total Answers Given:</strong> {{ totalReviewedAnswers }}</p>
      <p><strong>Correct Answers:</strong> {{ totalCorrectAnswers }} ({{ totalReviewedAnswers > 0 ? ((totalCorrectAnswers / totalReviewedAnswers) * 100).toFixed(1) : 0 }}%)</p>
      <p><strong>Unique Words Fully Reviewed:</strong> {{ uniqueWordsCompleted }}</p>
    </div>

    <div class="summary-section word-levels">
      <h3>Word Level Changes</h3>
      <div class="word-list">
        <div v-for="(group, wordId) in groupedReviewedItems" :key="wordId" class="word-item">
          <div class="word-header">
            <strong>{{ capitalizeFirst(group.word.norwegian) }} / {{ capitalizeFirst(group.word.english) }}</strong>
            <span v-if="props.finalSrsState[wordId]" :class="['level-status', props.finalSrsState[wordId].repetitions > (props.finalSrsState[wordId].repetitions - (group.directions.toEnglish?.correct === false || group.directions.toNorwegian?.correct === false ? 1 : 0)) ? 'level-up' : 'level-down']">
              Level: {{ props.finalSrsState[wordId].repetitions }}
            </span>
          </div>
          <div v-if="props.finalSrsState[wordId]" class="srs-details">
            <p>Interval: {{ props.finalSrsState[wordId].interval }} days</p>
            <p>Ease Factor: {{ props.finalSrsState[wordId].easeFactor.toFixed(2) }}</p>
            <p>Next Review: {{ props.finalSrsState[wordId].nextReview }}</p>
          </div>
          <div class="review-results">
            <p v-if="group.directions.toEnglish">
              English: <span :class="group.directions.toEnglish.correct ? 'correct-answer' : 'incorrect-answer'">{{ group.directions.toEnglish.correct ? 'Correct' : 'Incorrect' }}</span>
            </p>
            <p v-if="group.directions.toNorwegian">
              Norwegian: <span :class="group.directions.toNorwegian.correct ? 'correct-answer' : 'incorrect-answer'">{{ group.directions.toNorwegian.correct ? 'Correct' : 'Incorrect' }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-summary {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.summary-title {
  font-size: 2.8rem;
  color: var(--color-accent);
  margin-bottom: 2.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.summary-section {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.05);
}

.summary-section h3 {
  font-size: 1.8rem;
  color: #333;
  margin-top: 0;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.8rem;
}

.overall-stats p {
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  color: #555;
}

.overall-stats p strong {
  color: #222;
}

.word-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
}

.word-item {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.2rem;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.word-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.word-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px dashed #eee;
}

.word-header strong {
  font-size: 1.3rem;
  color: var(--color-heading);
}

.level-status {
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-weight: bold;
  white-space: nowrap;
}

.level-up {
  background-color: #d4edda;
  color: #155724;
}

.level-down {
  background-color: #f8d7da;
  color: #721c24;
}

.srs-details p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.4rem;
}

.review-results p {
  font-size: 0.95rem;
  margin-top: 0.8rem;
  border-top: 1px dashed #eee;
  padding-top: 0.8rem;
  color: #666;
}

.correct-answer {
  color: #28a745;
  font-weight: bold;
}

.incorrect-answer {
  color: #dc3545;
  font-weight: bold;
}

.start-new-button {
  padding: 1rem 2rem;
  font-size: 1.3rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 2rem;
  box-shadow: 0 4px 10px rgba(var(--color-accent), 0.3);
}

.start-new-button:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-2px);
}

.start-new-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(var(--color-accent), 0.4);
}
</style>