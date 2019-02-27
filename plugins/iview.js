import Vue from 'vue';
import iView from 'iview';
import Router from 'vue-router';
import Clipboard from 'vue-clipboard2';
import 'babel-polyfill'

Vue.use(iView);
Vue.use(Router);
Vue.use(Clipboard);

export default new Router({
    routes:[
        {
            path:'/',
            name:'index'
        },
        {
            path:'/help',
            name:'help'
        },
        {
            path:'/logo',
            name:'logo'
        },
        {
            path:'/register',
            name:'register'
        },
        {
            path:"/answer",
            name:"answer"
        },
        {
            path:"/helpCenter",
            name:'hc',
            children:[
                {
                    path:'/order',
                    name:'order'
                },
                {
                    path:'/security',
                    name:'security'
                },
                {
                    path:'/finance',
                    name:'finance'
                },
                {
                    path:'/distributor',
                    name:'distributor'
                }
            ]
        },

    ]
})

