<template>
<div id="pages">
    <app-header :title="conten" >
    </app-header>
    <div @click="jupUp" class="up">充值</div>
    <app-content>
        <div class="money"><span>余额</span><i>10.00</i></div>
        <div class="money" @click="gotomoney">
            <span>提现</span>
            <img src="img/xhdpi/right copy 48.png">
        </div>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'我的钱包',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            }
        }
    },
    methods:{
        jupUp(){
            this.$router.push('/jupUp')
        },
        gotomoney(){
            this.$router.push('/gotomoney')
        }
    }
}
</script>
<style scoped>

.up{
    position: absolute;
    top:0.13rem;
    right: 0.15rem;
    color: #424242;
    font-size: 0.14rem;
}
.money{
    margin: 0.1rem 0 0.1rem 0.15rem;
    width: 3.3rem;
    padding:0.385rem 0.135rem 0.38rem 0.16rem;
    line-height: 0.16rem;
    background: #fff;box-sizing: border-box;
}
.money i{float:right;color:#f6b13e;}
.money img{
    float: right;
    width:0.16rem;height:0.16rem;
}

</style>