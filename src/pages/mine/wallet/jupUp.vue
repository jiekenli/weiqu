<template>
<div class="pages">
    <app-header :title="conten" >
    </app-header>
    <app-content class="pageContent">
        <ul class="types">
            <li v-for="(item,i) in typesLise" :key="i" :class="{active:isShow==i}" @click="typesAction(i)">{{item}}</li>
        </ul>
        <ul class="types-item">
            <li>
                <p class="title">充值金额</p>
                <span class="tips">￥</span>
                <input type="text" class="num">
            </li>
            <li><button class="nextBtn">下一步</button></li>
        </ul>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'充值',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:3
            },
            typesLise:['微信','支付宝'],
            isShow:-1,
        }
    },
    methods:{
        typesAction(i){
            this.isShow=i
        }
    }
}
</script>
<style scoped>
.types{margin:0.1rem  0.15rem 0;background:#fafafa;box-sizing: border-box;display:flex;}
.types li{margin:0 0.05rem;flex:1;height:0.5rem;text-align: center;line-height: 0.5rem;font-size:0.14rem;color:#333}
.types li.active{color:rgb(61, 82, 109) 92, 121);background: url('../../../../public/img/xhdpi//安卓 copy 8.png') no-repeat right 0.28rem;background-size: 0.16rem 0.16rem;}
.types-item{padding:0 0.15rem;background:#fff;margin:0 0.16rem;}
.types-item li{height:1.06rem;box-sizing: border-box;position: relative;}
.types-item .title{color:#333;font-size: 0.14rem;line-height: 0.2rem;padding:0.1rem 0;}
.types-item .num{margin:0.1rem 0 0.115rem;width:100%;position: relative;border:0;height:0.335rem;line-height: 0.335rem;}
.types-item .tips{border-bottom: 1px solid #ccc;position: absolute;bottom:-0.115rem;left:0;line-height: 0.335rem;font-size:0.34rem;position: absolute;bottom: 0.115rem; }
.nextBtn{height:0.49rem;width: 100%;background:#60A7FF;font-size:0.14rem;color:#fff;margin-top:0.28rem; }
</style>