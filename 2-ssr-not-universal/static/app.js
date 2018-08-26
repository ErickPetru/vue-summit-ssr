new Vue({
  el: '#app',
  // Construir a instância Vue no cliente, copiando o
  // template do servidor, é um verdadeiro absurdo!
  template: `<div id="app">
    <h2>Não Universal 🙄</h2>
    <p>Você visitou o endereço: <b>{{ url }}</b></p>
    <input placeholder="Qual seu nome?" v-model="name">
    <p v-show="name">Olá, {{ name }}!</p>
    </div>`,
  data () {
    return {
      url: null, // Não temos context.url aqui!
      name: ''
    }
  }
})
