<template>
	<app-content ref="content" style="top: 0;bottom: 0;z-index: 3">
		<div class="top-wrap">
			<div class="bg-img-wrap">
				<img class="bg-img" src="img/xhdpi/user-bg.jpg">
			</div>
			<span class="arrow-left" @click="goBack">
				<img src="img/xhdpi/安卓 copy 41.png">
			</span>
			<span class="portrait">
				<img :src="userInfo.portraitURL">
			</span>
			<div class="user-name">{{userInfo.Username}}</div>
			<div class="des">{{userInfo.desc}}</div>
		</div>
		<user-item v-for="(item,index) in userPosts">
		    <span class="head-img" slot="head-img">
		        <img :src="item.User.portraitURL">
		    </span>
		    <p class="title" slot="title">{{item.User.username}}</p>
		    <p class="time" slot="time">{{item.createDate}}</p>
		    <span class="star-btn" slot="star-btn" @click="collectIconAct(item)">
		        <img :src="CollectIconSrc[index]">
		    </span>
		    <div class="text" slot="text">
		        {{item.context}}
		    </div>
		    <li class="img-item" slot="img-item">
		        <img :src="item.pictureUrl.split(',')[0]">
		    </li>
		    <li class="img-item" slot="img-item">
		        <img :src="item.pictureUrl.split(',')[1]">
		    </li>
		    <li class="img-item" slot="img-item">
		        <img :src="item.pictureUrl.split(',')[2]">
		    </li>
		    <span class="btn-text" slot="btn-text1">{{item.collectNumber}}</span>
		    <span class="btn-text" slot="btn-text2">{{item.rewardNumber}}</span>
		    <span class="btn-text" slot="btn-text3">{{item.replyNumber}}</span>
		    <span class="btn-text" slot="btn-text4">{{item.likeNumber}}</span>
		</user-item>
	</app-content>
</template>
<script type="text/javascript">
import {getHomeUserPage, addCollectData} from "../../services/homeService.js";
import userItem from "../home/userItem.vue";
	export default {
		props: ["userId"],
		data () {
			return {
				userInfo: {},
				userPosts: []
			}
		},
		computed: {
			CollectIconSrc () {
				var src = this.userPosts.map(item=>{
					if(item.isCollect == 1) {
						return "img/xhdpi/安卓 copy 6.png";
					} else {
						return "img/xhdpi/安卓 copy 5.png";
					}
				})
				return src;
			}
		},
		methods: {
			//点击（收藏按钮），收藏该帖子,请求后台,参数帖子的ID
			collectIconAct (item) {
				console.log(item.isCollect)
				addCollectData(item.id).then(data=>{
					console.log(data);
				})
			},
			goBack () {
				this.$router.go(-1);
			}
		},
		components: {
			'user-item': userItem
		},
		mounted () {
			getHomeUserPage(this.userId).then(data=>{
				this.userInfo = data.User;
				this.userPosts = data.topics;
				console.log(this.userInfo)
				console.log(this.userPosts)
				this.$nextTick(()=>{
					this.$refs.content.refreshDOM();
				})
			})
		}
	}
</script>
<style scoped>
	.top-wrap {
		position: relative;
		text-align: center;
	}
	.bg-img-wrap {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 1.46rem;
	}
	.bg-img {
		width: 100%;
		height: 100%;
	}
	.arrow-left{
		position: absolute;
    top: .17rem;
    left: .1rem;
	}
	.portrait {
		display: inline-block;
    width: .6rem;
    height: .6rem;
    margin-top: .15rem;
	}
	.portrait img {
		width: 100%;
		border-radius: 50%;
	}
	.user-name {
		font-family: SourceSansPro-Regular;
    font-size: .14rem;
    color: #333333;
    letter-spacing: 0;
    margin-top: .1rem;
    height: .18rem;
    line-height: .18rem;
	}
	.des {
		font-family: PingFangSC-Regular;
    font-size: .12rem;
    color: #666666;
    margin-top: .1rem;
    height: .17rem;
    line-height: .17rem;
	}
</style>