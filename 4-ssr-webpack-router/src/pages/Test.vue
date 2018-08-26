<script>
export default {
  data () {
    return {
      url: this.$route.path // Agora o vue-router resolve!
    }
  }
}
</script>

<template>
  <section id="test">
    <h2>Página de Teste</h2>
    <p>Você visitou o endereço: <b>{{ url }}</b></p>

    <p>Ir para: <router-link to="/">página inicial</router-link></p>
  </section>
</template>

<style scoped>
h2 {
  color: red;
}
</style>
