<template>
  <div class="key-verifier">
    <div class="container">
      <h1 class="text-gradient">Key Verifier</h1>
      <div class="verifier-container">
        <div class="input-section">
          <div class="input-group">
            <label>Public Key</label>
            <input 
              v-model="publicKey" 
              placeholder="Enter public key..."
              class="input-field"
            >
          </div>
          <div class="input-group">
            <label>Private Key</label>
            <input 
              v-model="privateKey" 
              placeholder="Enter private key..."
              class="input-field"
              type="password"
            >
          </div>
          <button @click="verifyKeys" class="btn">Verify Keys</button>
        </div>
        <div class="result-section" v-if="verificationResult !== null">
          <div :class="['result-box', verificationResult ? 'success' : 'error']">
            <h3>{{ verificationResult ? 'Keys Match!' : 'Keys Do Not Match' }}</h3>
            <p>{{ verificationResult ? 'The provided keys are a valid pair.' : 'Please check your keys and try again.' }}</p>
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
const publicKey = ref('')
const privateKey = ref('')
const verificationResult = ref(null)

const verifyKeys = () => {
  // Здесь будет логика верификации ключей
  verificationResult.value = false // Временное значение для демонстрации
}
</script>

<style scoped>
.key-verifier {
  padding: 2rem;
  min-height: 100vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.verifier-container {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 2rem;
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  color: var(--text-secondary);
}

.input-field {
  padding: 1rem;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text);
  border-radius: 0.5rem;
}

.result-section {
  margin-top: 2rem;
}

.result-box {
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
}

.result-box.success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.result-box.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
}
</style> 