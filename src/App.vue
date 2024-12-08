<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ai">Ai gedicht</router-link> |
    <router-link to="/luister">Audio calculator</router-link> |
    <router-link to="/hydra">Visuals</router-link>
  </nav>
  <router-view />
  <!-- fixed donkere footer met een link naar socials en naar abu.saebu.nl -->
  <footer>
      <div class="footer-column">
        <h4>Abu Saebu is docent, muzikant, developer, tekstschrijver, dichter, docent en coach.</h4>
      </div>
      <div class="footer-column">
        <a href="https://www.linkedin.com/in/abusaebu/" target="_blank">LinkedIn</a>
        <a href="https://abu.saebu.nl" target="_blank">abu.saebu.nl</a>
      </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* haal een andere achtergrondfoto van internet */
  background-image: url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308');

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
  color: var(--primary-color);
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
