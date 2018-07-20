<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <h1>充值页面</h1>
    
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
            }
        }
    }
}
</script>
<style scoped>
</style>