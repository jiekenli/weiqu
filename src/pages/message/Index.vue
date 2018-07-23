<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <h1>消息</h1>
    
    </app-content>
</div>

</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'通知',
                right:'私信',
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