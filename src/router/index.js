import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['../pages/home/home.vue'], resolve)
const aboutUs = resolve => require(['../pages/aboutUs/aboutUs.vue'], resolve)
const coreTeam = resolve => require(['../pages/coreTeam/coreTeam.vue'], resolve)
const investment = resolve => require(['../pages/investment/investment.vue'], resolve)
const investmentDetail = resolve => require(['../pages/investmentDetail/investmentDetail.vue'], resolve)
const cooperation = resolve => require(['../pages/cooperation/cooperation.vue'], resolve)

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
        {
            path: '/coreTeam',
            name: 'coreTeam',
            component: coreTeam
        },
        {
            path: '/investment',
            name: 'investment',
            component: investment
        },
        {
            path: '/investmentDetail',
            name: 'investmentDetail',
            component: investmentDetail
        },
        {
            path: '/cooperation',
            name: 'cooperation',
            component: cooperation
        },
    ]
})