<template>
<div class="pages bg1">
    <app-header :title="conten">
    </app-header>
    <app-content>
        <ul class="helpBox">
            <li v-for="(item,i) in list" :key="i" @click="helpAction(item.name)">
                <img :src="item.imgSrc">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'帮助/反馈',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            },
            list:[
                {title:'使用说明',imgSrc:'img/xhdpi/安卓 copy 52.png',name:'instructions'},
                {title:'意见反馈',imgSrc:'img/xhdpi/安卓 copy 53.png',name:'opinion'}
            ]
        }
    },
    methods:{
       helpAction(name){
           this.$router.push({name})
       }
    }
}
</script>
<style scoped>
.helpBox{margin:.065rem .15rem 0;display:flex; justify-content: space-between}
.helpBox li{height:2.rem;width:1.625rem;background:#fff;box-sizing: border-box;padding:.595rem 0 ;text-align: center;}
.helpBox img{width:.5rem;height:0.5rem;margin: 0 auto;}
.helpBox p{font-size: .16rem;color:#424242;padding-top:.15rem;}
</style>