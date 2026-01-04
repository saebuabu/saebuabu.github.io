<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ai">Ai gedicht</router-link> |
    <router-link to="/hydra">Hydra Visuals</router-link> |
    <router-link to="/spanish">Spanish Coach</router-link>
  </nav>
  <router-view />
  <!-- fixed donkere footer met een link naar socials en naar abu.saebu.nl -->
  <footer>
      <div class="footer-column">
        <h4>Abu Saebu is developer, muzikant, tekstschrijver, dichter, docent en coach.</h4>
      </div>
      <div class="footer-column">
        <a href="https://www.linkedin.com/in/abusaebu/" target="_blank">LinkedIn</a>
        <a href="https://abu.saebu.nl" target="_blank">abu.saebu.nl</a>
        <span>versiedatum: {{ versionDate }}</span>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      versionDate: document.lastModified
    };
  }
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* gebruik een achtergrond kleur met een gradient die van boven donkerder is dan naar beneden  */

  background-image: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));

  background-size: cover;
  background-position: center;
  margin: 0;
  min-height: 100vh;
}

:root {
  --primary-color: rgb(69, 14, 57);
  --secondary-color: #35495e;
  --tertiary-color: #f1f1f1;
  --quaternary-color: #2f0533;
  --nav-current-color: #80c9e5;
}

h1 {
  font-size: 2em;
  text-align: center;
  color: var(--primary-color);
}

footer h4 {
  font-size: 1em;
  text-align: left;
  color: var(--tertiary-color);
}

nav {
  padding: 30px;
  color: white;
  margin: 0;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: var(--nav-current-color);
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;

}

/* footer styling, fixed onderaan de pagina, donkere achtergrond, witte tekst, 2 kolommen */
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--quaternary-color);
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px;
}

/* anchors in de footer met een | als delimiter */
.footer-column a {
  color: var(--tertiary-color);
  text-decoration: none;
  margin: 0;
}

.footer-column {
  margin: 0 10px;
}

/* footer links in een rij */
.footer-column a {
  display: inline-block;
}

/* ::after pseudo element met een | als delimiter */
.footer-column a:not(:last-child)::after {
  content: "|";
  margin: 0 5px 0 5px;
}
</style>
