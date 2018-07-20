<template>
    <nav class="tabs">
        <div id="scroll"></div>
        <li class="tab" v-for="(navItem, index) in navList" :key="index"
            @click="changePageAction(navItem.path,index)">
            <img :src="selectIndex===index?navItem.nextpicsrc:navItem.picsrc">
            {{navItem.title}}
        </li>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            selectIndex:0,
            navList: [
                {title: '首页', path:'/home',picsrc:'img/xhdpi/安卓 copy的副本.png',nextpicsrc:'img/xhdpi/安卓 copy 16.png'},
                {title: '关注', path:'/focus',picsrc:'img/xhdpi/安卓 copy 27.png',nextpicsrc:'img/xhdpi/安卓 copy 22.png'},
                {title: '', path:'/published',picsrc:'img/xhdpi/安卓 copy 31.png',nextpicsrc:'img/xhdpi/安卓 copy 31.png'},
                {title: '消息', path:'/message',picsrc:'img/xhdpi/安卓 copy 29.png',nextpicsrc:'img/xhdpi/安卓 copy 26.png'},
                {title: '我', path:'/mine',picsrc:'img/xhdpi/安卓 copy 28.png',nextpicsrc:'img/xhdpi/安卓 copy 25.png'}
            ]
        }
    },
    methods:{
        changePageAction(path,index){
            this.selectIndex=index;
            console.log(this.selectIndex);
            this.$router.push(path);
        }
    }
}
</script>
<style scoped>
    #scroll{
        width: 0.6rem;
        height: 0.6rem;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 1.5rem;
        bottom: 0.11rem;
        z-index: 0;
    }
    .tabs{
    position: absolute;
	left: 0;
	bottom: -0.02rem;
	height: 0.61rem;
	width: 100%;
	background: #FFFFFF;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
    .tabs .tab{
        display: flex;
        height: 100%;
        width: 100%;
        z-index: 1;
        font-size: 0.1rem;
        color: #5f646e;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    .tabs .tab img{
        display: inline-block;
        text-align: center;
        margin-bottom: 0.05rem;
    }
    .tabs .tab:nth-of-type(1) img{
        width: 0.3rem;
        height: 0.26rem;
    }
    .tabs .tab:nth-of-type(2) img{
        width: 0.25rem;
        height: 0.21rem;
    }
    .tabs .tab:nth-of-type(3) img{
        width: 0.4rem;
        height: 0.4rem;
    }
    .tabs .tab:nth-of-type(4) img{
        width: 0.2rem;
        height: 0.17rem;
    }
    .tabs .tab:nth-of-type(5) img{
        width: 0.22rem;
        height: 0.19rem;
    }
</style>