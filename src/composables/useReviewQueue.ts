import { Ref, ref } from 'vue'

interface WordBase {
    id: string
    type: string
    norwegian: string
    english: string
    level?: string
    example?: string[]
}

interface NounWord extends WordBase {
    gender: string // "en" | "et"
    article: string // "a" | "an"
    plural?: {
        indefinite?: string
        definite?: string
    }
}

interface VerbWord extends WordBase {
    conjugation?: {
        present: string
        past: string
        perfect: string
    }
}

interface AdjectiveWord extends WordBase {
    forms?: {
        masculine_feminine: string
        neuter: string
        plural: string
        definite: string
    }
    comparison?: {
        positive: string
        comparative: string
        superlative: string
    }
}

interface AdverbWord extends WordBase {}

type Word = NounWord | VerbWord | AdjectiveWord | AdverbWord

interface ReviewItem {
    id: string
    prompt: string
    answer: string
    direction: 'toNorwegian' | 'toEnglish'
    accept: string[]
    word: Word
}


function shuffle<T>(array: T[]): T[] {
    const copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

export default function useReviewQueue(
    words: Word[],
    unlockedLessons: string[],
    dueIds: string[]
): Ref<ReviewItem[]> {
    const filtered = words.filter((word) => {
        const lessonId = word.id.slice(0, 1)
        return unlockedLessons.includes(lessonId) && dueIds.includes(word.id)
    })

    const reviewItems: ReviewItem[] = []

    for (const word of filtered) {
        const type = word.type

        if (type === 'noun' && 'gender' in word && 'article' in word) {
            const norwegianFull = `${word.gender} ${word.norwegian}`.toLowerCase()
            const englishFull = `${word.article} ${word.english}`.toLowerCase()

            reviewItems.push({
                id: word.id,
                prompt: englishFull,
                answer: norwegianFull,
                direction: 'toNorwegian',
                accept: [norwegianFull],
                word
            })

            reviewItems.push({
                id: word.id,
                prompt: norwegianFull,
                answer: englishFull,
                direction: 'toEnglish',
                accept: [englishFull, word.english.toLowerCase()],
                word
            })
        } else {
            reviewItems.push({
                id: word.id,
                prompt: word.english.toLowerCase(),
                answer: word.norwegian.toLowerCase(),
                direction: 'toNorwegian',
                accept: [word.norwegian.toLowerCase()],
                word
            })

            reviewItems.push({
                id: word.id,
                prompt: word.norwegian.toLowerCase(),
                answer: word.english.toLowerCase(),
                direction: 'toEnglish',
                accept: [word.english.toLowerCase()],
                word
            })
        }
    }


    return ref(shuffle(reviewItems))
}
