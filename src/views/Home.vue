<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDarkMode, currentColorTheme } = useTheme();

const homeClass = computed(() => isDarkMode.value ? 'dark-theme' : 'light-theme');

// Component logic can be added here if needed
</script>

<template>
  <div class="home" :class="homeClass">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>The Future of <span class="gradient-text">Crypto</span> is Here</h1>
          <p class="hero-description">
            GFPC is revolutionizing the cryptocurrency landscape with innovative technology
            and unparalleled accessibility.
          </p>
          <div class="hero-buttons">
            <button class="primary-button">Start Trading</button>
            <button class="secondary-button">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="crypto-sphere"></div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="stats-container">
        <div class="stat-item">
          <h3>$2.5B+</h3>
          <p>Trading Volume</p>
        </div>
        <div class="stat-item">
          <h3>100K+</h3>
          <p>Active Users</p>
        </div>
        <div class="stat-item">
          <h3>150+</h3>
          <p>Countries</p>
        </div>
        <div class="stat-item">
          <h3>0.01s</h3>
          <p>Transaction Speed</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
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
    </section>

    <!-- Token Info Section -->
    <section class="token-info">
      <div class="token-content">
        <div class="token-text">
          <h2>GFPC Token</h2>
          <p>The native token powering the future of decentralized finance</p>
          <ul class="token-features">
            <li>Governance rights for platform decisions</li>
            <li>Reduced trading fees for token holders</li>
            <li>Staking rewards and passive income</li>
            <li>Access to exclusive features and services</li>
          </ul>
          <button class="primary-button">Buy GFPC</button>
        </div>
        <div class="token-visual">
          <div class="token-glow"></div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <h2>Ready to Start?</h2>
      <p>Join thousands of traders in the GFPC ecosystem</p>
      <div class="cta-buttons">
        <button class="primary-button">Create Account</button>
        <button class="secondary-button">View Documentation</button>
      </div>
    </section>
  </div>
</template>

<style>
/* Remove :root variables as they are now in main.css */

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

/* Base Styles */
.home {
  width: 100%;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 2rem;
  position: relative;
  background: var(--bg);
  margin-top: 0;
}

.hero-content {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 2rem;
}

.hero-text {
  color: var(--text);
}

.hero-text h1 {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: var(--text);
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(147, 51, 234, 0.5));
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 1;
  visibility: visible;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  opacity: 1;
  visibility: visible;
}

.hero-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.crypto-sphere {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  position: relative;
  box-shadow: var(--glow);
}

.crypto-sphere::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: radial-gradient(circle at center, var(--secondary) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite alternate;
}

.crypto-sphere::after {
  content: '';
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  opacity: 0.1;
  border-radius: 50%;
  animation: rotate 15s linear infinite;
}

/* Stats Section */
.stats {
  width: 100%;
  padding: 4rem 2rem;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--card-border);
  border-bottom: 1px solid var(--card-border);
  display: flex;
  justify-content: center;
  position: relative;
}

.stats-container {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-item {
  animation: fadeInUp 0.6s ease-out backwards;
}

.stat-item:nth-child(1) { animation-delay: 0.1s; }
.stat-item:nth-child(2) { animation-delay: 0.2s; }
.stat-item:nth-child(3) { animation-delay: 0.3s; }
.stat-item:nth-child(4) { animation-delay: 0.4s; }

.stat-item h3 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.stat-item p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

/* Features Section */
.features {
  width: 100%;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text);
}

.features-grid {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out backwards;
  position: relative;
  overflow: hidden;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(147, 51, 234, 0.1),
    rgba(59, 130, 246, 0.1),
    transparent
  );
  transition: 0.5s;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
  filter: drop-shadow(0 0 8px var(--primary));
  animation: bounceIn 0.6s ease-out backwards;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.2) rotate(360deg);
  transition: transform 0.6s ease;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: var(--text);
}

.feature-card p {
  color: var(--text-secondary);
}

/* Token Info Section */
.token-info {
  width: 100%;
  padding: 6rem 0;
  background: var(--card-bg);
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.token-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.token-text {
  position: relative;
  z-index: 2;
  animation: slideInLeft 1s ease-out;
}

.token-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.token-text p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.token-text ul {
  list-style: none;
  margin: 2rem 0;
}

.token-text li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-secondary);
  animation: slideInLeft 0.6s ease-out backwards;
}

.token-text li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--secondary);
  text-shadow: 0 0 8px var(--secondary);
}

.token-text li:nth-child(1) { animation-delay: 0.1s; }
.token-text li:nth-child(2) { animation-delay: 0.2s; }
.token-text li:nth-child(3) { animation-delay: 0.3s; }
.token-text li:nth-child(4) { animation-delay: 0.4s; }

.token-visual {
  position: relative;
  height: 400px;
}

.token-glow {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 4s ease-in-out infinite;
  box-shadow: var(--glow);
}

.token-glow::after {
  content: '';
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  opacity: 0.1;
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

/* CTA Section */
.cta {
  width: 100%;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta h2 {
  color: var(--text);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Buttons */
.primary-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow);
}

.primary-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: buttonGlow 3s infinite;
}

.secondary-button {
  background-color: transparent;
  color: var(--primary);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid var(--primary);
  transition: all 0.3s;
  text-shadow: 0 0 8px var(--primary);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.secondary-button:hover {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-color: transparent;
  box-shadow: var(--glow);
}

.secondary-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: buttonGlow 3s infinite;
}

/* Animations */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-15px) rotate(2deg) scale(1.02);
  }
  50% {
    transform: translateY(0) rotate(5deg) scale(1);
  }
  75% {
    transform: translateY(15px) rotate(3deg) scale(0.98);
  }
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 
      0 0 50px rgba(147, 51, 234, 0.3),
      0 0 100px rgba(59, 130, 246, 0.2);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 
      0 0 80px rgba(147, 51, 234, 0.4),
      0 0 120px rgba(59, 130, 246, 0.3);
  }
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 
      0 0 50px rgba(147, 51, 234, 0.3),
      0 0 100px rgba(59, 130, 246, 0.2);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  80% {
    opacity: 1;
    transform: scale(0.89);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes buttonGlow {
  0% {
    transform: rotate(45deg) translateX(-100%);
  }
  100% {
    transform: rotate(45deg) translateX(100%);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content,
  .stats-container,
  .features-grid,
  .token-content {
    max-width: 100%;
  }

  .hero-text h1 {
    font-size: 3rem;
  }

  .crypto-sphere {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;
  }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .token-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-visual {
    height: 300px;
  }

  .token-features {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .hero-content,
  .stats-container,
  .features-grid,
  .token-content {
    padding: 0 1rem;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .stats-container {
    grid-template-columns: 1fr;
  }

  .hero-buttons,
  .cta-buttons {
    flex-direction: column;
  }
}

/* Light theme specific overrides */
.light-theme {
  .crypto-sphere {
    background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
    box-shadow: var(--shadow);
  }

  .crypto-sphere::before {
    background: radial-gradient(circle at center, var(--secondary) 0%, transparent 70%);
  }

  .feature-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
  }

  .token-glow {
    background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
    box-shadow: var(--shadow);
  }
}

/* Add theme toggle button styles */
.theme-toggle {
  display: none;
}

/* Add container class */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>