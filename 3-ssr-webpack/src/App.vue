<script>
export default {
  data () {
    return {
      url: null, // Não temos context.url aqui!
      name: ''
    }
  }
};
</script>

<template>
  <div id="app">
    <h2>Universal com Webpack 😲</h2>
    <p>Você visitou o endereço: <b>{{ url }}</b></p>
    <input placeholder="Qual seu nome?" v-model="name">
    <p v-show="name">Olá, {{ name }}!</p>
  </div>
</template>
