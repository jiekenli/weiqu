<template>
<div>
    <!-- <router-view></router-view> -->
<div class="pages bg1">
    <app-header :title="conten">
    </app-header>
    <app-content id="pageContent">
        <div class="about-top">
            <img src="img/xhdpi/安卓 copy 16.png" />
            <p>v 1.0</p>
        </div>
       <ul class="mine-box">
           <li class="mine-box-item" v-for="item in aboutList" :key="item.title" @click="goAboutListAction(item.name)"><span>{{item.title}}</span><img  src="img/xhdpi/right copy 48.png"></li>
       </ul>

    </app-content>
</div>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'关于微趣',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            },
            aboutList:[
                {title:'用户协议',name:'agreement'},
                {title:'隐私权申明',name:'affirm'},
                {title:'免责申明',name:'disclaimer'}
            ]
        }
    },
    methods:{
        goAboutListAction(name){
            this.$router.push({name})
        }
    }
}
</script>
<style scoped>
.about-top{height:1.5rem;background: #fff;padding-top:0.235rem;box-sizing: border-box;    margin-top: 0.09rem;}
.about-top img{width:0.81rem;height:0.81rem;margin:0 auto;background:#99C7FF;}
.about-top p{font-size: 0.16rem;line-height: 0.3rem;text-align: center;margin-top: 0.03rem;color:#4a4a4a;}
.logOut{position:absolute;top:3rem;width:100%;height:0.48rem;font-size: 0.16rem;color:#f00;line-height: 0.48rem;text-align: center;display: block;outline:none;border:0;background:#fff;font-family: "微软雅黑"}
</style>