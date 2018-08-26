import express from 'express'
import renderApp from './src/render-app'

const server = express()

// Serve diretamente conteúdo estático
server.use(express.static('static'))

// Todas as URL renderizarão o app Vue
server.get('*', renderApp)

server.listen(3001, () => {
  console.log('\x1b[36m%s\x1b[0m', 'Server listening on http://localhost:3001')
})
