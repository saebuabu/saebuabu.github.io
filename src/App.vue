<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/ai">Ai gedicht</router-link>
    <router-link to="/hydra">Hydra Visuals</router-link>
    <router-link to="/spanish">Spanish Coach</router-link>
  </nav>
  <router-view />
  <!-- fixed donkere footer met een link naar socials en naar abu.saebu.nl -->
  <footer>
      <div class="footer-column">
        <h4>Github static io pagina van Abu Saebu</h4>
      </div>
      <div class="footer-column">
        <a href="https://www.linkedin.com/in/abusaebu/" target="_blank">Mijn LinkedIn</a>
        <a href="https://abu.saebu.nl" target="_blank">Mijn portfolio</a>
        <span>versiedatum: {{ versionDate }}</span>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      versionDate: new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })
    };
  }
};

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-attachment: fixed;
  min-height: 100vh;
  padding-bottom: 120px;
  position: relative;
}

:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  --text-light: #ffffff;
  --text-dark: #2d3748;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.18);
  --shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* Glassmorphic Navigation */
nav {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1.5rem 2rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

nav a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

nav a.router-link-exact-active {
  background: rgba(102, 126, 234, 0.6);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  font-weight: 600;
}

/* Global heading styles */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Glassmorphic Footer */
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.3);
}

footer h4 {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-light);
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.footer-column {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-column a,
.footer-column span {
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
}

.footer-column a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.footer-column a::after {
  content: none !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  nav a {
    width: 100%;
    text-align: center;
  }

  footer {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .footer-column {
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
