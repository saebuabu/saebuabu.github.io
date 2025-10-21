<template>

  
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ msg }}</h1>
        <p>Deze applicatie onderzoekt hoe je creatief kunt zijn met behulp van kunstmatige intelligentie. </p>  
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
