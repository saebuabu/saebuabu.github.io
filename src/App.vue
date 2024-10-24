<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/ai">Ai test 1</router-link> |
    <router-link to="/luister">Fluister naam</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

/* Geef de nav een interessante achtergrondfoto van internet, en haal de marges aan alle zijden weg */
nav {
  padding: 30px;
  background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0');
  background-size: cover;
  background-position: center;
  color: white;
  margin: 0;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;

}

</style>
