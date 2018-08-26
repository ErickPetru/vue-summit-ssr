<script>
export default {
  data () {
    return {
      url: this.$route.path,
      name: ''
    }
  }
}
</script>

<template>
  <section id="index">
    <h2>SRR com Nuxt! 🤑</h2>
    <p>Você visitou o endereço: <b>{{ url }}</b></p>

    <p>Ir para: <router-link to="/teste">página de teste</router-link></p>

    <input placeholder="Qual seu nome?" v-model="name">
    <p v-show="name">Olá, {{ name }}!</p>
  </section>
</template>
