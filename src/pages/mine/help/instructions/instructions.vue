<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <h1>使用说明页面</h1>
    
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
</style>