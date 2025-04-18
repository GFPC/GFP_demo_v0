<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-logo">
          <span class="logo-icon">G</span>
          GFP<span class="highlight">C</span>
        </div>
        <p class="footer-description">
          GFPC is a next-generation cryptocurrency platform focused on innovation and accessibility.
        </p>
        <div class="social-links">
          <a href="#" class="social-link" title="Twitter">𝕏</a>
          <a href="#" class="social-link" title="Telegram">📱</a>
          <a href="#" class="social-link" title="Discord">💬</a>
          <a href="#" class="social-link" title="Medium">📝</a>
        </div>
      </div>

      <div class="footer-section">
        <h3>Quick Links</h3>
        <router-link to="/" class="footer-link">Home</router-link>
        <router-link to="/about" class="footer-link">About</router-link>
        <router-link to="/tokenomics" class="footer-link">Tokenomics</router-link>
        <router-link to="/roadmap" class="footer-link">Roadmap</router-link>
      </div>

      <div class="footer-section">
        <h3>Resources</h3>
        <router-link to="/whitepaper" class="footer-link">Whitepaper</router-link>
        <router-link to="/documentation" class="footer-link">Documentation</router-link>
        <router-link to="/terms" class="footer-link">Terms of Service</router-link>
        <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <a href="mailto:contact@gfpc.io" class="footer-link">contact@gfpc.io</a>
        <p class="address">
          123 Blockchain Street<br>
          Crypto City, CC 12345
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        © {{ new Date().getFullYear() }} GFPC. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--background-darker);
  color: var(--text-gray);
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 1.8rem;
  color: var(--primary-color);
}

.highlight {
  color: var(--primary-color);
}

.footer-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: var(--text-gray);
  font-size: 1.2rem;
  transition: color 0.3s;
}

.social-link:hover {
  color: var(--primary-color);
}

h3 {
  color: var(--text-light);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.footer-link {
  color: var(--text-gray);
  transition: color 0.3s;
  line-height: 2;
}

.footer-link:hover {
  color: var(--primary-color);
}

.address {
  line-height: 1.6;
}

.footer-bottom {
  max-width: 1440px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.copyright {
  color: var(--text-gray);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-section {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style> 