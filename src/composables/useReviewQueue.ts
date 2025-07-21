import { Ref, ref } from 'vue'
import { Word, ReviewItem, NounWord } from '../types/word'
import { SrsEntry } from '../types/srs'

// Type guard for nouns
function isNounWord(word: Word): word is NounWord {
    return word.type === 'noun' && 'gender' in word && 'article' in word
}

// Shuffle helper
function shuffle<T>(array: T[]): T[] {
    const copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

export default function useReviewQueue(
    allWords: Word[],
    dueEntries: SrsEntry[]
): Ref<ReviewItem[]> {
    const reviewItems: ReviewItem[] = []

    for (const entry of dueEntries) {
        const word = allWords.find(w => w.id === entry.wordId)
        if (!word) continue

        const directions = ['toEnglish', 'toNorwegian'] as const

        for (const direction of directions) {
            if (!entry.pending[direction]) continue

            let prompt = ''
            let answer = ''
            let accept: string[] = []

            if (isNounWord(word)) {
                const norwegianFull = `${word.gender} ${word.norwegian}`.toLowerCase()
                const englishFull = `${word.article} ${word.english}`.toLowerCase()

                if (direction === 'toNorwegian') {
                    prompt = englishFull
                    answer = norwegianFull
                    accept = [norwegianFull]
                } else {
                    prompt = norwegianFull
                    answer = englishFull
                    accept = [englishFull, word.english.toLowerCase()]
                }
            } else {
                if (direction === 'toNorwegian') {
                    prompt = word.english.toLowerCase()
                    answer = word.norwegian.toLowerCase()
                    accept = [word.norwegian.toLowerCase()]
                } else {
                    prompt = word.norwegian.toLowerCase()
                    answer = word.english.toLowerCase()
                    accept = [word.english.toLowerCase()]
                }
            }

            reviewItems.push({
                id: `${entry.wordId}-${direction}`,
                prompt,
                answer,
                direction,
                accept,
                word,
            })
        }
    }

    return ref(shuffle(reviewItems))
}
