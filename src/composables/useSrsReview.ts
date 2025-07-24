// src/composables/useSrsReview.ts
import { ref, computed } from 'vue'
import { getDueEntries, updateSrsProgress } from '../firebase/firebaseSrs'
import { useSrsUpload } from './useSrsUpload'
import { Word } from '../types/words'
import { SrsSessionEntry } from '../types/srs'
import useReviewQueue from './useReviewQueue'
import { useReviewStats } from './useReviewStats'

export function useSrsReview(allWords: Word[]) {
    const today = new Date()

    // Assuming getDueEntries is synchronous based on your mock firebaseSrs.ts
    // If it were truly async, you'd handle loading states here or in the consuming component.
    const initialDueEntries = getDueEntries(today)

    // sessionState tracks the pending status and overall correctness for each wordId within the current session
    const sessionState = ref(
        Object.fromEntries(
            initialDueEntries.map(entry => [entry.wordId, { ...entry }]) // Ensure a copy for reactivity
        ) as Record<string, SrsSessionEntry>
    )

    // Initialize the review queue using the composable
    const reviewWords = useReviewQueue(allWords, initialDueEntries)

    const currentIndex = ref(0)
    const levelMessage = ref('')
    const showLevelAnimation = ref(false)

    // Retrieve global stats from useReviewStats
    const { reviewedWords, reviewedCount, correctCount, totalCount, setTotalCount, resetStats } = useReviewStats()

    // Initialize stats when the composable is used
    resetStats() // Clear previous session stats
    setTotalCount(reviewWords.value.length) // Set total count based on initial review queue size

    // Setup the upload mechanism with the shared reviewedWords ref
    useSrsUpload(() => reviewedWords.value)

    const currentWord = computed(() => reviewWords.value?.[currentIndex.value] ?? null)

    /**
     * Processes the SRS update for a single word after it has been reviewed in one direction.
     * This function only updates the internal session state and calls Firebase update when both directions are done.
     */
    function processSrsUpdate(wordId: string, direction: 'toEnglish' | 'toNorwegian', correct: boolean) {
        // Pass the sessionState object so updateSrsProgress can track both directions
        updateSrsProgress(wordId, direction, correct, sessionState.value, (id, leveledUp) => {
            // Callback when both directions for a word are completed and SRS is updated
            levelMessage.value = leveledUp ? 'Level UP!' : 'Level Down'
            showLevelAnimation.value = true

            setTimeout(() => {
                showLevelAnimation.value = false
            }, 1500)

            // Update the overall reviewed count for the session
            const session = sessionState.value[wordId]
            if (session && !session.pending.toEnglish && !session.pending.toNorwegian) {
                reviewedCount.value += 1 // Increment overall reviewed count for the session
            }
        })
    }

    /**
     * Moves to the next card in the queue, handling re-queuing of incorrect words.
     */
    function moveToNextSrsCard() {
        // Before moving to the next index, check the correctness of the just-reviewed word
        const lastReviewedItem = currentWord.value;
        if (lastReviewedItem && lastReviewedItem.correct === false) {
            // If the last item was answered incorrectly, add it to the end of the queue
            // This ensures it will be reviewed again later in the session.
            // Create a deep copy to ensure it's a new reactive object in the queue.
            reviewWords.value.push(JSON.parse(JSON.stringify(lastReviewedItem)));
            console.log(`Re-queued incorrect word: ${lastReviewedItem.word.norwegian} (${lastReviewedItem.direction})`);
        }

        if (currentIndex.value < reviewWords.value.length - 1) {
            // Move to the next item in the dynamically changing queue
            currentIndex.value++
        } else {
            // Review session completed (either all initial words are done or no more incorrect ones to re-queue)
            // Note: If words are continuously re-queued, this alert might not trigger until all are correct.
            alert(`Review session completed! You reviewed ${reviewedCount.value} words out of ${totalCount.value} initial due items.`);
            // You might want to emit an event to the parent or navigate away here.
            // For now, it just loops.
            // currentIndex.value = 0; // To restart the session for testing
        }
    }

    return {
        reviewWords, // The main queue of review items
        currentIndex,
        currentWord,
        levelMessage,
        showLevelAnimation,
        processSrsUpdate,
        moveToNextSrsCard,
        reviewedWords, // Exposed for useAnswerCheck and useSrsUpload
        reviewedCount, // How many words have completed both directions
        correctCount, // How many *answers* were correct
        totalCount, // Initial total items in session
    }
}