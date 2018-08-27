# Vue.js Summit 2018 - Do SSR ao Nuxt

Material da palestra intitulada **Do Server-Side Rendering ao Nuxt: Reflexões, Críticas, Dicas e Etcéteras** proferida pelo professor [Erick Petrucelli](//github.com/ErickPetru) para o [Vue.js Summit 2018](//vuejssummit.com/), oferecendo cinco projetos Vue demonstrando incrementalmente a implementação de uma solução de renderização através do servidor.

## Como Utilizar

Cada diretório deste repositório representa um projeto independente, contendo seu próprio `package.json`. É necessário navegar pelo _terminal_ ao diretório desejado antes de executar os comandos.

``` bash
# instalar dependências
$ npm i # OU yarn

# servir em localhost
$ npm run dev
```

Enfatiza-se que, por se tratarem de projetos para demonstração em uma palestra, os códigos focam apenas em compilação para desenvolvimento, não devendo ser utilizados integralmente para soluções em produção.

## Explicação dos Exemplos

Embora os comandos para iniciar sejam equivalentes, cada um dos projetos possui muitas particularidades. De forma resumida, os exemplos de **1** a **4** apresentam a evolução da configuração de uma aplicação, conforme recomendações do [guia de SRR no Vue](https://ssr.vuejs.org/), enquanto o exemplo **5** demonstra solução equivalente utilizando o _framework_ [Nuxt.js](https://nuxtjs.org/).

### 1-ssr-server-only

Este projeto apresenta uma configuração básica com [express](http://expressjs.com/) e [vue-server-renderer](https://www.npmjs.com/package/vue-server-renderer), demonstrando como é simples gerar um HTML estático através do servidor, montado a partir de uma instância Vue. Entretanto, não possui interação no cliente!

### 2-ssr-not-universal

Este projeto estende a configuração básica anterior, demonstrando como é simples injetar um `<script>` no cliente, visando oferecer a interação desejada. Seria possível injetar qualquer coisa, como um trecho de código _jQuery_ (imagine o absurdo!). Neste caso, o exemplo utiliza uma cópia do seu próprio código Vue usado no servidor, replicado no arquivo para o cliente.

### 3-ssr-webpack

O exemplo anterior deixa evidente que precisamos de automatização para gerar as instâncias para o servidor e para o cliente, com os devidos ajustes, evitando construir um código exclusivo (ou duplicado) para cada camada da aplicação. Obviamente a solução passa por empacotadores (_module bundlers_), sendo o [Webpack](https://webpack.js.org/) a escolha natural. Tal compartilhamento de código é o que chamamos de **aplicação Universal**. Embora o Webpack possa ser assustador para iniciantes, este projeto apresenta uma configuração simplificada e comentada das configurações, para auxiliar a compreensão.

### 4-ssr-webpack-router

Incrementando o exemplo anterior, este projeto possui os ajustes necessários para integração com o [vue-router](https://router.vuejs.org/), tanto para a renderização da rota correta a partir do servidor, quanto para a navegação estilo _single page application_ no cliente. Este ponto é crucial, pois alguns desenvolvedores afirmam não utilizar SSR pois preferem SPA, ignorando que qualquer aplicação universal com _vue-router_ oferece navegação SPA por natureza.

### 5-ssr-nuxt

Este exemplo é brutalmente mais simples no código em relação aos anteriores, embora ofereça as mesmas funcionalidades (na verdade, oferece muito mais do que os exemplos anteriores puderam abordar). Graças ao _framework_ [Nuxt.js](https://nuxtjs.org/), temos uma solução de aplicação universal com suporte a [vue-router](https://router.vuejs.org/), [vuex](https://vuex.vuejs.org/) e _hot reloading_ em desenvolvimento, além de todas as otimizações necessárias para empacotar para produção. Vale ressaltar que foi utilizado o pacote [nuxt-edge](https://www.npmjs.com/package/nuxt-edge) para demonstrar a simplicidade de utilização da versão 2.0, que está próxima do lançamento.

## Licença

[MIT](./LICENSE)

Copyright &copy; 2018, Erick Eduardo Petrucelli
