import Vue from 'vue'
import App from './App.vue'

export default (context) => {
  // O template da instância Vue agora vem do arquivo App.vue
  const app = new Vue(App)

  // No servidor, podemos usar o `context.url`
  if (context) app.$data.url = context.url

  return app
}
