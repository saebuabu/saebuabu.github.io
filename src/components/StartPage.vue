<template>
  <h1>{{ msg }}</h1>
  <p>
  Welkom bij AI in de klas. Dit zijn testjes en uitprobeersels om AI in de klas te gebruiken en te kijken of het redelijk eenvoudig te implementeren is.
  </p>
  <p>
    Ideeën om eens te proberen:
  </p>
  <ul>
    <li>Chatbot met een tuned model, gericht op het vak en het onderwerp, als vraagbaak voor de student</li>
    <li>Speech to text, welke leerlingen zijn aanwezig en afwezig?</li>
    <li>Generatie AI: 
      <ul>
        <li>Genereer vragen over de behandelde stof</li>
        <li>Genereer een samenvatting van de behandelde stof</li>
      </ul>
    </li>
  </ul>
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
