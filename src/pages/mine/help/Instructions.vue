<template>
<div class="pages bg1">
    <app-header :title="conten">
    </app-header>
    <app-content>
        <p class="detail">具体使用说明文档</p>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'使用说明',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:2
            }
        }
    }
}
</script>
<style scoped>
.detail{margin:.065rem .15rem;background:#fff;padding:.17rem .08rem;color:#424242;font-size:.15rem;line-height:.175rem;box-sizing: border-box;}
</style>