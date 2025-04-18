<script setup>
import { computed } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDarkMode, currentColorTheme } = useTheme();
const aboutClass = computed(() => isDarkMode.value ? 'dark-theme' : 'light-theme');
</script>

<template>
  <div class="about" :class="aboutClass">
    <section class="vision">
      <div class="container">
        <h2>Our <span class="gradient-text">Vision</span></h2>
        <p class="vision-text">
          GFPC is more than just a cryptocurrency - it's a movement towards a more inclusive
          and efficient financial future. Our mission is to make cryptocurrency accessible
          to everyone while maintaining the highest standards of security and performance.
        </p>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Why Choose <span class="gradient-text">GFPC</span></h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Advanced Security</h3>
            <p>State-of-the-art encryption and security protocols ensuring your assets are always protected.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>High-performance blockchain technology enabling instant transactions worldwide.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Low Fees</h3>
            <p>Minimal transaction fees making GFPC accessible to everyone.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>Global Access</h3>
            <p>Available worldwide, breaking down financial barriers across borders.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="technology">
      <div class="container">
        <h2>Our <span class="gradient-text">Technology</span></h2>
        <div class="tech-grid">
          <div class="tech-card">
            <h3>Blockchain</h3>
            <p>Built on a custom blockchain optimized for speed and security.</p>
          </div>
          <div class="tech-card">
            <h3>Smart Contracts</h3>
            <p>Advanced smart contract capabilities for complex financial operations.</p>
          </div>
          <div class="tech-card">
            <h3>Consensus</h3>
            <p>Innovative consensus mechanism ensuring network integrity.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <h2>Meet Our <span class="gradient-text">Team</span></h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">👨‍💼</div>
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👩‍💻</div>
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👨‍🔬</div>
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  padding-top: 80px;
}

/* Theme Classes */
.light-theme {
  --bg: var(--light-bg);
  --card-bg: var(--light-card-bg);
  --text: var(--light-text);
  --text-secondary: var(--light-text-secondary);
  --primary: var(--light-primary);
  --secondary: var(--light-secondary);
  --card-border: var(--light-card-border);
  --shadow: var(--light-shadow);
  --glow: var(--light-glow);
}

.dark-theme {
  --bg: var(--dark-bg);
  --card-bg: var(--dark-card-bg);
  --text: var(--dark-text);
  --text-secondary: var(--dark-text-secondary);
  --primary: var(--dark-primary);
  --secondary: var(--dark-secondary);
  --card-border: var(--dark-card-border);
  --shadow: var(--dark-shadow);
  --glow: var(--dark-glow);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 6rem 0;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vision-text {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.tech-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.member-avatar {
  font-size: 3rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  section {
    padding: 4rem 0;
  }

  h2 {
    font-size: 2rem;
  }

  .vision-text {
    font-size: 1.1rem;
  }
}
</style> 