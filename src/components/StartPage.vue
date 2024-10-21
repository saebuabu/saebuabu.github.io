<template>
  <h1>Start page</h1>
  <p>{{ msg }}</p>
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
