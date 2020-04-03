
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    // script: [
    //   { src: 'https://webglfundamentals.org/webgl/lessons/resources/three.min.js' }
    // ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Raleway&display=swap", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css?family=Orbitron&display=swap", rel: "stylesheet" }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/landing.sass',
    '~/assets/css/main.scss',
    '~/assets/css/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-kinesis'
  ],



  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api': {
      target: 'http://example.com',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
