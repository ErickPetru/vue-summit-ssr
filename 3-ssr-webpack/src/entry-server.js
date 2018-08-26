import createApp from './create-app'

export default (context) => {
  // No servidor, basta retornar a instância Vue criada
  return createApp(context)
}
