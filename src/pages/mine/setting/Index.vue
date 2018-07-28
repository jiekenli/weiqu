<template>
<div class="page bg1">
    <router-view></router-view>  
    <app-header :title="conten">
    </app-header>
    <app-content  id="pageContent">
       <ul class="mine-box">
           <li class="mine-box-item" @click="goAboutAction"><span>关于微趣</span><img src="img/xhdpi/right copy 48.png"></li>
           <li class="mine-box-item">
               <span>清除缓存</span>
               
                <img src="img/xhdpi/right copy 48.png">
                <i>25BM</i>
            </li>
       </ul>
        <button class="logOut" @click="logOut">退&nbsp;出</button>
    
    </app-content>
    
</div>
</template>
<script>
import Vuex from "vuex";
export default {
    data(){
        return{
            conten:{
                left:'设置',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            },
        }
    },
    methods:{
        goAboutAction(){
            this.$router.push({name:'about'})
        },
        logOut(){
             this.$store.dispatch("user/modifyUsername",'')
             this.$router.push('/')
        }
    }
}
</script>
<style scoped>
#setting{width:100%;height:100%;position:absolute;top:0;bottom:0; z-index: 2;background: #e1e1e1;}
.logOut{position:absolute;top:3rem;width:100%;height:0.48rem;font-size: 0.16rem;color:#f00;line-height: 0.48rem;text-align: center;display: block;outline:none;border:0;background:#fff;font-family: "微软雅黑"}
</style>