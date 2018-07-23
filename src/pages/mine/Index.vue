<template>


    
    <app-content id="mycontent">
        <div id="mytop">
            <!-- <div id="scrollSet" @click="juptoSet"><img src="img/xhdpi/安卓 copy 10.png"></div> -->
            <div id="scrollSet" @click="goSettingAction" ><img src="img/xhdpi/安卓 copy 10.png"></div>
        </div>
        <div id="login">
            <!-- <div class="loginpic" @click="gotoLogin"><img src="img/xhdpi/loginpic.png"></div> -->
            <!-- <div v-if="login" class="loginTop">
                <div class="loginpic"  @click="goEditInformationAction"><img src="img/xhdpi/loginpic.png"></div> -->
             <!-- 有用户登录 -->
            <dl v-if="login"  class="loginTop">
                <dt @click="goEditInformationAction">
                    <img src="img/xhdpi/headerImg.png" class="noLoginImg"></dt>
                <dd>
                    <p class="title">{{username}}
                         <img src="img/xhdpi/安卓 copy 38.png" class="sexImg" >
                    </p>
                    <p class="tips">小可爱啊</p>
                </dd>
            </dl>
            <!-- 未登录 -->
            <dl v-if="noLogin"  class="loginTop">
                <dt @click="goLoginAction">
                    <img src="img/xhdpi/headerImg.png" class="noLoginImg"></dt>
                <dd>
                    <p class="title">未登录</p>
                    <p class="tips">点击头像登录</p>
                </dd>
            </dl>
        </div>
        <!-- <div class="app-nav"> -->
            <ul class="nav">
                <!-- <li class="nav-item" v-for="(navItem, index) in navList" :key="index"
                    @click="changePageAction(navItem.path)"> -->
                     <li class="nav-item" v-for="(navItem, index) in navList" :key="index" @click="changePageAction(navItem.path)"
                  >
                    <img :src="navItem.picsrc" class="img">
                    <span>{{navItem.title}}</span>
                    <img class="goto" src="img/xhdpi/right copy 48.png">
                </li>
            </ul>
        <!-- </div>  -->
    </app-content>
   <!-- <app-foot></app-foot> -->

</template>
<script>
import Vuex from 'vuex';
export default {
    data(){
        return{
            noLogin:false,
            navList: [
                {title: '我的发布', path:'myRelease',picsrc:'img/xhdpi/release copy.png'},
                {title: '我的收藏', path:'collection',picsrc:'img/xhdpi/安卓 copy 43.png'},
                {title: '钱包', path:'wallet',picsrc:'img/xhdpi/安卓 copy 44.png'},
                {title: '推荐给小伙伴', path:'recommended',picsrc:'img/xhdpi/安卓 copy 45.png'},
                {title: '附件的人', path:'near',picsrc:'img/xhdpi/安卓 copy 46.png'},
                {title: '帮助/反馈', path:'help',picsrc:'img/xhdpi/安卓 copy 47.png'},
                {title: '审核管理', path:'audit',picsrc:'img/xhdpi/安卓 copy 48.png'}
            ]
        }
    },
    computed:{  
        ...Vuex.mapGetters({
            login:"isLogin"}),
        ...Vuex.mapState({
            username:(state)=>{
                return state.user.username
            }
        })
    },
    methods:{
        // 点击登录页面
        goLoginAction(){
            this.$router.push({name:'login'})
        },
        //点击头像进入修改资料页面
        goEditInformationAction(){
            this.$router.push({name:'editInformation'})
        },
        // 点击进入设置页面
        goSettingAction(){
            this.$router.push({name:'setting'})
        },
        // 点击进入我的相关页面
        changePageAction(name){
            this.$router.push({name:name})
        }
        // juptoSet(){
        //     this.$router.push('/setting')
        // },
        // gotoLogin(){
        //     this.$router.push('/gotoLogin')
        // },
        // changePageAction(path){
        //     console.log(path)
        //     console.log('点击了');
        //     this.$router.push(path);
        // }
    },
    mounted(){
        this.noLogin = !this.login;
       console.log(this.noLogin,this.login)
       console.log(this.login,this.username)
    }
}
</script>
<style scoped>
    #mycontent{
        position: absolute;
        left: 0;
        top: 0;
        background: #cccccc;
    }
    #mytop{
        height: 2.07rem;
        width: 100%;
        background: url('/img/xhdpi/mybackground.png') no-repeat;
        background-size: 100% 2.07rem;
        /* position: relative; */
    }
    /* #mytop img{
        width: 0.16rem;
        height: 0.16rem;
    } */
    #scrollSet{
        position: absolute;
        right:0.08rem;
        top: 0.18rem;
    }
    #scrollSet img{width: 0.345rem;height: 0.345rem;}
    /* 下边列表的样式 */
    .nav img{
    display: inline-block;
    
    }
    .nav{
    width: 100%;
    position: absolute;
    top: 2.89rem;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background: #fff;
}
.nav-item{
    height: 0.46rem;
    line-height: 0.46rem;
    border-bottom: 1px dotted #979797;
    color: #333333; 
    padding: 0 0.15rem;
    font-size: 0.15rem;
    vertical-align: middle;
    background:#fff;
}
/* 中间登录样式 */
#login{
    background: #f5f5f5;
    height: 0.82rem;
    position: relative;
}
.loginTop{position:absolute;top:-0.3rem;width:100%;left:0;padding-left:0.15rem;box-sizing: border-box;display: flex;}
.loginTop dt{width:1rem;height: 1rem;border-radius: 50%;background:#99C7FF;position: relative; }
.loginTop dt .noLoginImg{width:1rem;height:1rem;border-radius: 50%;}
.loginTop dt .loginImg{width:100%;border-radius: 50%;}
.loginTop dd{flex: 1;padding-left:0.14rem;box-sizing: border-box;}
.loginTop dd .title{color: #424242;  font-size: 0.15rem;
 line-height:.21rem;margin-top:0.32rem;   font-weight:500; vertical-align:middle;}
 .sexImg{ width:0.18rem; margin-left:0.1rem; vertical-align:middle;
    height:0.18rem; display: inline-block;}
.loginTop dd .tips{ color: #999999;margin-top:0.05rem; font-size: 0.11rem;}

.nav-item .img{width:0.2rem;height:0.2rem;vertical-align: middle;margin-right:0.1rem;}
.nav-item span{vertical-align: middle;height:100%;}

.nav-item .goto{
    font-size: 12px;
    float: right;
    width:0.15rem;
    height:0.15rem;
    padding-top:0.15rem;
}
/*
.loginpic{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: absolute;
    left: 0.15rem;
    top:1.77rem;
     background: #99C7FF; 
    background:#fff;
}
.loginpic img{
    position: absolute;
    left: 0.05rem;
    top:0.08rem;
    height: 0.79rem;
    width: 0.91rem;
}
/*
/* .noLogin{
    margin: 0 0 0.05rem 1.25rem;
    padding-top:0.02rem;
   
} */
/* .noLogin .title{ color: #424242;
    font-size: 0.15rem;
    line-height:.21rem;  
    font-weight:500;
    vertical-align:middle;} */

/* .click{
    color: #999999;
    font-size: 0.11rem;
     margin-left: 1.25rem; 
} */
 .app-nav{
        /* overflow: auto; */
        /* margin-bottom: 0.61rem; */
        /* height: 2.9rem; */
        width:100%;
    }
.nav{
    width: 100%;
    /* height: 100%; */
    /* margin: auto; */
    overflow: auto;
    height: 2.9rem;
    /* position:relative; */
    /* box-sizing: border-box; */
}

</style>

