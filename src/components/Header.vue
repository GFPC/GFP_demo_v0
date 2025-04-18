<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <span class="logo-text">GFPC</span>
          </router-link>
        </div>
        
        <nav class="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/tokenomics" class="nav-link">Tokenomics</router-link>
          <router-link to="/roadmap" class="nav-link">Roadmap</router-link>
          <div class="dropdown">
            <button class="dropdown-btn">Developers</button>
            <div class="dropdown-content">
              <router-link to="/block-explorer" class="dropdown-link">Block Explorer</router-link>
              <router-link to="/hash-calculator" class="dropdown-link">Hash Calculator</router-link>
              <router-link to="/key-verifier" class="dropdown-link">Key Verifier</router-link>
            </div>
          </div>
        </nav>
        
        <div class="actions">
          <div class="theme-actions">
            <button @click="toggleTheme" class="theme-button" :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
              <span v-if="isDarkMode">🌙</span>
              <span v-else>☀️</span>
            </button>
            
            <button @click="isColorMenuOpen = !isColorMenuOpen" class="color-toggle" title="Select Color Theme">
              🎨
            </button>
            
            <div class="color-menu" v-if="isColorMenuOpen">
              <button 
                v-for="color in ['purple', 'green', 'red', 'blue']" 
                :key="color"
                @click="selectColor(color)"
                :class="{ active: currentColorTheme === color }"
                class="color-button"
              >
                {{ color }}
              </button>
            </div>
          </div>
          
          <button class="connect-button" @click="connectWallet">
            {{ isWalletConnected ? 'Connected' : 'Connect Wallet' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDarkMode, currentColorTheme, toggleTheme, setColorTheme, initTheme } = useTheme();
const isColorMenuOpen = ref(false);
const isWalletConnected = ref(false);

const selectColor = (color) => {
  setColorTheme(color);
  isColorMenuOpen.value = false;
};

const connectWallet = () => {
  isWalletConnected.value = !isWalletConnected.value;
};

onMounted(() => {
  initTheme();
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--card-border);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.theme-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 2px solid var(--card-border);
  box-shadow: var(--shadow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.theme-button:hover {
  transform: scale(1.1);
  box-shadow: var(--glow);
}

.color-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 2px solid var(--card-border);
  box-shadow: var(--shadow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.color-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--glow);
}

.color-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 100;
  box-shadow: var(--shadow);
  margin-top: 0.5rem;
}

.color-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
}

.color-button:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.color-button.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.connect-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.connect-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow);
}

.dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.dropdown-btn {
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
}

.dropdown-btn::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  transition: width 0.3s ease;
}

.dropdown:hover .dropdown-btn::after {
  width: 100%;
}

.dropdown-content {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--text);
  text-decoration: none;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.dropdown-link:hover {
  background: var(--gradient);
  color: white;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .actions {
    gap: 0.5rem;
  }
  
  .connect-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style> 