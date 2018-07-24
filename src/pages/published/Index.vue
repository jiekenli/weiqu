<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content id="bgcon">
        <div class="top">
            <textarea placeholder="这一刻趣事..."></textarea>
            <div id="checkpic">
                <div class="pic"><img src="img/xhdpi/安卓 copy 4.png"></div>
                <div class="addPic" @click="checkpic"><img src="img/xhdpi/安卓 copy 4.png"></div>
            </div>
        </div>
        <div class="btn">
            <button id="publish">发表</button>
        </div>
    </app-content>
</div>
</template>
<script>
export default {
    data(){
        return{
            conten:{
                left:'发表',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false
            }
        }
    },
    methods:{
        checkpic(){
            this.$router.push('/addpic')
        }
    }
}
</script>
<style scoped>
#bgcon{
    background: #F1F1F1;
}
.top{
    margin-top: 0.1rem;
    width:100%;
    padding: 2.3% 4.2% 0 ;
    box-sizing: border-box;
    background: #fff;
}
::-webkit-input-placeholder{
    color: #D0D0D0;
}
textarea{
    height: 1.4rem;
    width: 100%;
    font-size: 0.15rem;
    color: #D0D0D0;
    border: none;
    overflow-y: auto;
    outline-style: none;
}
#checkpic{
    width: 100%;
    padding-bottom: 0.2rem;
}
.pic{
    display: inline-block;
    margin: 0.1rem;
    width: 0.6rem;
    height: 0.6rem;
}
.pic img,.addPic{
    width: 0.6rem;
    height: 0.6rem;
}
.addPic{
    display:inline-block;
    background: #F1F1F1 ;
    line-height: 0.6rem;
    text-align: center;
    vertical-align: top;
    margin: 0.1rem;
}
.addPic img{
    height: 0.26rem;
    width: 0.26rem;
    vertical-align: middle;
    display: inline-block;
}
.btn{
    width: 100%;
    text-align: center;
}
#publish{
    width: 2.6rem;
    height: 0.44rem;
    text-align: center;
    font-size: 0.15rem;
    color: #fff;
    border-radius: 0.5rem;
    line-height: 0.44rem;
    background: #60A7FF;
    margin-top:0.4rem;
    border: 0;
}
</style>