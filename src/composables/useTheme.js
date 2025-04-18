import { ref } from 'vue'

const isDarkMode = ref(true)
const currentColorTheme = ref('purple') // purple, green, red, blue

const colorThemes = {
  purple: {
    primary: '#9333EA',
    secondary: '#3B82F6',
    gradient: 'linear-gradient(135deg, #9333EA, #3B82F6)',
    cardBorder: 'rgba(147, 51, 234, 0.1)',
    shadow: '0 0 20px rgba(147, 51, 234, 0.3)',
    glow: '0 0 50px rgba(147, 51, 234, 0.3), 0 0 100px rgba(59, 130, 246, 0.2)'
  },
  green: {
    primary: '#10B981',
    secondary: '#34D399',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    cardBorder: 'rgba(16, 185, 129, 0.1)',
    shadow: '0 0 20px rgba(16, 185, 129, 0.3)',
    glow: '0 0 50px rgba(16, 185, 129, 0.3), 0 0 100px rgba(5, 150, 105, 0.2)'
  },
  red: {
    primary: '#EF4444',
    secondary: '#F87171',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    cardBorder: 'rgba(239, 68, 68, 0.1)',
    shadow: '0 0 20px rgba(239, 68, 68, 0.3)',
    glow: '0 0 50px rgba(239, 68, 68, 0.3), 0 0 100px rgba(220, 38, 38, 0.2)'
  },
  blue: {
    primary: '#3B82F6',
    secondary: '#60A5FA',
    gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    cardBorder: 'rgba(59, 130, 246, 0.1)',
    shadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    glow: '0 0 50px rgba(59, 130, 246, 0.3), 0 0 100px rgba(37, 99, 235, 0.2)'
  }
}

const darkTheme = {
  bg: '#0a0a0f',
  cardBg: 'rgba(16, 12, 27, 0.7)',
  text: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)'
}

const lightTheme = {
  bg: '#f8fafc',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  text: '#1e293b',
  textSecondary: '#64748b'
}

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle('dark-theme', isDarkMode.value)
    document.documentElement.classList.toggle('light-theme', !isDarkMode.value)
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    applyThemeColors()
  }

  const setColorTheme = (theme) => {
    currentColorTheme.value = theme
    applyThemeColors()
    localStorage.setItem('colorTheme', theme)
  }

  const applyThemeColors = () => {
    const themeColors = colorThemes[currentColorTheme.value]
    const currentTheme = isDarkMode.value ? darkTheme : lightTheme
    
    // Apply color theme variables
    document.documentElement.style.setProperty('--primary', themeColors.primary)
    document.documentElement.style.setProperty('--secondary', themeColors.secondary)
    document.documentElement.style.setProperty('--gradient', themeColors.gradient)
    document.documentElement.style.setProperty('--card-border', themeColors.cardBorder)
    document.documentElement.style.setProperty('--shadow', themeColors.shadow)
    document.documentElement.style.setProperty('--glow', themeColors.glow)
    
    // Apply dark/light theme variables
    document.documentElement.style.setProperty('--bg', currentTheme.bg)
    document.documentElement.style.setProperty('--card-bg', currentTheme.cardBg)
    document.documentElement.style.setProperty('--text', currentTheme.text)
    document.documentElement.style.setProperty('--text-secondary', currentTheme.textSecondary)

    // Force a reflow to ensure styles are applied
    document.documentElement.offsetHeight

    // Update dark theme variables
    if (isDarkMode.value) {
      document.documentElement.style.setProperty('--dark-primary', themeColors.primary)
      document.documentElement.style.setProperty('--dark-secondary', themeColors.secondary)
      document.documentElement.style.setProperty('--dark-card-border', themeColors.cardBorder)
      document.documentElement.style.setProperty('--dark-shadow', themeColors.shadow)
      document.documentElement.style.setProperty('--dark-glow', themeColors.glow)
    } else {
      document.documentElement.style.setProperty('--light-primary', themeColors.primary)
      document.documentElement.style.setProperty('--light-secondary', themeColors.secondary)
      document.documentElement.style.setProperty('--light-card-border', themeColors.cardBorder)
      document.documentElement.style.setProperty('--light-shadow', themeColors.shadow)
      document.documentElement.style.setProperty('--light-glow', themeColors.glow)
    }
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const savedColorTheme = localStorage.getItem('colorTheme') || 'purple'
    
    isDarkMode.value = savedTheme === 'dark'
    currentColorTheme.value = savedColorTheme
    
    document.documentElement.classList.add(isDarkMode.value ? 'dark-theme' : 'light-theme')
    applyThemeColors()
  }

  return {
    isDarkMode,
    currentColorTheme,
    toggleTheme,
    setColorTheme,
    initTheme
  }
} 