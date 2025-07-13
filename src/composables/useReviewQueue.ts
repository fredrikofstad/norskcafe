import { ref, Ref } from 'vue'

interface LessonWord {
    id: string
    norwegian: string
    english: string
    // optionally include other fields like gender, plural, etc.
}

interface ReviewItem {
    id: string
    baseId: string
    prompt: string
    answer: string
}

export function useReviewQueue(
    lesson: LessonWord[],
    unlockedLessons: string[],
    reviewIds: string[]
): Ref<ReviewItem[]> {
    const filtered = lesson
        .filter(word => {
            const lessonId = word.id.slice(0, 1)
            return unlockedLessons.includes(lessonId) && reviewIds.includes(word.id)
        })
        .flatMap<ReviewItem>(word => [
            {
                id: `${word.id}-toEn`,
                baseId: word.id,
                prompt: word.norwegian,
                answer: word.english
            },
            {
                id: `${word.id}-toNo`,
                baseId: word.id,
                prompt: word.english,
                answer: word.norwegian
            }
        ])

    // Shuffle the queue
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[filtered[i], filtered[j]] = [filtered[j], filtered[i]]
    }

    return ref(filtered)
}

export default useReviewQueue
