<template>
	<!--其他用户的所有发布 页面-->
<div>
	<app-content id="release">
		<!--头部头像区-->
		<img src="img/xhdpi/安卓 copy 41.png" class="return" @click="toReturn()">
		<div class="head">
			<dl>
				<dt><img src="img/xhdpi/安卓 copy 33.png"></dt>
				<dd>微趣小可爱</dd>
				<span>天道酬勤 厚德载物</span>
			</dl>
		</div>
		<!--内容区-->
		<div class="main" @click="toPostDetail()">
			<post></post>
		</div>
		
	</app-content>	
	
	<!--装载跳转子页面-->
	<router-view></router-view>
</div>
</template>

<script>
import Post from "../../common/Post.vue"
export default {
	components:{
		Post
	},
	methods:{
		//去帖子详情页面
		toPostDetail(){
			this.$router.push({
				name:'postdetail'
			})
		},
		//返回到消息页面
		toReturn(){
			this.$router.push({
				name:'message'
			})
		},
		//去帖子详情页面
		toPostDetail(){
			this.$router.push({
				name:'postdetail'
			})
		}
	}
	
}
</script>

<style scoped>
/*整个页面*/
#release{
	background: #fff;
	position: absolute;
	left: 0;
	bottom: 0;
	top: 0;
	z-index: 100;
}
.return{
	width: 0.14rem;
	height: 0.14rem;
	position: absolute;
	top: 34px;
	left: 20px;
	color: #333;
}
/*头部头像区*/
.head{
	width: 100%;
	height: 1.65rem;
	background: greenyellow;
	display: flex;
	justify-content: center;
}
.head dl{
	text-align: center;
}
.head dl dt{
	width: 0.6rem;
	height: 0.6rem;
	margin-left: 40px;
}
.head dl dt img{
	width: 0.6rem;
	height: 0.6rem;
	margin-top: 0.19rem;
	text-align: center;
	
}
.head dl dd{
	font-size: 0.14rem;
	color: #333;
	line-height: 0.18rem;
	margin: 0.1rem 0;
}
.head dl span{
	font-size: 0.12rem;
	color: #666;
	line-height: 0.17rem;
}
/*内容区*/
.main{
	width: 100%;
	height: 2.77rem;
	background: blanchedalmond;
}
</style>