<script setup>

import githubLogo from '../assets/github-mark-white.svg';

</script>

<template>
  <ion-footer>
    <ion-toolbar color="coffee" >

      <ion-buttons slot="start" class="footer-start">
        <ion-title size="small">© 2025 Fredrik Ofstad</ion-title>
      </ion-buttons>
      <ion-buttons slot="end" class="footer-end">
        <ion-button
            href="https://github.com/fredrikofstad/norskcafe"
            target="_blank"
            rel="noopener noreferrer"
            fill="clear"
        >
          <img :src="githubLogo" alt="GitHub" class="github-icon" />
        </ion-button>
      </ion-buttons>

    </ion-toolbar>
  </ion-footer>
</template>
<script setup lang="ts">
</script>

<style scoped>

.github-icon {
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1); /* make it white on a dark background */
}
</style>