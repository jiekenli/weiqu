<template>
<div class="content" ref="content">
    <div>
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    props: {
        //判断哪个页面需要滚动,执行下拉加载的标识,true为需要
        reciveScroll: Boolean
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        let scroll = new IScroll(this.$refs.content, {
            //触发滚动事件的频率,1为慢,2为正常,3为快(一般用三)
            probeType: 3
        });
        // this.scroll = scroll;
        // console.log('创建滚动视图');

        //滚动开始前,都识别最新高度
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        });

        if(this.reciveScroll){
            //外部调用时，需要接收滚动事件，就添加正在滚动的监听。
            scroll.on('scroll', ()=>{
                console.log('正在滚动。。。。');
                let disY = scroll.y - scroll.maxScrollY;
                this.$emit('onScroll', disY);
            })
        }
    }
}
</script>


<style scoped>
.content{
    width: 100%;
    position: absolute;
    top: 0.47rem;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
    #arrow{
        position: absolute;
        left: 0.16rem;
        top:0.16rem;
        height: 0.14rem;
        width: 0.14rem;
    }
    #arrow img{
        height: 0.14rem;
        width: 0.14rem;
    }
</style>

