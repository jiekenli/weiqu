<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
        <div>
            <div class="loginpic"><img src="img/xhdpi/loginpic.png"></div>
            <span>头像公用作为公开资料</span>
        </div>
        <ul>
            <li>昵称:<input type="text"></li>
            <li>性别：</li>
            <li>生日：</li>
            <li>个人简介：<input type="text"></li>
        </ul>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'编辑资料',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            }
        }
    }
}
</script>
<style scoped>
.loginpic{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: absolute;
    left: 0.15rem;
    top:1.77rem;
    background: #99C7FF;
}
.loginpic img{
    position: absolute;
    left: 0.05rem;
    top:0.08rem;
    height: 0.79rem;
    width: 0.91rem;
}
</style>