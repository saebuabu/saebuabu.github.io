<template>

  
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ msg }}</h1>
        <p>
          Speeltuin met nu AI gedicht tutor, audio calculator en visuals met Hydra.
          Onderzoek van web API en AI modellen, zoals Google AI en Hydra toegepast op creatieve toepassingen.
        </p>
        <p>Zowel de content als de html code, css en javascript wordt ingefluisterd door Github Co-pilot</p>
        <p>Een interessante vraag is hoe het werk van een Software Developer verandert met een alomtegenwoordige AI assistent op de achtergrond. 
          Zal er een hogere productiviteit van de developer zijn, zullen er minder ontwikkelaars nodig zijn?<br/> 
          Kan veel routine werk dan door laag opgeleide developers geassisteerd door AI worden overgenomen?
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
h1 {
  font-size: 2em;
  text-align: center;
  color: var(--primary-color);

}
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
