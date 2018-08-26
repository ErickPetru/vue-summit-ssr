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

    // Novamente, cada entry point fará sua parte montando a instância
    const context = { url: req.url }
    const html = await renderer.renderToString(context)
    res.send(html)
  } catch (err) {
    // Tratamento de erros incrementado, para tratar rotas inválidas
    if (err.url) res.redirect(err.url)
    else if (err.code === 404) res.status(404).end()
    else res.status(500).end()
  }
}
