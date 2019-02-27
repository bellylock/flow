const pkg = require('./package');

module.exports = {
    // mode: 'universal',
    mode: 'production',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            // {rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_637415_ejwyif9aum.css'},
        ],
        script: [
            // { src: '//at.alicdn.com/t/font_637415_ejwyif9aum.js' }
        ],
    },

    entry:{
        app:'babel-polyfill',
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        'iview/dist/styles/iview.css',
        '@/assets/style/main.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/iview', ssr: true }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios'
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    router: {
        linkActiveClass: 'active-link'
    },
    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
};
