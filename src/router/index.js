import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['../pages/home/home.vue'], resolve)
const aboutUs = resolve => require(['../pages/aboutUs/aboutUs.vue'], resolve)

Vue.use(Router)

export default new Router({
    routes: 
    [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: aboutUs
        },
    ]
})