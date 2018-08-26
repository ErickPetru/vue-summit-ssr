import Vue from 'vue'

export default (context) => {
  return new Vue({
    template: `<div id="app">
      <h2>Só Servidor 😐</h2>
      <p>Você visitou o endereço: <b>{{ url }}</b></p>
      <input placeholder="Qual seu nome?" v-model="name">
      <p v-if="name">Olá, {{ name }}!</p>
      </div>`,
    data () {
      return {
        url: context.url, // O express nos ofereceu este dado
        name: ''
      }
    }
  })
}
