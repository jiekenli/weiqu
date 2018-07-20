import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../pages/home/Index.vue'
import focus from '../pages/focus/Index.vue'
import published from '../pages/published/Index.vue'
import message from '../pages/message/Index.vue'
import Mine from '../pages/mine/Index.vue'
import serch from '../pages/home/serch/serch.vue'

// 我的页面相关路由
import myRelease from '../pages/mine/myRelease/myRelease.vue'
import collection from '../pages/mine/collection/collection.vue'
import setting from '../pages/mine/setting/setting.vue'
import wallet from '../pages/mine/wallet/wallet.vue'
import recommended from '../pages/mine/recommended/recommended.vue'
import near from '../pages/mine/near/near.vue'
import help from '../pages/mine/help/help.vue'
import audit from '../pages/mine/audit/audit.vue'
import gotoLogin from '../pages/mine/gotoLogin/gotoLogin.vue'
//钱包页面相关路由
import jupUp from '../pages/mine/wallet/jupUp/jupUp.vue'
import gotomoney from '../pages/mine/wallet/gotomoney/gotomoney.vue'

// 帮助页面路由
import instructions from '../pages/mine/help/instructions/instructions.vue'
import opinion from '../pages/mine/help/opinion/opinion.vue'
const routes = [
    {
        name: 'home',
        path: '/home',
        alias: '/homes',
        component: Home
    },
    {
        name: 'focus',
        path: '/focus',
        // alias: '/focus/:flag',
        // props: true,//将路径中的params的参数，作为组件Films的props属性
        component: focus
    },
    {
        name: 'published',
        path: '/published',
        component: published
    },
    {
        name: 'message',
        path: '/message',
        component: message
    },
    {
        name: 'mine',
        path: '/mine',
        component: Mine
    },
    {
        name: 'serch',
        path: '/serch',
        component: serch
    },
    {
        name: 'myRelease',
        path: '/myRelease',
        component: myRelease
    },
    {
        name: 'collection',
        path: '/collection',
        component: collection
    },
    {
        name: 'wallet',
        path: '/wallet',
        component: wallet
    },
    {
        name: 'recommended',
        path: '/recommended',
        component: recommended
    },
    {
        name: 'near',
        path: '/near',
        component: near
    },
    {
        name: 'help',
        path: '/help',
        component: help
    },
    {
        name: 'audit',
        path: '/audit',
        component: audit
    },
    {
        name: 'setting',
        path: '/setting',
        component: setting
    },
    {
        name: 'jupUp',
        path: '/jupUp',
        component: jupUp
    },
    {
        name: 'gotomoney',
        path: '/gotomoney',
        component: gotomoney
    },
    {
        name: 'instructions',
        path: '/instructions',
        component: instructions
    },
    {
        name: 'opinion',
        path: '/opinion',
        component: opinion
    },
    {
        name: 'gotoLogin',
        path: '/gotoLogin',
        component: gotoLogin
    },
    {
        path: '**',
        redirect: '/home'
    }

];

export default new Router({
    routes
})
