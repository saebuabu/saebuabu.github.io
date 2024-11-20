<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ai">Ai gedicht</router-link> |
    <router-link to="/luister">Audio calculator</router-link>
  </nav>
  <router-view/>
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
}

h1 {
  font-size: 2em;
  text-align: center;
  color: var(--primary-color);
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

</style>
