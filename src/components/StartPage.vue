<template>
  <h1>{{ msg }}</h1>
  <p>Op deze site onderzoek ik de mogelijkheden van het gebruik van Google AI
    Studio (Gemini) in een web applicatie. 
    </p>
  <p>
    Ideeën om eens te proberen:
  <ul>
    <li>Chatbot met een tuned model, gericht op het vak en het onderwerp</li>
    <li>Image recognition, welke leerlingen zijn aan het luisteren?</li>
    <li>Image recognition, welke leerlingen zijn aanwezig?</li>
    <li>Image recognition, wie is wie op de foto?</li>
    <li>Image recognition, welke leerlingen zijn aan het werk?</li>
    <li>Image recognition, welke leerlingen zijn aan het spelen?</li>
    <li>Image recognition, welke leerlingen zijn aan het slapen?</li>
    <li>Image recognition, welke leerlingen zijn aan het eten?</li>
  </ul>
  </p>
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
  text-align: center;
}
p {
  font-size: 1.5em;
  text-align: center;
}
/* geen list-tryle bij de ul, teksten limnks uitlijnen, maar met een auto marge aan weerszijden */
ul {
  list-style-type: none;
  text-align: center;
  margin: auto;
  width: 50%;
}
</style>
