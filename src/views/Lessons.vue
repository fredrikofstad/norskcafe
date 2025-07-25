<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router'; // <--- IMPORT useRouter

const router = useRouter(); // <--- Initialize router instance

interface LessonMeta {
  id: number; // Corresponds to the lessonX.json file number
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'; // Added C1/C2 as per your previous example
  description: string;
}

const allLessons: LessonMeta[] = [
  // A1 Lessons
  { id: 0, title: 'Intervju', level: 'A1', description: 'Basic interview phrases.' },
  { id: 1, title: 'Julebord', level: 'A1', description: 'Vocabulary for Christmas parties.' },
  { id: 2, title: 'På kafe', level: 'A1', description: 'Ordering and conversations at a cafe.' },
  { id: 3, title: 'Reiseplaner', level: 'A1', description: 'Discussing travel plans.' },
  // A2 Lessons
  { id: 4, title: 'Hverdagsliv', level: 'A2', description: 'Daily routines and activities.' },
  { id: 5, title: 'Shoppingtur', level: 'A2', description: 'Vocabulary for shopping.' },
  { id: 6, title: 'På jobb', level: 'A2', description: 'Workplace conversations.' },
  { id: 7, title: 'Familie og venner', level: 'A2', description: 'Talking about family and friends.' },
  // B1 Lessons
  { id: 8, title: 'Nyheter og medier', level: 'B1', description: 'Discussing current events.' },
  { id: 9, title: 'Fritidsaktiviteter', level: 'B1', description: 'Hobbies and free time.' },
  { id: 10, title: 'Helse og velvære', level: 'B1', description: 'Health-related vocabulary.' },
  { id: 11, title: 'Kultur og tradisjoner', level: 'B1', description: 'Norwegian culture and traditions.' },
  // B2 Lessons
  { id: 12, title: 'Samfunnsdebatt', level: 'B2', description: 'Participating in social debates.' },
  { id: 13, title: 'Utdanning og karriere', level: 'B2', description: 'Education and career paths.' },
  { id: 14, title: 'Miljø og klima', level: 'B2', description: 'Environmental issues.' },
  { id: 15, title: 'Politikk og økonomi', level: 'B2', description: 'Political and economic topics.' },
];

// Group lessons by level for easier rendering
const categorizedLessons = computed(() => {
  const categories: Record<string, LessonMeta[]> = {};
  allLessons.forEach(lesson => {
    if (!categories[lesson.level]) {
      categories[lesson.level] = [];
    }
    categories[lesson.level].push(lesson);
  });
  // Ensure a consistent order of levels, including C1/C2 if they exist in your data
  const orderedLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const sortedCategories: Record<string, LessonMeta[]> = {};
  orderedLevels.forEach(level => {
    if (categories[level]) {
      sortedCategories[level] = categories[level];
    }
  });
  return sortedCategories;
});

// Removed `emit` as we are using router directly

function selectLesson(lessonId: number) {
  // Use router.push to navigate to the LessonDetail route
  // The `name` should match the name defined in src/router/main.js
  // The `params` object will populate the dynamic part of the URL (:lessonId)
  router.push({ name: 'LessonDetail', params: { lessonId: lessonId.toString() } });
}
</script>

<template>
  <div class="lessons-page">
    <h1 class="page-title">Choose a Lesson</h1>

    <div class="lesson-categories">
      <div v-for="(lessons, level) in categorizedLessons" :key="level" class="category-section">
        <h2 class="category-title">{{ level }} Lessons</h2>
        <div class="lesson-grid">
          <div
              v-for="lesson in lessons"
              :key="lesson.id"
              class="lesson-card"
              @click="selectLesson(lesson.id)"
          >
            <h3 class="lesson-card-title">{{ lesson.title }}</h3>
            <p class="lesson-card-description">{{ lesson.description }}</p>
            <span class="lesson-card-level">{{ lesson.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ... (styles remain unchanged) ... */
.lessons-page {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
}

.page-title {
  font-size: 3rem;
  color: var(--color-accent);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.lesson-categories {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.category-section {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.05);
}

.category-title {
  font-size: 2.2rem;
  color: #333;
  margin-top: 0;
  margin-bottom: 1.8rem;
  text-align: center;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
}

.lesson-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.lesson-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  position: relative;
  overflow: hidden;
}

.lesson-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-color: var(--color-accent);
}

.lesson-card-title {
  font-size: 1.6rem;
  color: #000;
  margin-top: 0;
  margin-bottom: 0.8rem;
}

.lesson-card-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.lesson-card-level {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--color-accent);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  .category-title {
    font-size: 1.8rem;
  }
  .lesson-grid {
    grid-template-columns: 1fr;
  }
  .lessons-page {
    padding: 1rem;
  }
  .category-section {
    padding: 1.5rem;
  }
}
</style>