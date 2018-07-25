<template>
<div class="page bg1">
    <app-header :title="conten">
    </app-header>
    <app-content>
        <div @click="jupUp" class="up">充值</div>
        <h1>附近的人页面</h1>
    
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'附近的人',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false
            }
        }
    },
    methods:{
        jupUp(){
            
        }
    }
}
</script>
<style scoped>
.up{
    position: absolute;
    top:0.12rem;
    right: 0.23rem;
    color: #333;
    font-size: 0.16rem;
}
</style>