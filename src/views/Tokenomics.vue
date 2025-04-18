<script setup>
import { computed } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDarkMode, currentColorTheme } = useTheme();
const tokenomicsClass = computed(() => isDarkMode.value ? 'dark-theme' : 'light-theme');
</script>

<template>
  <div class="tokenomics" :class="tokenomicsClass">
    <section class="overview">
      <div class="container">
        <h2>Token <span class="gradient-text">Economics</span></h2>
        <div class="stats-grid">
          <div class="stat-card">
            <h3>Total Supply</h3>
            <p class="stat-value">1,000,000,000 GFPC</p>
          </div>
          <div class="stat-card">
            <h3>Circulating Supply</h3>
            <p class="stat-value">750,000,000 GFPC</p>
          </div>
          <div class="stat-card">
            <h3>Market Cap</h3>
            <p class="stat-value">$75,000,000</p>
          </div>
        </div>
      </div>
    </section>

    <section class="distribution">
      <div class="container">
        <h2>Token <span class="gradient-text">Distribution</span></h2>
        <div class="distribution-grid">
          <div class="distribution-card">
            <div class="distribution-icon">💰</div>
            <h3>Public Sale</h3>
            <p>40%</p>
          </div>
          <div class="distribution-card">
            <div class="distribution-icon">🔒</div>
            <h3>Team & Advisors</h3>
            <p>20%</p>
          </div>
          <div class="distribution-card">
            <div class="distribution-icon">🌱</div>
            <h3>Ecosystem</h3>
            <p>25%</p>
          </div>
          <div class="distribution-card">
            <div class="distribution-icon">🏦</div>
            <h3>Reserve</h3>
            <p>15%</p>
          </div>
        </div>
      </div>
    </section>

    <section class="utility">
      <div class="container">
        <h2>Token <span class="gradient-text">Utility</span></h2>
        <div class="utility-grid">
          <div class="utility-card">
            <h3>Governance</h3>
            <p>Participate in platform decisions and vote on proposals</p>
          </div>
          <div class="utility-card">
            <h3>Staking</h3>
            <p>Earn rewards by staking your GFPC tokens</p>
          </div>
          <div class="utility-card">
            <h3>Payments</h3>
            <p>Use GFPC for transactions and services</p>
          </div>
          <div class="utility-card">
            <h3>Discounts</h3>
            <p>Receive discounts on platform fees</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tokenomics {
  padding: 2rem 1rem;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.token-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.token-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.token-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--glow);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.token-distribution {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.5rem;
}

.distribution-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.distribution-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.distribution-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--background);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.distribution-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow);
}

.item-label {
  font-weight: 500;
}

.item-value {
  font-weight: 700;
  color: var(--primary);
}

.token-chart {
  position: sticky;
  top: 2rem;
}

@media (max-width: 992px) {
  .token-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .token-chart {
    position: static;
    order: -1;
  }
}

@media (max-width: 768px) {
  .tokenomics {
    padding: 1.5rem 1rem;
  }
  
  .token-stats {
    grid-template-columns: 1fr;
  }
  
  .stat-card {
    padding: 1.25rem;
  }
  
  .stat-value {
    font-size: 1.75rem;
  }
  
  .distribution-title {
    font-size: 1.25rem;
  }
  
  .distribution-item {
    padding: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 576px) {
  .tokenomics {
    padding: 1rem 0.5rem;
  }
  
  .token-content {
    gap: 2rem;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
  
  .token-distribution {
    padding: 1rem;
  }
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

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.utility-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.utility-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}
</style> 