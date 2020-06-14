import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['../pages/home/home.vue'], resolve)
const aboutUs = resolve => require(['../pages/aboutUs/aboutUs.vue'], resolve)
const coreTeam = resolve => require(['../pages/coreTeam/coreTeam.vue'], resolve)
const investment = resolve => require(['../pages/investment/investment.vue'], resolve)
const cooperation = resolve => require(['../pages/cooperation/cooperation.vue'], resolve)
const investmentDetail = resolve => require(['../pages/investmentDetail/investmentDetail.vue'], resolve)
const investmentDetail2 = resolve => require(['../pages/investmentDetail2/investmentDetail.vue'], resolve)
const investmentDetail3 = resolve => require(['../pages/investmentDetail3/investmentDetail.vue'], resolve)
const investmentDetail4 = resolve => require(['../pages/investmentDetail4/investmentDetail.vue'], resolve)
const investmentDetail5 = resolve => require(['../pages/investmentDetail5/investmentDetail.vue'], resolve)
const investmentDetail6 = resolve => require(['../pages/investmentDetail6/investmentDetail.vue'], resolve)
const investmentDetail7 = resolve => require(['../pages/investmentDetail7/investmentDetail.vue'], resolve)
const investmentDetail8 = resolve => require(['../pages/investmentDetail8/investmentDetail.vue'], resolve)
const investmentDetail9 = resolve => require(['../pages/investmentDetail9/investmentDetail.vue'], resolve)

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
            path: '/cooperation',
            name: 'cooperation',
            component: cooperation
        },
        {
            path: '/investmentDetail',
            name: 'investmentDetail',
            component: investmentDetail
        },
        {
            path: '/investmentDetail2',
            name: 'investmentDetail2',
            component: investmentDetail2
        },
        {
            path: '/investmentDetail3',
            name: 'investmentDetail3',
            component: investmentDetail3
        },
        {
            path: '/investmentDetail4',
            name: 'investmentDetail4',
            component: investmentDetail4
        },
        {
            path: '/investmentDetail5',
            name: 'investmentDetail5',
            component: investmentDetail5
        },
        {
            path: '/investmentDetail6',
            name: 'investmentDetail6',
            component: investmentDetail6
        },
        {
            path: '/investmentDetail7',
            name: 'investmentDetail7',
            component: investmentDetail7
        },
        {
            path: '/investmentDetail8',
            name: 'investmentDetail8',
            component: investmentDetail8
        },
        {
            path: '/investmentDetail9',
            name: 'investmentDetail9',
            component: investmentDetail9
        },
    ]
})