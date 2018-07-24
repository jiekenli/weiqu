<template>
<div>
    <app-header :title="conten" id="myRelease">
    </app-header>
    <app-content>
        <h1>我的发布页面</h1>
    
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'我的发布',
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
/* #myRelease{background:#fff;width:100%;height:100%;z-index: 6} */
</style>