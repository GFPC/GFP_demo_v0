<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import Header from './components/Header.vue'

const { isDarkMode, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div id="app" :class="isDarkMode ? 'dark-theme' : 'light-theme'">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  width: 100%;
  background: var(--bg);
  color: var(--text);
  transition: background-color 0.3s ease, color 0.3s ease;
}

main {
  padding-top: 80px;
  min-height: calc(100vh - 80px);
}

.router-view-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Ensure router view takes full width */
#app > * {
  width: 100%;
}

/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Container styles */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Ensure proper sizing */
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
