<script setup>
import githubLogo from '../assets/github-mark-white.svg'
</script>

<template>
  <footer class="footer">
    <div class="footer-start">
      <span class="copyright">© 2025 Fredrik Ofstad</span>
    </div>
    <div class="footer-end">
      <a
          href="https://github.com/fredrikofstad/norskcafe"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
      >
        <img :src="githubLogo" alt="GitHub" class="github-icon" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-coffee);
  color: var(--color-coffee-contrast);
  padding: 0.5rem 1rem;
}

.footer-start {
  font-size: 0.9rem;
}

.footer-end {
  display: flex;
  align-items: center;
}

.github-icon {
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
}
</style>
