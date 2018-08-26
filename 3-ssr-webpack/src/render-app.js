import fs from 'fs'
import { createBundleRenderer } from 'vue-server-renderer'
import serverBundle from '../dist/vue-ssr-server-bundle.json'
import clientManifest from '../dist/vue-ssr-client-manifest.json'

export default async (req, res) => {
  try {
    // Cria o renderizar com o template do HTML geral
    // e com as informações do `client-manifest.json`
    const renderer = createBundleRenderer(serverBundle, {
      template: fs.readFileSync('./src/app.html', 'utf-8'),
      clientManifest
    })

    // Não precisamos mais criar a instância aqui, pois cada
    // entry point fará sua parte montando a instância
    const context = { url: req.url }
    const html = await renderer.renderToString(context)
    res.send(html)
  } catch (err) {
    res.status(500).end(err.message)
  }
}
