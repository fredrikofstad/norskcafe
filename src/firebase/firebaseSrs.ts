import {SrsEntry, SrsSessionEntry} from '../types/srs'
import { formatISO, isBefore } from 'date-fns'

// Simulated database (you can add more entries here)
let srsDatabase: Record<string, SrsEntry> = {
    '0n1': {
        wordId: '0n1',
        lastReviewed: '2025-07-10',
        nextReview: '2025-07-19',
        interval: 3,
        easeFactor: 2.5,
        repetitions: 2,
    },
    '0n2': {
        wordId: '0n2',
        lastReviewed: '2025-07-10',
        nextReview: '2025-07-25',
        interval: 5,
        easeFactor: 2.3,
        repetitions: 3,
    },
    '0n3': {
        wordId: '0n3',
        lastReviewed: '2025-07-10',
        nextReview: '2025-07-19',
        interval: 3,
        easeFactor: 2.5,
        repetitions: 2,
    },
    '0a1': {
        wordId: '0a1',
        lastReviewed: '2025-07-10',
        nextReview: '2025-07-19',
        interval: 3,
        easeFactor: 2.5,
        repetitions: 2,
    },
    '0v1': {
        wordId: '0v1',
        lastReviewed: '2025-07-01',
        nextReview: '2025-07-05',
        interval: 1,
        easeFactor: 2.0,
        repetitions: 0,
    }
}

export function getDueEntries(today: Date): SrsSessionEntry[] {
    return Object.values(srsDatabase)
        .filter(entry =>
            isBefore(new Date(entry.nextReview), today) ||
            entry.nextReview === formatISO(today, { representation: 'date' })
        )
        .map(entry => ({
            ...entry,
            correct: true,
            pending: {
                toEnglish: true,
                toNorwegian: true
            }
        }))
}

export function updateSrsProgress(
    wordId: string,
    direction: 'toEnglish' | 'toNorwegian',
    isCorrect: boolean,
    sessionState: Record<string, SrsSessionEntry>,
    onComplete?: (wordId: string, leveledUp: boolean) => void
): void {
    const entry = srsDatabase[wordId]
    const session = sessionState[wordId]

    if (!entry || !session) return

    // Mark this direction as completed in session only
    session.pending[direction] = false

    // If either direction is incorrect, mark the session as incorrect
    if (!isCorrect) {
        session.correct = false
    }

    // Wait until both directions have been reviewed
    if (session.pending.toEnglish || session.pending.toNorwegian) return

    const now = new Date()
    let interval = 1
    let newEF = entry.easeFactor
    let newReps = session.correct ? entry.repetitions + 1 : 0
    const oldReps = entry.repetitions

    if (session.correct) {
        if (newReps === 1) interval = 1
        else if (newReps === 2) interval = 6
        else interval = Math.round(entry.interval * newEF)
        newEF = Math.max(1.3, newEF + 0.1)
    } else {
        interval = 1
        newEF = Math.max(1.3, newEF - 0.2)
    }

    const next = new Date(now.getTime() + interval * 86400_000)

    // Save updated SRS entry
    srsDatabase[wordId] = {
        wordId,
        lastReviewed: formatISO(now, { representation: 'date' }),
        nextReview: formatISO(next, { representation: 'date' }),
        interval,
        easeFactor: newEF,
        repetitions: newReps
    }

    // Trigger UI animation if provided
    if (onComplete && oldReps !== newReps) {
        const leveledUp = newReps > oldReps
        onComplete(wordId, leveledUp)
    }
}

