import createApp from './create-app'

export default (context) => {
  // No servidor, agora retornaremos uma Promise
  // para poder lidar com a resolução das rotas
  return new Promise((resolve, reject) => {
    // Ao criar a instância do app, também retornamos o router
    const { app, router } = createApp(context)

    // Garantindo que o router navegue para `context.url`
    router.push(context.url)

    // Quando a navegação for realizada...
    router.onReady(() => {
      // Verificamos se componentes condizem com esta rota
      const matchedComponents = router.getMatchedComponents()

      if (matchedComponents.length) resolve(app) // Resolvendo a rota
      else return reject({ code: 404 }) // Senão, temos um 404
    })
  })
}
