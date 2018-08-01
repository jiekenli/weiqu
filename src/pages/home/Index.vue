<template>
<div>
    <app-header :title="conten">
    </app-header>
        <div v-show="page=='recommended'">
            <user-item :showArrow="true" :data="recommendList" ref="content">
            </user-item>
        </div>
        <div v-show="page=='special'">
            <user-item :showFocus="true" :data="attentionList" ref="content">
            </user-item>
        </div>
    <router-view></router-view>
</div>
</template>
<script>
import userItem from "./userItem.vue";
import {getRecommendPage,getAttentionPage} from "../../services/homeService.js";
export default {
    data(){
        return{
            page:'recommended',
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
            recommendList: [],
            attentionList: [],
            recommendPage: 1,
            attentionPage: 1
        }
    },
    methods: {
        getRecommend () {
            //初始化推荐页面数据
            getRecommendPage(this.recommendPage).then(data=>{
                this.recommendList = data;
                //数据渲染完后更新滚动视图
                this.$nextTick(()=>{
                    this.$refs.content.refreshDOM();
                })
            })
        },
        getAttention () {
            //初始化特别关注数据
            getAttentionPage(2).then(data=>{
                this.attentionList = data;
                this.$nextTick(()=>{
                    this.$refs.content.refreshDOM();
                })
            })
        },
        //获得页面初始化数据
        getInitData(){
            //判断要展示的界面有没有初始数据，没有就请求
            if(this.page == 'recommended' && this.recommendList.length == 0){
                this.getRecommend();
            }
            //判断要展示的界面有没有初始数据，没有就请求
            if(this.page == 'special' && this.attentionList.length == 0){
                this.getAttention();
            }
        },
    },
    components: {
        'user-item': userItem,
    },
    mounted(){
        this.getInitData();
        //头部点击切换时,初始化相应数据
        this.$pubsub.$on('show-page',(data)=>{
            this.page = data;
            this.getInitData();
        })
    }
}
</script>
