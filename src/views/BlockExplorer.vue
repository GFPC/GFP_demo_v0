<template>
  <div class="block-explorer">
    <div class="container">
      <h1 class="text-gradient">Block Explorer</h1>
      <div class="search-container">
        <input type="text" placeholder="Search by block height, hash, or address" class="search-input">
        <button class="btn">Search</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Latest Block</h3>
          <p class="text-gradient">#1234567</p>
        </div>
        <div class="stat-card">
          <h3>Transactions</h3>
          <p class="text-gradient">1,234</p>
        </div>
        <div class="stat-card">
          <h3>Network Hashrate</h3>
          <p class="text-gradient">1.23 TH/s</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'
const { isDarkMode } = useTheme()
</script>

<style scoped>
.block-explorer {
  padding: 2rem;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.search-container {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
}

.search-input {
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text);
  border-radius: 0.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 1.5rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  box-shadow: var(--glow);
}

@media (max-width: 768px) {
  .search-container {
    flex-direction: column;
  }
}
</style> 