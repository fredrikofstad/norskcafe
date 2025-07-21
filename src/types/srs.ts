export interface SrsEntry {
    wordId: string
    lastReviewed: string
    nextReview: string
    interval: number
    easeFactor: number
    repetitions: number
}

export interface SrsSessionEntry extends SrsEntry {
    correct: boolean
    pending: {
        toEnglish: boolean
        toNorwegian: boolean
    }
}