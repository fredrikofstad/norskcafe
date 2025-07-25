// src/composables/useSrsReview.ts
import { ref, computed, watch, nextTick } from 'vue'
import { getDueEntries, updateSrsProgress } from '../firebase/firebaseSrs'
import { useSrsUpload } from './useSrsUpload'
import { ReviewItem, Word } from '../types/words'
import { SrsSessionEntry } from '../types/srs'
import useReviewQueue from './useReviewQueue'
import { useReviewStats } from './useReviewStats'
import { loadAllLessons } from '../utils/lessonLoader'

export function useSrsReview() {

    const allWords = ref<Word[]>([]);
    const isLoadingLessons = ref(true);

    const sessionState = ref<Record<string, SrsSessionEntry>>({});
    const reviewWords = ref<ReviewItem[]>([]);
    const currentIndex = ref(0);
    const levelMessage = ref('');
    const showLevelAnimation = ref(false);

    const { reviewedWords, reviewedCount, correctCount, totalCount, setTotalCount, resetStats } = useReviewStats();

    const initializeSession = () => {
        isLoadingLessons.value = true;
        loadAllLessons().then(loadedWords => {
            allWords.value = loadedWords;

            const today = new Date();
            const initialDueEntries = getDueEntries(today);

            sessionState.value = Object.fromEntries(
                initialDueEntries.map(entry => [entry.wordId, { ...entry }])
            ) as Record<string, SrsSessionEntry>;

            reviewWords.value = useReviewQueue(allWords.value, initialDueEntries).value;

            currentIndex.value = 0;
            levelMessage.value = '';
            showLevelAnimation.value = false;

            resetStats(); // Reset stats from useReviewStats
            setTotalCount(reviewWords.value.length);
            isLoadingLessons.value = false; // Set loading false after initialization
        }).catch(error => {
            console.error("Failed to load lessons and initialize session:", error);
            isLoadingLessons.value = false;
        });
    };

    // Initialize the session when the composable is first used
    initializeSession();

    // Set up the upload mechanism with the shared reviewedWords ref
    useSrsUpload(() => reviewedWords.value);

    const currentWord = computed(() => reviewWords.value?.[currentIndex.value] ?? null);

    function processSrsUpdate(wordId: string, direction: 'toEnglish' | 'toNorwegian', correct: boolean) {
        updateSrsProgress(wordId, direction, correct, sessionState.value, (id, leveledUp) => {
            levelMessage.value = leveledUp ? 'Level UP!' : 'Level Down';
            showLevelAnimation.value = true;

            setTimeout(() => {
                showLevelAnimation.value = false;
            }, 1500);

            const session = sessionState.value[wordId];
            if (session && !session.pending.toEnglish && !session.pending.toNorwegian) {
                reviewedCount.value += 1;
            }
        });
    }

    function moveToNextSrsCard(): boolean {
        const lastReviewedItem = currentWord.value;
        if (lastReviewedItem && lastReviewedItem.correct === false) {
            reviewWords.value.push(JSON.parse(JSON.stringify(lastReviewedItem)));
            console.log(`Re-queued incorrect word: ${lastReviewedItem.word.norwegian} (${lastReviewedItem.direction})`);
        }

        if (currentIndex.value < reviewWords.value.length - 1) {
            currentIndex.value++;
            return false; // Session not completed
        } else {
            return true; // Session completed
        }
    }

    const resetSession = () => {
        initializeSession();
    };

    return {
        reviewWords,
        currentIndex,
        currentWord,
        levelMessage,
        showLevelAnimation,
        processSrsUpdate,
        moveToNextSrsCard,
        reviewedWords,
        reviewedCount,
        correctCount,
        totalCount,
        sessionState,
        resetSession,
        isLoadingLessons
    };
}