<template>

  
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ msg }}</h1>
        <p>Deze applicatie onderzoekt hoe je creatief kunt zijn met behulp van kunstmatige intelligentie en out-of-the-box tools die ik toevallig tegenkom.</p>
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
  max-width: 900px;
  margin: 3rem auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-light);
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

p {
  font-size: 1.25rem;
  line-height: 1.8;
  text-align: center;
  color: var(--text-light);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  text-align: center;
  margin: 2rem auto;
  padding: 0;
}

@media (max-width: 768px) {
  .container-fluid {
    margin: 1.5rem;
    padding: 2rem 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }
}
</style>
