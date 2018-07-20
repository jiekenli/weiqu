<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <div class="instructions" @click="instructions">
            <img src="img/xhdpi/安卓 copy 52.png">
            <span>使用说明</span>
        </div>
        <div class="opinion" @click="opinion">
            <img src="img/xhdpi/安卓 copy 53.png">
            <span>意见反馈</span>
        </div>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'帮助/反馈',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            }
        }
    },
    methods:{
        instructions(){
            this.$router.push('/instructions')
        },
        opinion(){
            this.$router.push('/opinion')
        }
    }
}
</script>
<style scoped>
.instructions{
    margin: 0.11rem 0.05rem 0 0.15rem;
    float: left;
    width: 1.62rem;
    height: 2rem;
    background: #fff;
}
.instructions img{
    margin-top: 0.6rem;
    margin-left: 0.56rem;
    width: 0.5rem;
    height: 0.5rem;
}
span{
    width: 100%;
    display: inline-block;
    text-align: center;
}
.opinion img{
    margin-top: 0.6rem;
    margin-left: 0.61rem;
    width: 0.4rem;
    height: 0.48rem;
}
.opinion{
    float: left;
    margin-top: 0.11rem;
    width: 1.62rem;
    height: 2rem;
    background: #fff;
}
</style>