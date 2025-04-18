<template>
  <div class="hash-calculator">
    <div class="container">
      <h1 class="title">Hash Calculator</h1>
      
      <div class="calculator-container">
        <div class="input-section">
          <div class="input-group">
            <label for="input-text">Input Text</label>
            <textarea
              id="input-text"
              v-model="inputText"
              placeholder="Enter text to calculate hash..."
              rows="4"
            ></textarea>
          </div>
          
          <div class="algorithm-selector">
            <label>Hash Algorithm</label>
            <div class="algorithm-buttons">
              <button
                v-for="algo in algorithms"
                :key="algo"
                @click="selectAlgorithm(algo)"
                :class="{ active: selectedAlgorithm === algo }"
              >
                {{ algo }}
              </button>
            </div>
          </div>
          
          <button class="calculate-button" @click="calculateHash">
            Calculate Hash
          </button>
        </div>
        
        <div class="result-section">
          <div class="result-group">
            <label>Hash Result</label>
            <div class="result-display">
              <code>{{ hashResult }}</code>
              <button 
                class="copy-button" 
                @click="copyToClipboard"
                :disabled="!hashResult"
              >
                Copy
              </button>
            </div>
          </div>
          
          <div class="result-group">
            <label>Hash Length</label>
            <div class="result-display">
              <code>{{ hashLength }}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTheme } from '../composables/useTheme';
import CryptoJS from 'crypto-js';

const { isDarkMode, currentColorTheme } = useTheme();
const inputText = ref('');
const selectedAlgorithm = ref('SHA-256');
const hashResult = ref('');
const isCalculating = ref(false);

const algorithms = [
  'MD5',
  'SHA-1',
  'SHA-256',
  'SHA-512',
  'SHA-3',
  'RIPEMD-160'
];

const hashLength = computed(() => {
  return hashResult.value ? hashResult.value.length : 0;
});

const selectAlgorithm = (algo) => {
  selectedAlgorithm.value = algo;
};

const calculateHash = () => {
  if (!inputText.value.trim()) {
    hashResult.value = '';
    return;
  }

  isCalculating.value = true;
  
  try {
    let hash;
    switch (selectedAlgorithm.value) {
      case 'MD5':
        hash = CryptoJS.MD5(inputText.value).toString();
        break;
      case 'SHA-1':
        hash = CryptoJS.SHA1(inputText.value).toString();
        break;
      case 'SHA-256':
        hash = CryptoJS.SHA256(inputText.value).toString();
        break;
      case 'SHA-512':
        hash = CryptoJS.SHA512(inputText.value).toString();
        break;
      case 'SHA-3':
        hash = CryptoJS.SHA3(inputText.value).toString();
        break;
      case 'RIPEMD-160':
        hash = CryptoJS.RIPEMD160(inputText.value).toString();
        break;
      default:
        hash = CryptoJS.SHA256(inputText.value).toString();
    }
    
    hashResult.value = hash;
  } catch (error) {
    console.error('Error calculating hash:', error);
    hashResult.value = 'Error calculating hash';
  } finally {
    isCalculating.value = false;
  }
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(hashResult.value);
    // Можно добавить уведомление об успешном копировании
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};
</script>

<style scoped>
.hash-calculator {
  padding: 2rem;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.calculator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: var(--card-bg);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow);
}

.input-section,
.result-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group,
.result-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
}

textarea {
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--card-border);
  background: var(--bg);
  color: var(--text);
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s ease;
}

textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
}

.algorithm-selector {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.algorithm-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
}

.algorithm-buttons button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--card-border);
  background: var(--bg);
  color: var(--text);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.algorithm-buttons button:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.algorithm-buttons button.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.calculate-button {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.calculate-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow);
}

.result-display {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--bg);
  border: 1px solid var(--card-border);
  min-height: 60px;
}

.result-display code {
  flex: 1;
  font-family: monospace;
  font-size: 0.9rem;
  word-break: break-all;
  color: var(--text);
}

.copy-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--card-border);
  background: var(--bg);
  color: var(--text);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.copy-button:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.copy-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .calculator-container {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 2rem;
  }
}
</style> 