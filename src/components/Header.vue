<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <span class="logo-text">GFPC</span>
          </router-link>
        </div>
        
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span class="bar" :class="{ 'active': isMobileMenuOpen }"></span>
        </button>
        
        <nav class="nav" :class="{ 'mobile-open': isMobileMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMobileMenu">Home</router-link>
          <router-link to="/about" class="nav-link" @click="closeMobileMenu">About</router-link>
          <router-link to="/tokenomics" class="nav-link" @click="closeMobileMenu">Tokenomics</router-link>
          <router-link to="/roadmap" class="nav-link" @click="closeMobileMenu">Roadmap</router-link>
          <div class="dropdown">
            <button class="dropdown-btn" @click="toggleDevelopersMenu">Developers</button>
            <div class="dropdown-content" :class="{ 'mobile-open': isDevelopersMenuOpen }">
              <router-link to="/block-explorer" class="dropdown-link" @click="closeMobileMenu">Block Explorer</router-link>
              <router-link to="/hash-calculator" class="dropdown-link" @click="closeMobileMenu">Hash Calculator</router-link>
              <router-link to="/key-verifier" class="dropdown-link" @click="closeMobileMenu">Key Verifier</router-link>
            </div>
          </div>
          
          <!-- Mobile Theme Controls -->
          <div class="mobile-theme-controls">
            <div class="theme-toggle">
              <span>Theme</span>
              <button @click="toggleTheme" class="theme-button" :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
                <span v-if="isDarkMode">🌙</span>
                <span v-else>☀️</span>
              </button>
            </div>
            
            <div class="color-theme-toggle">
              <span>Color</span>
              <button @click="toggleColorMenu" class="color-toggle" title="Select Color Theme">
                🎨
              </button>
              <div class="color-menu" :class="{ active: isColorMenuOpen }">
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
          </div>
        </nav>
        
        <div class="actions" :class="{ 'mobile-open': isMobileMenuOpen }">
          <div class="theme-actions">
            <button @click="toggleTheme" class="theme-button" :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
              <span v-if="isDarkMode">🌙</span>
              <span v-else>☀️</span>
            </button>
            
            <button @click="toggleColorMenu" class="color-toggle" title="Select Color Theme">
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
const isMobileMenuOpen = ref(false);
const isDevelopersMenuOpen = ref(false);

const selectColor = (color) => {
  setColorTheme(color);
  isColorMenuOpen.value = false;
};

const connectWallet = () => {
  isWalletConnected.value = !isWalletConnected.value;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    isDevelopersMenuOpen.value = false;
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isDevelopersMenuOpen.value = false;
};

const toggleDevelopersMenu = () => {
  if (window.innerWidth <= 768) {
    isDevelopersMenuOpen.value = !isDevelopersMenuOpen.value;
  }
};

const toggleColorMenu = () => {
  isColorMenuOpen.value = !isColorMenuOpen.value;
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

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  position: relative;
}

.bar {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}

.bar::before,
.bar::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--text);
  transition: all 0.3s ease;
}

.bar::before {
  top: -8px;
}

.bar::after {
  bottom: -8px;
}

.bar.active {
  background: transparent;
}

.bar.active::before {
  transform: rotate(45deg);
  top: 0;
}

.bar.active::after {
  transform: rotate(-45deg);
  bottom: 0;
}

.mobile-theme-controls {
  display: none;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--card-border);
}

.theme-toggle,
.color-theme-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.theme-toggle span,
.color-theme-toggle span {
  color: var(--text-secondary);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }
  
  .nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: var(--card-bg);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: left 0.3s ease;
    z-index: 1000;
    backdrop-filter: none;
    box-shadow: none;
    opacity: 1;
  }
  
  .nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--card-bg);
    z-index: -1;
  }
  
  .nav.mobile-open {
    left: 0;
  }
  
  .nav-link {
    font-size: 1.2rem;
    padding: 1rem 0;
    text-align: center;
    width: 100%;
    background: transparent;
  }
  
  .dropdown {
    width: 100%;
    text-align: center;
    background: transparent;
  }
  
  .dropdown-btn {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    background: transparent;
  }
  
  .dropdown-content {
    position: static;
    width: 100%;
    opacity: 1;
    visibility: visible;
    transform: none;
    display: none;
    padding: 0.5rem 0;
    border-left: none;
    text-align: center;
    background: var(--card-bg);
  }
  
  .dropdown-content.mobile-open {
    display: block;
  }
  
  .dropdown-link {
    padding: 0.75rem 0;
    text-align: center;
    display: block;
    background: transparent;
  }
  
  .mobile-theme-controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--card-border);
    text-align: center;
    background: transparent;
  }
  
  .theme-toggle,
  .color-theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 0;
    background: transparent;
  }
  
  .color-theme-toggle {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
  
  .color-menu {
    position: static;
    display: none;
    width: 100%;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    transform: none;
    box-shadow: var(--shadow);
  }
  
  .color-menu.active {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .color-button {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    background: transparent;
    color: var(--text);
    border: 1px solid var(--card-border);
    transition: all 0.3s ease;
    text-align: center;
    font-size: 1rem;
    text-transform: capitalize;
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
  
  .color-toggle {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    box-shadow: var(--shadow);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: all 0.3s ease;
    gap: 0.5rem;
  }
  
  .color-toggle span {
    font-size: 1rem;
  }
  
  .actions {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: var(--card-bg);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: none;
  }
  
  .actions.mobile-open {
    transform: translateX(0);
  }
  
  .actions::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--card-bg);
    z-index: -1;
  }
}
</style> 