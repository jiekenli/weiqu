<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content ref="content" style="bottom: .71rem;">
        <div v-show="page=='recommended'">
            <user-item v-for="(item,index) in recommendList">
                <span class="head-img" slot="head-img">
                    <img :src="item.portraitURL" @click="goUserDetail(item.userId)">
                </span>
                <p class="title" slot="title">{{item.username}}</p>
                <p class="time" slot="time">{{item.createDate}}</p>
                <div class="arrow-wrap" @click="tabAct(index)" slot="arrow-wrap">
                    <span class="iconfont icon-arrow-down"></span>
                    <ul class="tab-list" v-show="tabShow && selectIndex == index">
                        <li class="tab-line"></li>
                        <li class="tab-item">关注</li>
                        <li class="tab-item">我不感兴趣</li>
                    </ul>
                </div>
                <div class="text" slot="text" @click="goPostsDetail(item.topicId)">
                    {{item.context}}
                </div>
                <li class="img-item" slot="img-item" @click="goPostsDetail(item.topicId)">
                    <img :src="item.pictureUrl.split(',')[0]">
                </li>
                <li class="img-item" slot="img-item" @click="goPostsDetail(item.topicId)">
                    <img :src="item.pictureUrl.split(',')[1]">
                </li>
                <li class="img-item" slot="img-item" @click="goPostsDetail(item.topicId)">
                    <img :src="item.pictureUrl.split(',')[2]">
                </li>
                <span class="btn-text" slot="btn-text1">{{item.collectNumber}}</span>
                <span class="btn-text" slot="btn-text2">{{item.rewardNumber}}</span>
                <span class="btn-text" slot="btn-text3">{{item.replyNumber}}</span>
                <span class="btn-text" slot="btn-text4">{{item.likeNumber}}</span>
            </user-item>
        </div>
        <div v-show="page=='special'">
            <user-item v-for="(item,index) in attentionList">
                <span class="head-img" slot="head-img">
                    <img :src="item.User.portraitURL" @click="goUserDetail(item.User.Id)">
                </span>
                <p class="title" slot="title">{{item.User.username}}</p>
                <p class="time" slot="time">{{item.createDate}}</p>
                <span class="focus-btn" slot="focus-btn">
                    已关注
                </span>
                <div class="text" slot="text" @click="goPostsDetail(item.Id)">
                    {{item.context}}
                </div>
                <li class="img-item" slot="img-item" @click="goPostsDetail(item.Id)">
                    <img :src="item.pictureUrl.split(',')[0]">
                </li>
                <li class="img-item" slot="img-item" @click="goPostsDetail(item.Id)">
                    <img :src="item.pictureUrl.split(',')[1]">
                </li>
                <li class="img-item" slot="img-item" @click="goPostsDetail(item.Id)">
                    <img :src="item.pictureUrl.split(',')[2]">
                </li>
                <span class="btn-text" slot="btn-text1">{{item.collectNumber}}</span>
                <span class="btn-text" slot="btn-text2">{{item.rewardNumber}}</span>
                <span class="btn-text" slot="btn-text3">{{item.replyNumber}}</span>
                <span class="btn-text" slot="btn-text4">{{item.likeNumber}}</span>
            </user-item>
        </div> 
    </app-content>
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
            tabShow: false,
            selectIndex: 0,
            recommendList: [],
            attentionList: [],
            recommendPage: 1,
            attentionPage: 1
        }
    },
    methods: {
        tabAct (index) {
            this.tabShow = !this.tabShow;
            this.selectIndex = index;
        },
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
        goUserDetail (id) {
            this.$router.push({
                name: "HomeUserDetail",
                params: {
                    userId: id
                }
            })
        },//点击进入帖子详情页
        goPostsDetail (id) {
            this.$router.push({
                name: "homePostDetail",
                params: {
                    id
                }
            })
        }
    },
    components: {
        'user-item': userItem
    },
    mounted(){
        this.getInitData();
        //头部点击切换时,初始化相应数据
        this.$pubsub.$on('showPage',(data)=>{
            this.page = data;
            this.getInitData();
        })
    }
}
</script>