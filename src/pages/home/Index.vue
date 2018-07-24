<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
    <ul class="list">
        <li class="item">
            <div class="top">
                <div class="head-img-wrap">
                    <span class="head-img">
                        <img src="../../../public/img/xhdpi/home-prc1.png">
                    </span>
                    <div class="top-middle">
                        <p class="title">微趣小可爱</p>
                        <p class="time">2018.03.02</p>
                    </div>
                </div>
                <div class="arrow-wrap " @click="tabAct">
                    <span class="iconfont icon-arrow-down"></span>
                    <ul class="tab-list" v-show="tabShow">
                        <li class="tab-line"></li>
                        <li class="tab-item">关注</li>
                        <li class="tab-item">我不感兴趣</li>
                    </ul>
                </div>
            </div> 
            <div class="text">
                lucky李乐祺，简直是化妆品狂魔啊！看见妈妈在化妆，眼睛一下就发光了哈哈哈！“妈妈我要这个粉饼口红睫毛！”lucky大名也曝光啦，叫李乐祺。lucky大名也曝光啦，叫李乐祺。
            </div>
            <ul class="img-list">
                <li class="img-item">
                    <img src="../../../public/img/xhdpi/home-prc1.png">
                </li>
                <li class="img-item">
                    <img src="../../../public/img/xhdpi/home-prc1.png">
                </li>
                <li class="img-item">
                    <img src="../../../public/img/xhdpi/home-prc1.png">
                </li>
            </ul>
            <ul class="btn-list">
                <li class="btn-item">
                    <span class="img">
                        <img src="../../../public/img/xhdpi/安卓 copy 37.png" alt="">
                    </span>
                    <span class="btn-text">520</span>
                    <span class="btn-line"></span>
                </li>
                <li class="btn-item">
                    <span class="img">
                        <img src="../../../public/img/xhdpi/安卓 copy 35.png" alt="">
                    </span>
                    <span class="btn-text">520</span>
                    <span class="btn-line"></span>
                </li>
                <li class="btn-item">
                    <span class="img">
                        <img src="../../../public/img/xhdpi/安卓 copy 7.png" alt="">
                    </span>
                    <span class="btn-text">520</span>
                    <span class="btn-line"></span>
                </li>
                <li class="btn-item">
                    <span class="img">
                        <img src="../../../public/img/xhdpi/安卓 copy 33.png" alt="">
                    </span>
                    <span class="btn-text">520</span>
                </li>
            </ul>
        </li>
    </ul>

    </app-content>
    <app-foot></app-foot>
</div>

</template>
<script>
export default {
    data(){
        return{
            t:'red',
            conten:{
                left:'推荐',
                right:'特别关注',
                show:true,
                rightshow:true,
                arrowright:false,
                showleft:true,
                searchDetails:false
            },
            tabShow: false
        }
    },
    methods: {
        tabAct () {
            this.tabShow = !this.tabShow;
        }
    },
    mounted () {

    }
}
</script>
<style scoped>
    .item {
        position:relative;
        padding-right: .16rem;
        padding-left: .16rem;
        margin-top: .1rem;
        background-color: #fff;
        width: 100%;
        box-sizing: border-box;
        padding-top: .1rem;
    }
    .arrow-wrap {
        position: relative;
    }
    .tab-list {
        position: absolute;
        width: .89rem;
        text-align: center;
        background: #FFFFFF;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        border: 1px solid #999999;
        right: 0.06rem;
        top: 78%;
    }
    .tab-item {
        height: .27rem;
        line-height: .27rem;
        font-family: PingFangSC-Regular;
        font-size: .12rem;
        color: #333333;
        letter-spacing: 0;
    }
    .tab-line {
        position: absolute;
        width: 100%;
        height: 1px;
        background: #999;
        opacity: 0.5;
        top: .27rem;
    }
    .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: .07rem;
    }
    .head-img-wrap {
        display: flex;
    }
    .head-img {
        width: .4rem;
        height: .4rem;
        margin-right: .08rem;
    }
    .head-img img {
        width: 100%;
        border-radius: 50%;
        height: 100%;
    }
    .text {
        font-family: PingFangSC-Regular;
        max-height: .6rem;
        line-height: .2rem;
        margin-bottom: .08rem;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .img-list {
        display: flex;

    }
    .img-item {
        flex: 1;
        width: 1.06rem;
        height: 1.06rem;
        margin-right: .05rem;
    }
    .img-item:last-child {
        margin-right: 0;
    }
    .img-item img {
        width: 100%;
        border-radius: .04rem;
    }
    .title {
        height: .2rem;
        line-height: .2rem;
        color: #333;
        font-family: PingFangSC-Regular;
    }
    .time {
        font-family: SourceSansPro-Regular;
        font-size: .12rem;
        color: #999;
    }
    .top .iconfont {
        font-size: .2rem;
        color: #979797;
        line-height: .4rem;
        margin-right: .06rem;
    }
    .btn-list {
        display: flex;
    }
    .btn-item {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-item .img {
        width: .2rem;
        margin-right: .04rem;
    }
    .btn-item .img img {
        width: 100%;
    }
    .btn-text {
        font-family: SourceSansPro-Regular;
        font-size: .12rem;
    }
    .btn-list {
        height: .16rem;
        line-height: .16rem;
        margin-top: .13rem;
        padding-bottom: .15rem;
    }
    .btn-line {
        position: absolute;
        right: 0;
        width: .01rem;
        height: .12rem;
        background-color: #979797;
    }
</style>

