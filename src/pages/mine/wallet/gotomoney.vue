<template>
<div class="pages bg1">
    <app-header :title="conten">
    </app-header>
    <app-content  id="pageContent">
        <h1>提现页面</h1>
    
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'提现',
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