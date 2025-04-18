import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tokenomics from '../views/Tokenomics.vue'
import Roadmap from '../views/Roadmap.vue'
import BlockExplorer from '../views/BlockExplorer.vue'
import HashCalculator from '../views/HashCalculator.vue'
import KeyVerifier from '../views/KeyVerifier.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tokenomics',
      name: 'tokenomics',
      component: Tokenomics
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: Roadmap
    },
    {
      path: '/block-explorer',
      name: 'block-explorer',
      component: BlockExplorer
    },
    {
      path: '/hash-calculator',
      name: 'hash-calculator',
      component: HashCalculator
    },
    {
      path: '/key-verifier',
      name: 'key-verifier',
      component: KeyVerifier
    }
  ]
})

export default router 