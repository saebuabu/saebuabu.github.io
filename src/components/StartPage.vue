<template>

  
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ msg }}</h1>
        <p>
          Deze site is gemaakt met AI (Github co-pilot) en applicatie mogelijkheden te onderzoeken met Gemini. <br>Ook de content wordt gegenereerd door AI (Github co-pilot).
          Gaandewege de komende weken, maanden (nov 2024) zal de site worden uitgebreid met functionaliteiten. 
        </p>
      </div>
    </div>
    </div>


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


.container-fluid {
  /* achtergrondkleur van de container */
  background-color: #f1f1f1;
  margin: 0.5em auto;
  width: 80%;
}

/* container-fluid heeft 50% breedte bij  brede schermen */
@media (min-width: 1200px) {
  .container-fluid {
    width: 50%;
  } 
}

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
