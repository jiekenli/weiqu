<template>
<div>
    <app-header :title="conten"></app-header>
    <app-content>
        <nav class="nav">
            <li class="nav-item" @click="navAction('all')">
                <span :class="{active: showFlag=='all'}">全部</span>
            </li>
            <li class="nav-item" @click="navAction('post')">
                <span :class="{active: showFlag=='post'}">帖子</span>
            </li>
            <li class="nav-item" @click="navAction('user')">
                <span :class="{active: showFlag=='user'}">用户</span>
            </li>
        </nav>
        <h1>搜索详情页</h1>
    
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'发表',
                show:false,
                rightshow:false,
                arrowright:false,
                showleft:false,
                searchDetails:true
            },
            showFlag:"all"
        }
    },
    methods:{
        navAction(flag){
            this.showFlag=flag
        }
    }
}
</script>
<style scoped>
    .nav{
    display: flex;
    height: 0.23rem;
    padding-top:0.13rem;
    background: #fff;
}
.nav .nav-item{
    flex: 1;
    font-size: 0.16rem;
    text-align: center;
    font-weight: 600;
    color: #333333;
}
.nav-item span{
    padding-bottom: 0.02rem;
}
.nav .active{
    color: #68A2F7;
    border-bottom: 1px solid #68A2F7;
}
</style>
