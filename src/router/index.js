import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../pages/home/Index.vue'
import focus from '../pages/focus/Index.vue'
import published from '../pages/published/Index.vue'

//消息页面相关路由
import message from '../pages/message/Index.vue'
import Release from '../pages/message/Release.vue'
import PostDetail from '../pages/message/PostDetail.vue'
import Chat from '../pages/message/Chat.vue'




import Mine from '../pages/mine/Index.vue'
import serch from '../pages/home/serch/serch.vue'

//发表页面相关路由
import addpic from '../pages/published/addpic/addpic.vue'

// 我的页面相关路由
import myRelease from '../pages/mine/myRelease/Index.vue'
import Collection from '../pages/mine/collection/Index.vue'
// import setting from '../pages/mine/setting/setting.vue'

import Recommended from '../pages/mine/recommended/Index.vue'
import Near from '../pages/mine/near/Index.vue'
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
import Agreement from "../pages/components/Agreement.vue"
import Affirm from "../pages/mine/setting/Affirm.vue"
import Disclaimer from "../pages/mine/setting/Disclaimer.vue"

//钱包页面相关路由
import Wallet from '../pages/mine/wallet/Index.vue'
import Recharge from '../pages/mine/wallet/Recharge.vue'
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
    //消息
    {
        name: 'message',
        path: '/message',
        component: message,
        //其他用户的所有发布
        children:[
			{
				name:'release',
				path:'/release',
				component:Release,
				//帖子详情
				children:[
					{
						name:'postdetail',
						path:'/postdetail',
						component:PostDetail
					}
				]
			},
			{	
				//聊天界面
				name:'chat',
				path:'/chat',
				component:Chat
			}
        ]
    },
    
    
    { name: 'mine',path: '/mine', component: Mine,
        children:[
            // 设置
            {name:'setting',path:'setting',component:Setting,
                children:[
                    {name:'about',path:'about',component:About,
                        children:[
                            {
                                name:'agreement',
                                path:'agreement',
                                component:Agreement},
                            {
                                name:'affirm',
                                path:'affirm',
                                component:Affirm
                            },
                            {
                                name:'disclaimer',
                                path:'disclaimer',
                                component:Disclaimer
                            },
                        ]
                    },
                ]
            },
            // 登录
            {name:"login",path:'login',component:Login,
                children:[
                    {
                        name:'loginAgreement',
                        path:'agreement',
                        component:Agreement
                    },
                ]
            },
            // 编辑头像
            {name:'editInformation',path:'editInformation',component:EditInformation},
            // 我的发布页面
            {name:'myRelease',path:'myRelease',component: myRelease},
            // 我的收藏
            {name: 'collection',path: 'collection',component: Collection},   
            // 钱包
            {name: 'wallet', path: 'wallet', component: Wallet,
                children:[
                    {
                        name: 'recharge',
                        path: 'recharge',
                        component: Recharge
                    },
                    {
                        name: 'gotomoney',
                        path: 'gotomoney',
                        component: gotomoney
                    },
                ]
            },
             // 推荐给伙伴
             {name: 'recommended', path: 'recommended',component: Recommended},
             // 附近的人
            { name: 'near',path: 'near', component: Near},
            // 帮助
            {name: 'help',path: 'help',component:Help,
                children:[
                    {
                        name: 'instructions',
                        path:'instructions',
                        component: Instructions},
                    { 
                        name: 'opinion',
                        path: 'opinion',
                        component: Opinion
                    }
                ]
            },
            // 审核管理
            { name:"audit",path:'audit',component:Audit},

        ]
},  
    {
        name: 'serch',
        path: '/serch',
        component: serch
    },
    {
        name: 'addpic',
        path: '/addpic',
        component: addpic
    },
    {
        path: '**',
        redirect: '/home'
    }

];

export default new Router({
    routes
})
