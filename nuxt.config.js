var webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'postgraph',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [ '@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  /* serverMiddeware: [
    { path: '/', handler: require('./api-proxy.js')() },
  ], */
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isServer }) {
      var graphqlEndpoint;
      
      if (isDev) {
        if(isServer) {
          graphqlEndpoint = process.env.INTERNAL_GRAPHQL;
        } else {
          graphqlEndpoint = process.env.EXTERNAL_GRAPHQL;
        }

        config.plugins = config.plugins || [];
        config.plugins.push(new webpack.DefinePlugin({GRAPHQL_ENDPOINT:JSON.stringify(graphqlEndpoint)}));
      }
    } 
  }
}
