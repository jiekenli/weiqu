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
import myRelease from '../pages/mine/myRelease/Index.vue'
import collection from '../pages/mine/collection/collection.vue'
// import setting from '../pages/mine/setting/setting.vue'
import wallet from '../pages/mine/wallet/Index.vue'
import recommended from '../pages/mine/recommended/recommended.vue'
import near from '../pages/mine/near/near.vue'
// 帮助页面路由
import Help from '../pages/mine/help/Index.vue';
import Instructions from '../pages/mine/help/Instructions.vue';
import Opinion from '../pages/mine/help/Opinion.vue';
// 审核
import Audit from '../pages/mine/audit/Index.vue';

import EditInformation from '../pages/mine/login/EditInformation.vue'
import Login from "../pages/mine/login/Index.vue"
import Register from "../pages/mine/login/Register.vue";
//设置
import Setting from "../pages/mine/setting/Index.vue"
import About from "../pages/mine/setting/About.vue"
import Agreement from "../pages/mine/setting/Agreement.vue"
import Affirm from "../pages/mine/setting/Affirm.vue"
import Disclaimer from "../pages/mine/setting/Disclaimer.vue"


//钱包页面相关路由
import jupUp from '../pages/mine/wallet/jupUp.vue'
import gotomoney from '../pages/mine/wallet/gotomoney.vue'


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
    { name: 'mine',path: '/mine', component: Mine,
        children:[
            // {name:'setting',path:'setting',component:Setting},
        ]
},
    {name:'register',path:'/register',component:Register},
    {name:"login",path:'/login',component:Login},
    {name:'setting',path:'/setting',component:Setting,},
    {name:'agreement',path:'/agreement',component:Agreement},
    {name:'about',path:'about',component:About,},
    {name:'affirm',path:'/affirm',component:Affirm},
    {name:'disclaimer',path:'/disclaimer',component:Disclaimer},
    {name:'editInformation',path:'/editInformation',component:EditInformation},
    
    {name:'myRelease',path:'/myRelease',component: myRelease},
// 帮助页面
    {name: 'help',path: '/help',component:  Help},
    {name: 'instructions',path: '/instructions',component: Instructions},
    { name: 'opinion',path: '/opinion',component: Opinion},
    // 审核
    { name:"audit",path:'/audit',component:Audit},

    {
        name: 'serch',
        path: '/serch',
        component: serch
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
    // {
    //     name: 'setting',
    //     path: '/setting',
    //     component: setting
    // },
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
        path: '**',
        redirect: '/home'
    }

];

export default new Router({
    routes
})
