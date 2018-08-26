import express from 'express'
import renderApp from './src/render-app'

const server = express()

// Serve diretamente conteúdo estático
server.use(express.static('static'))

// Serve o pacote para distribuição no cliente
server.use('/dist', express.static('./dist'))

// Todas as URL renderizarão o app Vue
server.get('*', renderApp)

server.listen(3004, () => {
  console.log('\x1b[36m%s\x1b[0m', 'Server listening on http://localhost:3004')
})
