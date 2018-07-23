<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <h1>推荐给小伙伴页面</h1>
    
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'推荐给小伙伴',
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