<template>
<div>
    <app-header :title="conten">
    </app-header>
    <div @click="jupUp" class="up">完成</div>
    <app-content>
        <div>
            
        </div>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'照片',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false
            }
        }
    },
    methods:{
        jupUp(){
            this.$router.push('/published')
        }
    }
}
</script>