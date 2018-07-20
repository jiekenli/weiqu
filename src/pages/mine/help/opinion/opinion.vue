<template>
<div>
    <app-header :title="conten">
    </app-header>
    <div @click="jupUp" class="up">提交</div>
    <app-content>
        <textarea cols="30" rows="10"></textarea>
        <input type="number" placeholder="请输入你的手机号码">
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'意见反馈',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:2
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
textarea{
    display: inline-block;
    margin-top:0.12rem;
    margin-left: 0.15rem;
    width: 3.3rem;
    height: 2rem;
    border: none;
    outline: none;
}
input{
    margin-top:0.12rem;
    margin-left: 0.15rem;
    width: 3.3rem;
    height: 0.48rem;
    color: #999999;
    font-size: 0.14rem;
    border: none;
    outline: none;
}
</style>