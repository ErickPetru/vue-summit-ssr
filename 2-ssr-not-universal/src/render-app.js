import fs from 'fs'
import { createRenderer } from 'vue-server-renderer'
import createApp from './create-app'

export default async (req, res) => {
  try {
    // Cria o renderizar com o template do HTML geral
    const renderer = createRenderer({
      template: fs.readFileSync('./src/app.html', 'utf-8')
    })

    // Monta um novo Vue app com os dados de contexto desejados
    const context = { url: req.url }
    const app = createApp(context)

    // Renderiza a aplicação e envia ao cliente
    const html = await renderer.renderToString(app)
    res.send(html)
  } catch (err) {
    res.status(500).end(err.message)
  }
}
