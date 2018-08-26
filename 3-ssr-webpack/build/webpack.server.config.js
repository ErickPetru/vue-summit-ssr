import merge from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin'
import baseConfig from './webpack.base.config'

export default merge(baseConfig, {
  // Configura o ambiente alvo, para otimizações do Webpack
  target: 'node',
  // Configura o ponto de entrada do código server
  entry: './src/entry-server.js',
  // Configura o arquivo de saída a ser gerado
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  // Externaliza dependências para o servidor compilar mais rápido
  externals: nodeExternals(),
  plugins: [
    // Gera `vue-ssr-server-bundle.json` no diretório de destino
    new VueSSRServerPlugin()
  ]
})
