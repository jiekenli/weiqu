<template>
	<app-content style="top: 0;bottom: 0;z-index: 3" ref="content">
		<div class="top-title">
			<span class="arrow-left" @click="goBack">
				<img src="img/xhdpi/安卓 copy 41.png">
			</span>
			帖子详情
		</div>
		<user-item>
		    <span class="head-img" slot="head-img">
		        <img :src="user.portraitURL">
		    </span>
		    <!-- <p class="title" slot="title">{{postsInfo.User.username}}</p> 这样多次.写报错-->
		    <p class="title" slot="title">{{user.username}}</p>
		    <p class="time" slot="time">{{postsInfo.createDate}}</p>
		    <span class="star-btn" slot="star-btn" @click="collectIconAct(postsInfo.Id)">
		        <!-- <img :src="CollectIconSrc[index]"> -->
		    </span>
		    <div class="text" slot="text">
		        {{postsInfo.context}}
		    </div>
		    <li class="img-item" slot="img-item">
		        <img :src="picList[0]">
		    </li>
		    <li class="img-item" slot="img-item">
		        <img :src="picList[1]">
		    </li>
		    <li class="img-item" slot="img-item">
		        <img :src="picList[2]">
		    </li>
		    <span class="btn-text" slot="btn-text1">{{postsInfo.collectNumber}}</span>
		    <span class="btn-text" slot="btn-text2">{{postsInfo.rewardNumber}}</span>
		    <span class="btn-text" slot="btn-text3">{{postsInfo.replyNumber}}</span>
		    <span class="btn-text" slot="btn-text4">{{postsInfo.likeNumber}}</span>
		</user-item>
		<div class="conments-box">
			<h4 class="components-title">评论</h4>
			<div class="comments-main" v-for="(item,index) in commentsList">
				<div class="comments-top">
					<span class="user-img">
						<img src="img/xhdpi/home-prc1.png">
					</span>
					<p class="user-name">{{item.User.username}}</p>
					<p class="comments-time">{{item.createDate}}</p>
					<span class="comment-icon">
						<img src="img/xhdpi/安卓 copy 7.png">
					</span>
				</div>
				<div class="comments-speak" @click="getSonPost(item.id,index)">
					{{item.context}}
				</div>
				<ul class="comments-reply-box" v-for="(item,index) in sonPostList">
					<li class="comment-reply-item">
						<span class="comment-name">{{item.User.username}}:</span>
						{{item.context}}
						<p class="time">{{item.createDate}}</p>
					</li>
				</ul>
			</div>
		</div>
	</app-content>
</template>
<script type="text/javascript">
import userItem from "./userItem.vue";
import {PostsDetailPage,getSonPost} from "../../services/homeService.js";
	export default {
		props: ["id"],
		data () {
			return {
				postsInfo: {},
				commentsList: [],
				user: {},
				picList: [],
				sonPostList: [],
				sonPostPage: 1
			}
		},
		components: {
			'user-item': userItem
		},
		methods: {
			collectIconAct (id) {

			},
			goBack () {
				this.$router.go(-1);
			},//点击(一级评论），获取此评论下面的二级评论的信息
			getSonPost (id) {
				getSonPost(id,this.sonPostPage).then(data=>{
					console.log(data)
					this.sonPostList = data;
					this.$nextTick(()=>{
						this.$refs.content.refreshDOM();
					})
				})
			}
		},
		mounted () {
			PostsDetailPage(this.id).then(data=>{
				this.postsInfo = data.Topic;
				this.commentsList = data.Replys;
				this.user = this.postsInfo.User;
				this.picList = this.postsInfo.pictureUrl.split(",");
				// console.log(this.postsInfo.User)
				// console.log(this.commentsList)
				this.$nextTick(()=>{
					this.$refs.content.refreshDOM();
				})
			})

		}
	}
</script>
<style scoped>
	.top-title {
		position: relative;
		height: .25rem;
		line-height: .25rem;
		text-align: center;
		font-family: SourceSansPro-Regular;
		font-size: .18rem;
		color: #333;
		padding-top: .1rem;
		padding-bottom: .13rem;
		margin-bottom: .1rem;
		background-color: #fff;
		margin-bottom: .1rem;
	}
	.arrow-left {
		position: absolute;
		top: .12rem;
		left: .1rem;
	}
	.arrow-left img {
		width: .3rem;
	}
	.conments-box {
		margin-top: .1rem;
		background-color: #fff;
		padding-left: .14rem;
	}
	.components-title {
		font-family: SourceSansPro-Regular;
    font-size: .16rem;
    color: #333333;
    height: .34rem;
    line-height: .34rem;
    border-bottom: 1px solid #979797;
	}
	.comments-main {
		padding-left: .27rem;
		padding-right: .15rem;
	}
	.comments-top {
		position: relative;
	}
	.user-img {
		position: absolute;
		width: .2rem;
		height: .2rem;
		left: -.3rem;
		top: .1rem;
	}
	.user-name {
		font-family: SourceSansPro-Regular;
    font-size: .13rem;
    color: #333333;
    margin-top: .07rem;
    height: .2rem;
    line-height: .2rem;
	}
	.comments-time {
		font-family: SourceSansPro-Regular;
    font-size: .12rem;
    color: #999999;
    height: .18rem;
    line-height: .18rem;
    margin-bottom: .05rem;
	}
	.comment-icon {
		position: absolute;
    right: 0;
    top: 0rem;
    width: .24rem;
    height: .2rem;
	}
	.comment-icon img, .user-img img {
		width: 100%;
	}
	.comments-speak {
		font-family: SourceSansPro-Regular;
		font-size: .13rem;
		color: #999999;
		line-height: .19rem;
		margin-bottom: .08rem;
	}
	.comments-reply-box {
		padding: .04rem .1rem .04rem .08rem;
		background: #F0F0F0;
		border-radius: 5px;
	}
	.comment-reply-item {
		font-family: PingFangSC-Regular;
		font-size: .13rem;
		color: #3F3F3F;
		line-height: .19rem;
	}
	.comment-name{
		color: #68A2F7;
	}
</style>