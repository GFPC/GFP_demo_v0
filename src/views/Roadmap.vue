<template>
  <div class="roadmap">
    <div class="container">
      <h1 class="text-gradient">Roadmap</h1>
      
      <div class="timeline">
        <div class="timeline-item" v-for="(phase, index) in phases" :key="index">
          <div class="timeline-content">
            <div class="phase-header">
              <h2 class="phase-title">{{ phase.title }}</h2>
              <span class="phase-date">{{ phase.date }}</span>
            </div>
            <div class="phase-milestones">
              <div v-for="(milestone, mIndex) in phase.milestones" :key="mIndex" class="milestone">
                <div class="milestone-icon">
                  <i :class="milestone.icon"></i>
                </div>
                <div class="milestone-content">
                  <h3>{{ milestone.title }}</h3>
                  <p>{{ milestone.description }}</p>
                </div>
              </div>
            </div>
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

const phases = ref([
  {
    title: 'Phase 1: Foundation',
    date: 'Q1 2024',
    milestones: [
      {
        icon: 'fas fa-rocket',
        title: 'Project Launch',
        description: 'Initial token launch and community building'
      },
      {
        icon: 'fas fa-exchange-alt',
        title: 'DEX Listing',
        description: 'Listing on major decentralized exchanges'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Security Audit',
        description: 'Comprehensive smart contract security audit'
      }
    ]
  },
  {
    title: 'Phase 2: Growth',
    date: 'Q2 2024',
    milestones: [
      {
        icon: 'fas fa-chart-line',
        title: 'Market Expansion',
        description: 'Strategic partnerships and market expansion'
      },
      {
        icon: 'fas fa-wallet',
        title: 'Wallet Integration',
        description: 'Integration with major crypto wallets'
      },
      {
        icon: 'fas fa-users',
        title: 'Community Growth',
        description: 'Expansion of community and governance'
      }
    ]
  },
  {
    title: 'Phase 3: Innovation',
    date: 'Q3 2024',
    milestones: [
      {
        icon: 'fas fa-cogs',
        title: 'Protocol Upgrade',
        description: 'Implementation of advanced protocol features'
      },
      {
        icon: 'fas fa-layer-group',
        title: 'Layer 2 Integration',
        description: 'Integration with Layer 2 solutions'
      },
      {
        icon: 'fas fa-globe',
        title: 'Global Expansion',
        description: 'Expansion to new markets and regions'
      }
    ]
  },
  {
    title: 'Phase 4: Maturity',
    date: 'Q4 2024',
    milestones: [
      {
        icon: 'fas fa-university',
        title: 'Institutional Adoption',
        description: 'Integration with institutional platforms'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Strategic Partnerships',
        description: 'Formation of key industry partnerships'
      },
      {
        icon: 'fas fa-infinity',
        title: 'Sustainable Growth',
        description: 'Implementation of long-term growth strategies'
      }
    ]
  }
])
</script>

<style scoped>
.roadmap {
  padding: 2rem;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--gradient);
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
}

.timeline-content {
  position: relative;
  width: 45%;
  padding: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--glow);
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: auto;
}

.phase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.phase-title {
  font-size: 1.5rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.phase-date {
  color: var(--text-secondary);
  font-weight: 500;
}

.phase-milestones {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.milestone {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.milestone-icon {
  width: 40px;
  height: 40px;
  background: var(--gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.milestone-content h3 {
  margin: 0 0 0.5rem 0;
  color: var(--text);
}

.milestone-content p {
  margin: 0;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
  
  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px !important;
  }
  
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: 60px !important;
  }
}
</style> 