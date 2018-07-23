<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <h1>关注</h1>
    
    </app-content>
</div>

</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'推荐',
                right:'关注的人',
                show:false,
                rightshow:true,
                arrowright:false,
                showleft:true,
                searchDetails:false
            }
        }
    }
}
</script>