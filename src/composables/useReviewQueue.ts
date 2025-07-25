// src/composables/useReviewQueue.ts
import { Ref, ref } from 'vue'
import { Word, ReviewItem, NounWord } from '../types/words'
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
    dueEntries: SrsEntry[] // This array is empty for lessons
): Ref<ReviewItem[]> {
    const reviewItems: ReviewItem[] = []

    // NEW LOGIC: Determine the source of words for review
    let wordsToProcess: Word[] = [];

    if (dueEntries && dueEntries.length > 0) {
        // If dueEntries are provided, process only those words (SRS review mode)
        for (const entry of dueEntries) {
            const word = allWords.find(w => w.id === entry.wordId);
            if (word) {
                wordsToProcess.push(word);
            } else {
                console.warn(`Word with ID ${entry.wordId} not found in allWords for SRS review. Skipping.`);
            }
        }
    } else {
        // If no dueEntries (e.g., lesson mode), process ALL words provided in allWords
        // In Lesson.vue, `allWords` here will be `filteredWords` for that lesson.
        wordsToProcess = allWords;
        console.log("[useReviewQueue] No due entries provided. Processing all words passed to the composable (Lesson Mode).");
    }


    for (const word of wordsToProcess) { // Iterate over the determined words
        const directions = ['toEnglish', 'toNorwegian'] as const

        for (const direction of directions) {

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
                } else { // toEnglish
                    prompt = norwegianFull
                    answer = englishFull
                    accept = [englishFull, word.english.toLowerCase()]
                }
            } else { // Verb, Adjective, Adverb, etc.
                if (direction === 'toNorwegian') {
                    prompt = word.english.toLowerCase()
                    answer = word.norwegian.toLowerCase()
                    accept = [word.norwegian.toLowerCase()]
                } else { // toEnglish
                    prompt = word.norwegian.toLowerCase()
                    answer = word.english.toLowerCase()
                    accept = [word.english.toLowerCase()]
                }
            }

            reviewItems.push({
                id: `${word.id}-${direction}`, // Unique ID for this specific review item (word + direction)
                prompt,
                answer,
                direction,
                accept,
                word, // Store the full word object for details
                correct: undefined, // Initialize correct status for the session
            })
        }
    }

    console.log(`[useReviewQueue] Generated ${reviewItems.length} review items.`);
    return ref(shuffle(reviewItems))
}