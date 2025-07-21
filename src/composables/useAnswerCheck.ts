import { Ref, ref } from 'vue'
import { ReviewItem } from '../types/words'

export function normalize(str: string): string {
    return str.trim().toLowerCase().replace(/^(a|an)\s+/, '')
}

export function useAnswerCheck(
    reviewWords: Ref<ReviewItem[]>,
    currentWord: Ref<ReviewItem | null>,
    answer: Ref<string>,
    reviewedWords: Ref<ReviewItem[]>,
    onCheck?: () => void
) {
    const isCorrect = ref(false)
    const feedbackMessage = ref('')
    const showFeedback = ref(false)

    function check() {
        const word = currentWord.value
        if (!word) return

        const correct = word.accept.includes(normalize(answer.value))
        isCorrect.value = correct

        // ✅ Save result on the item directly
        word.correct = correct

        if (correct) {
            feedbackMessage.value = '✅ Riktig!'
        } else {
            feedbackMessage.value = `❌ Feil. Riktig svar er "${word.answer}".`
            // Optionally re-add the item to the end of the queue
            reviewWords.value.push({ ...word })
        }

        showFeedback.value = true

        // ✅ Log the reviewed word with result
        reviewedWords.value.push({ ...word })

        if (onCheck) onCheck()
    }

    return {
        check,
        isCorrect,
        feedbackMessage,
        showFeedback,
    }
}
