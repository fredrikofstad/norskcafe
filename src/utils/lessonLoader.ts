import { Word } from '../types/words';

/**
 * Dynamically loads all lesson JSON files from the assets/lessons directory.
 * lesson files are named lesson0.json, lesson1.json etc
 * @returns A promise that resolves to an array of all words from all lessons.
 */
export async function loadAllLessons(): Promise<Word[]> {
    const allWords: Word[] = [];

    const modules = import.meta.glob('../assets/lessons/lesson*.json');

    const promises = Object.keys(modules).map(async (path) => {
        try {

            const module = await modules[path]();
            if (Array.isArray(module.default)) {
                allWords.push(...(module.default as Word[]));
            } else {
                console.warn(`Lesson file ${path} did not export a default array.`);
            }
        } catch (error) {
            console.error(`Failed to load lesson file: ${path}`, error);
        }
    });

    await Promise.all(promises);

    return allWords;
}