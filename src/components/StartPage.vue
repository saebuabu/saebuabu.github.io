<template>
  <h1>{{ msg }}</h1>
  <p>Dit is de startpagina van de site waarin ik de integratie mogelijkheden onderzoek van het gebruik van Google AI Studio in een web applicatie. <br/>
   Klik de verschillende pagina's aan in het menu om het verder uit te proberen....</p>
</template>

<script>
export default {
  name: 'StartPage',
  props: {
    msg: String
  }
}
</script>


<style scoped>
h1 {
  font-size: 2em;
}
</style>
