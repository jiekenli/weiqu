<template>
<div class="page bg1">
    <app-header :title="conten">
    </app-header>
    <app-content>
        <h1>我的收藏页面</h1>
    
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'我的收藏',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false
            }
        }
    }
}
</script>
<style scoped>
</style>