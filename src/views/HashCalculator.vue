<template>
  <div class="hash-calculator">
    <div class="container">
      <h1 class="text-gradient">Hash Calculator</h1>
      <div class="calculator-container">
        <div class="input-section">
          <textarea 
            v-model="inputText" 
            placeholder="Enter text to calculate hash..."
            class="input-field"
          ></textarea>
          <select v-model="selectedAlgorithm" class="algorithm-select">
            <option value="sha256">SHA-256</option>
            <option value="sha512">SHA-512</option>
            <option value="md5">MD5</option>
          </select>
          <button @click="calculateHash" class="btn">Calculate Hash</button>
        </div>
        <div class="result-section" v-if="hashResult">
          <h3>Result:</h3>
          <div class="result-box">
            <p>{{ hashResult }}</p>
            <button @click="copyHash" class="copy-btn">Copy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDarkMode } = useTheme()
const inputText = ref('')
const selectedAlgorithm = ref('sha256')
const hashResult = ref('')

const calculateHash = () => {
  // Здесь будет логика расчета хеша
  hashResult.value = 'Calculated hash will appear here...'
}

const copyHash = () => {
  navigator.clipboard.writeText(hashResult.value)
}
</script>

<style scoped>
.hash-calculator {
  padding: 2rem;
  min-height: 100vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.calculator-container {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 2rem;
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-field {
  min-height: 150px;
  padding: 1rem;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text);
  border-radius: 0.5rem;
  resize: vertical;
}

.algorithm-select {
  padding: 0.5rem;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text);
  border-radius: 0.5rem;
}

.result-section {
  margin-top: 2rem;
}

.result-box {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-btn {
  background: var(--gradient);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  box-shadow: var(--glow);
}
</style> 