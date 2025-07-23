import { ref, computed } from 'vue'
import type { ReviewItem } from '../types/words'

const reviewedWords = ref<ReviewItem[]>([])
const totalCount = ref(0)

const reviewedCount = ref(0)
const correctCount = computed(() =>
    reviewedWords.value.filter(entry => entry.correct).length
)

export function useReviewStats() {
    return {
        reviewedWords,
        reviewedCount,
        correctCount,
        totalCount,
        setTotalCount: (n: number) => (totalCount.value = n),
        resetStats: () => {
            reviewedWords.value = []
            reviewedCount.value = 0
            totalCount.value = 0
        },
    }
}
