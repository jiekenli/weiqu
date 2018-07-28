<template>
<div class="filter" ref="filter" v-show="isShow">
    <transition name="fade">
        <div class="cover"  @click="discoverAction" v-show="isShow"></div>
    </transition>
    <transition name="silde">
        <div class="filterCon" v-show="isShow">
            <slot></slot>
        </div>
    </transition>
   
</div>
</template>
<script>
export default {
    data(){
        return{
             isShow:false
        }
    },
    methods:{
        discoverAction(){
            this.isShow=false;
            console.log("dianjil ")
        }
    },
    mounted(){
        this.$pubsub.$on("show-con",()=>{
            // this.isShow=true
        })
         
    }
   
}
</script>
<style scoped>
.filter{position:absolute;top:0;bottom: 0;left:0;width:100%;background:rgba(0,0,0,0.7);z-index: 100;}
.cover{position: absolute;left:0;top:0;width:100%;height:100%;z-index: 1;}
.filterCon{position: absolute;height:3rem;width:3.29rem;background:#fff;z-index: 3;}

@keyframes fadeIn {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
@keyframes fadeOut {
    0%{opacity: 1;}
    100%{opacity: 0;}
}
.fade-enter-active{
    animation: fadeIn 400ms;
}
.fade-leave-active{
    animation: fadeOut 400ms;
}
@keyframes slideIn {
    0%{transform: translateX(100%);}
    100%{transform: translateX(3rem);}
}
@keyframes slideOut {
    0%{transform: translateX(3rem);}
    100%{transform: translateX(100%);}
}
.slide-enter-active{
    animation: slideIn 300ms;
}
.slide-leave-active{
    animation: slideOut 300ms;
}
</style>
