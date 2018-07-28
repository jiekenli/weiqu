<template>
<!-- 公共的头部 -->
<header class="app-header">
    <nav class="nav">
         <div v-if="arrowright" id="arrow" @click="gohome"><img src="img/xhdpi/安卓 copy 41.png"></div>
        <li v-if="showleft" class="nav-item" @click="navAction('recommended')">
            <span :class="{active: showFlag=='recommended'}">{{left}}</span>
        </li>
        <li v-if="rightshow" class="nav-item" @click="navAction('special')">
            <span :class="{active: showFlag=='special'}">{{right}}</span>
        </li>
        <div class="serch" @click="serch" v-if="searchshow"><img src="img/xhdpi/serch copy.png"></div>
        <div v-if="searchDetails" class="scrollSearch">
            <span class="searchwidch"><img src="img/xhdpi/serch copy.png"><input type="text"></span>
            <i class="scrollClose" @click="searchBack"><img class="close" src="img/xhdpi/安卓 copy 3.png"></i>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    props:["title"],
    // props:{
    //     title:Object
    // },
    data(){
        return{
            left:this.title.left,
            right:this.title.right,
            //判断搜索图标是否显示
            searchshow:this.title.show,

            // //判断heard左边的字是否显示
            showleft:this.title.showleft,

            // //判断heard右边的字是否显示
            rightshow:this.title.rightshow,

            //判断右边的箭头是否显示
            arrowright:this.title.arrowright,

            //判断是否显示搜索详情
            searchDetails:this.title.searchDetails,
            showFlag:'recommended'
        }
    },
    methods: {
        navAction(flag){
        //切换界面
        this.$pubsub.$emit('show-page',flag)
        this.showFlag = flag;
        },
        gohome(){
            this.$router.go(-1);
        },
        serch(){
            this.$router.push({
                //配置文件content中的name匹配值
                name: 'serch',
                // params: {
                //     flag
                // }
            })
        },
        searchBack(){
            this.$router.push('/homes')
        }
    },
    mounted(){
        // console.log('接收到')
        console.log(this.title.show,this.title.rightshow)
        // console.log(this.c)
    }
}
</script>
<style scoped>
.app-header{
    width: 100%;
    height: 0.48rem;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
}
.nav{
    display: flex;
    height: 0.48rem;
}
.nav .nav-item{
    flex: 1;
    margin-top:0.095rem;
    font-size: 0.18rem;
    box-sizing: border-box;
    text-align: center;
    font-weight: 600;
    color: #333333;
}
.serch{
    height: 0.48rem;
}
.serch img{
    margin-right: 0.21rem;
    margin-top: 0.12rem;
    height: 0.16rem;
    width: 0.16rem;
}
.nav-item span{
    padding-bottom: 0.02rem;
}
.nav .active{
    color: #68A2F7;
    border-bottom: 1px solid #68A2F7;
}
    /* 搜索按钮的样式 */
    /* 向左箭头图标的样式 */
    #arrow{
        position: absolute;
        left: 0;
        top:0;
        height: 0.48rem;
    }
    #arrow img{
        padding:0.16rem 0 0 0.16rem;
        display: block;
        height: 0.14rem;
        width: 0.14rem;
        vertical-align: middle;
    }
    /* 搜索详情头部的样式 */
    .scrollSearch{
        width: 100%;
        height: 0.48rem;
    }
    .scrollSearch img{
        display: inline-block;
    }
    .searchwidch{
        width: 2.99rem;
        height: 0.33rem;
        margin:0.075rem 0 0 0.15rem;
        display: inline-block;
        border-radius: 0.5rem;
        border: solid 1px #979797;
    }
    .searchwidch img{
        width: 0.26rem;
        height: 0.26rem;
        padding: 0.06rem;
    }
    .searchwidch input{
        display: inline-block;
        width: 2.4rem;
        border: none;
        outline: none;
        height: 0.33rem;
        vertical-align: top;
    }
    .close{
        vertical-align: top;
        margin-top: 0.127rem;
        height: 0.23rem;
        width: 0.23rem;
    }
    .scrollClose{
        height: 0.48rem;
        display: inline-block;
        vertical-align: top;
        width: 0.36rem;
    }
    /* 向左箭头图标的样式 */
        /* #arrow{
        position: absolute;
        left: 0.16rem;
        top:0.16rem;
        height: 0.14rem;
        width: 0.14rem;
    }
    #arrow img{
        height: 0.14rem;
        width: 0.14rem;
    } */
</style>
