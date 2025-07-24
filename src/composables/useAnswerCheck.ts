// src/composables/useAnswerCheck.ts
import { Ref, ref } from 'vue'
import { ReviewItem } from '../types/words'

export function normalize(str: string): string {
    // Normalize input by trimming, lowercasing, and removing leading 'a ' or 'an '
    return str.trim().toLowerCase().replace(/^(a|an)\s+/, '')
}

export function useAnswerCheck(
    currentWord: Ref<ReviewItem | null>, // Only specific word being reviewed
    answer: Ref<string>,
    reviewedWords: Ref<ReviewItem[]>, // The shared list of all reviewed items (for stats/upload)
    onCheck?: () => void // Optional callback after check
) {
    const isCorrect = ref(false)
    const feedbackMessage = ref('')
    const showFeedback = ref(false)

    function check() {
        const word = currentWord.value
        if (!word) return

        const correct = word.accept.includes(normalize(answer.value))
        isCorrect.value = correct

        // Save result on the item directly. This mutates the ReviewItem in the queue.
        word.correct = correct

        if (correct) {
            feedbackMessage.value = '✅ Riktig!'
        } else {
            feedbackMessage.value = `❌ Feil. Riktig svar er "${word.answer}".`
            // Re-queuing logic is handled in useSrsReview now
        }

        showFeedback.value = true

        reviewedWords.value.push(JSON.parse(JSON.stringify(word)))

        if (onCheck) onCheck()
    }

    return {
        check,
        isCorrect,
        feedbackMessage,
        showFeedback,
    }
}