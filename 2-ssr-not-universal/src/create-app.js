import Vue from 'vue'

export default (context) => {
  return new Vue({
    template: `<div id="app">
      <h2>Não Universal 🙄</h2>
      <p>Você visitou o endereço: <b>{{ url }}</b></p>
      <input placeholder="Qual seu nome?" v-model="name">
      <p v-show="name">Olá, {{ name }}!</p>
      </div>`,
    data () {
      return {
        url: context.url, // No servidor, temos a este dado
        name: ''
      }
    }
  })
}
