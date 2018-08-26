import path from 'path'
import VueLoaderPlugin from 'vue-loader/lib/plugin'

// Desativando warning gerado pelo VueLoaderPlugin no Webpack 4,
// estará resolvido na próxima versão 2.6 do Vue
process.noDeprecation = true

export default {
  // Configura o modo de execução de acordo com o ambiente
  mode: process.env.NODE_ENV || 'development',
  // Configura para um modelo de source map rápido
  devtool: 'cheap-source-map',
  // Configura o destino dos arquivos gerados
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    // Configuração mínima para arquivos Vue com <script>
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader' // Arquivos .vue
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', // ECMAScript 2015+
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // Habilita o plugin do Vue-Loader
    new VueLoaderPlugin()
  ]
}
