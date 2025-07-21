// Type unions for known categories
export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb' | string

// Base shape of any word entry
export interface WordBase {
    id: string
    type: WordType
    norwegian: string
    english: string
    level?: string
    example?: string[]
}

// Noun-specific fields
export interface NounWord extends WordBase {
    type: 'noun'
    gender: 'en' | 'et'
    article: 'a' | 'an'
    plural?: {
        indefinite?: string
        definite?: string
    }
}

// Verb-specific fields
export interface VerbWord extends WordBase {
    type: 'verb'
    conjugation?: {
        present: string
        past: string
        perfect: string
    }
}

// Adjective-specific fields
export interface AdjectiveWord extends WordBase {
    type: 'adjective'
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

// Adverb has no extra fields in your JSON yet
export interface AdverbWord extends WordBase {
    type: 'adverb'
}

// Union type for any vocabulary word
export type Word = NounWord | VerbWord | AdjectiveWord | AdverbWord

// Review item enriched with prompt/direction/accepted answers
export interface ReviewItem {
    id: string
    prompt: string
    answer: string
    direction: 'toNorwegian' | 'toEnglish'
    accept: string[]
    word: Word
    correct?: boolean
}
