<template>
<div>
    <app-content id="mycontent">
        <div id="mytop">
            <div id="scrollSet" @click="juptoSet"><img src="img/xhdpi/安卓 copy 10.png"></div>
        </div>
        <div id="login">
            <div class="loginpic" @click="gotoLogin"><img src="img/xhdpi/loginpic.png"></div>
            <div class="noLogin">未登录</div>
            <div class="click">点击头像登录</div>
        </div>
        <div class="app-nav">
            <nav class="nav">
                <li class="nav-item" v-for="(navItem, index) in navList" :key="index"
                    @click="changePageAction(navItem.path)">
                    <img :src="navItem.picsrc">
                    {{navItem.title}}
                    <img class="goto" src="img/xhdpi/right copy 48.png">
                </li>
            </nav>
        </div>
    </app-content>
<div>
    <app-foot></app-foot>
</div>
</div>

</template>
<script>
export default {
    data(){
        return{
            navList: [
                {title: '我的发布', path:'/myRelease',picsrc:'img/xhdpi/release copy.png'},
                {title: '我的收藏', path:'/collection',picsrc:'img/xhdpi/安卓 copy 43.png'},
                {title: '钱包', path:'/wallet',picsrc:'img/xhdpi/安卓 copy 44.png'},
                {title: '推荐给小伙伴', path:'/recommended',picsrc:'img/xhdpi/安卓 copy 45.png'},
                {title: '附件的人', path:'/near',picsrc:'img/xhdpi/安卓 copy 46.png'},
                {title: '帮助/反馈', path:'/help',picsrc:'img/xhdpi/安卓 copy 47.png'},
                {title: '审核管理', path:'/audit',picsrc:'img/xhdpi/安卓 copy 48.png'}
            ]
        }
    },
    methods:{
        juptoSet(){
            this.$router.push('/setting')
        },
        gotoLogin(){
            this.$router.push('/gotoLogin')
        },
        changePageAction(path){
            console.log(path)
            console.log('点击了');
            this.$router.push(path);
        }
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
    }
    #mytop img{
        width: 0.16rem;
        height: 0.16rem;
    }
    #scrollSet{
        position: absolute;
        left: 3.26rem;
        top: 0.18rem;
    }
    /* 下边列表的样式 */
    .nav img{
    display: inline-block;
    margin-top:0.14rem;
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
}

.nav-item .goto{
    font-size: 12px;
    float: right;
}
/* 中间登录样式 */
#login{
    background: #fff;
    height: 0.82rem;
}
.loginpic{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: absolute;
    left: 0.15rem;
    top:1.77rem;
    background: #99C7FF;
}
.loginpic img{
    position: absolute;
    left: 0.05rem;
    top:0.08rem;
    height: 0.79rem;
    width: 0.91rem;
}
.noLogin{
    margin: 0.02rem 0 0.05rem 1.25rem;
    color: #424242;
    font-size: 0.15rem;
}
.click{
    color: #999999;
    font-size: 0.12rem;
    margin-left: 1.25rem;
}
</style>

