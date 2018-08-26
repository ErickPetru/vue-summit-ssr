import merge from 'webpack-merge'
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin'
import baseConfig from './webpack.base.config'

export default merge(baseConfig, {
  // Configura o ponto de entrada do código client
  entry: './src/entry-client.js',
  plugins: [
    // Gera `vue-ssr-client-manifest.json` no diretório de destino
    new VueSSRClientPlugin()
  ]
})
