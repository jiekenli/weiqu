<template>
<div>
  <app-content ref="content" style="bottom: .71rem;">
	<ul class="list" v-for="(item,index) in data">
	    <li class="item">
	        <div class="top">
	            <div class="head-img-wrap">
	            	<!-- <slot name="head-img"></slot> -->
	                <span class="head-img">
	                    <img :src="(item.portraitURL || item.User.portraitURL)" @click="goUserDetail(item.userId)">
	                </span>
	                <div class="top-middle">
	                	<!-- <slot name="title"></slot>
	                	<slot name="time"></slot> -->
	                    <p class="title" slot="title">{{(item.username || item.User.username)}}</p>
                      <p class="time" slot="time">{{item.createDate}}</p>
	                </div>
	            </div>
	            <div class="tab-wrap">
	            	<!-- <slot name="arrow-wrap"></slot>
                <slot name="focus-btn"></slot>
	            	<slot name="star-btn"></slot> -->
		            <div class="arrow-wrap" v-if="showArrow">
		                <span class="arrow-right" @click="tabAct(index)">
                        <img src="img/xhdpi/安卓 copy 2.png">
                    </span>
		                <ul class="tab-list" v-show="tabShow && selectIndex == index">
		                    <li class="tab-line"></li>
		                    <li class="tab-item" 
                        @click="addAttention((item.topicId || item.Id))">关注</li>
		                    <li class="tab-item"
                        @click="cancelAttention((item.topicId || item.Id))">我不感兴趣</li>
		                </ul>
		            </div>
		            <span class="focus-btn" v-if="showFocus">
		                已关注
		            </span>
                <span class="star-btn" v-if="showStar" @click="collectIconAct(item)">
                    <img :src="CollectIconSrc[index]">
                </span>
	            </div>
	        </div>
	        <div class="content-wrap" @click="goPostsDetail">
	        	<!-- <slot name="text"></slot> -->
	            <div class="text">
	                {{item.context}}
	            </div>
	            <ul class="img-list">
	        			<!-- <slot name="img-item"></slot> -->
	                <li class="img-item" slot="img-item">
	                    <img :src="item.pictureUrl.split(',')[0]">
	                </li>
	                <li class="img-item" slot="img-item">
	                    <img :src="item.pictureUrl.split(',')[1]">
	                </li>
	                <li class="img-item" slot="img-item">
	                    <img :src="item.pictureUrl.split(',')[2]">
	                </li>
	            </ul>
	        </div>
	        <ul class="btn-list">
	            <li class="btn-item">
                <span class="img" slot="img-icon1">
                    <img src="img/xhdpi/安卓 copy 37.png" alt="">
                </span>
	            	<!-- <slot name="btn-text1"></slot> -->
	                <span class="btn-text" 
                  @click="tabShare(item)">{{item.collectNumber}}</span>
	                <span class="btn-line"></span>
	            </li>
	            <li class="btn-item">
	                <span class="img">
	                    <img src="img/xhdpi/安卓 copy 35.png" alt="">
	                </span>
	                <!-- <slot name="btn-text2"></slot> -->
	                <span class="btn-text"
                  @click="loadReward((item.topicId || item.Id),(item.portraitURL || item.User.portraitURL))">{{item.rewardNumber}}</span>
	                <span class="btn-line"></span>
	            </li>
	            <li class="btn-item">
	                <span class="img" @click="goPostsDetail">
	                    <img src="img/xhdpi/安卓 copy 7.png" alt="">
	                </span>
	                <!-- <slot name="btn-text3"></slot> -->
	                <span class="btn-text">{{item.replyNumber}}</span>
	                <span class="btn-line"></span>
	            </li>
	            <li class="btn-item">
	                <span class="img" @click="addLikeAct((item.topicId || item.Id))">
	                    <img src="img/xhdpi/安卓 copy 33.png" alt="">
	                </span>
	                <!-- <slot name="btn-text4"></slot> -->
	                <span class="btn-text">{{item.likeNumber}}</span>
	            </li>
	        </ul>
	    </li>
	</ul>
  </app-content>
  <reward v-if="rewardShow" 
  :data="{rewardId,rewardFailed,rewardSuc}"
  @closeAct="closeReward">
      <img :src="rewardImg" slot="head-img">
  </reward>
  <share></share>
  </div>
</template>
<script type="text/javascript">
  import reward from "../components/reward.vue";
  import share from "../components/share.vue";
  import {addLikeData,addAttentionData, cancelAttentionData} from "../../services/homeService.js";
	export default {
		name: "user-item",
    props: ["showArrow","showFocus","showStar","data"],
    data () {
      return {
        tabShow: false,//右边箭头
        selectIndex: 0,
        rewardShow: false,//打赏页
        rewardId: null,
        rewardImg: null,
        rewardFailed: false,
        rewardSuc: false,
      }
    },
    components: {
      reward,
      share
    },
    mounted () {
      
    },
    computed: {
      CollectIconSrc () {
        var src = this.data.map(item=>{
          if(item.isCollect == 1) {
            return "img/xhdpi/安卓 copy 6.png";
          } else {
            return "img/xhdpi/安卓 copy 5.png";
          }
        })
        return src;
      }
    },
    methods: {//右边箭头点击事件
      tabAct (index) {
        this.tabShow = !this.tabShow;
        this.selectIndex = index;
      },
      addLikeAct(id) {
        addLikeData(id).then(data=>{
          if(data.data.code == 200) {
            console.log("点赞成功")
          }
        })
      },//点击进入帖子详情页
      goPostsDetail () {
        this.$router.push({
            name: "homePostDetail",
            params: {
                id: this.topicId
            }
        })
      },
      goUserDetail (id) {
        this.$router.push({
            name: "HomeUserDetail",
            params: {
              userId: id
            }
        })
      },
      addAttention (topicId) {
          this.tabShow = false;
          addAttentionData(topicId).then(data=>{
              if(data.data.code == 200) {
                  console.log("关注成功");
                  console.log(topicId)
              }
              this.$nextTick(()=>{
                // this.$emit("refresh");
                  this.$refs.content.refreshDOM();
              })
          })
      },//点击我不感兴趣,取消关注
      cancelAttention (topicId) {
          this.tabShow = false;
          cancelAttentionData(topicId).then(data=>{
              if(data.data.code == 200) {
                  console.log("取消关注成功");
              }
              this.$nextTick(()=>{
                // this.$emit("refresh");
                  this.$refs.content.refreshDOM();
              })
          })
      },
      tabShare (item) {
        this.$pubsub.$emit("openShare");
      },
      //点击弹出打赏页
      loadReward (topicId,img) {
          this.rewardShow = true;
          this.rewardSuc = false;
          this.rewardFailed = false;
          this.rewardId = topicId;
          this.rewardImg = img;
      },
      closeReward () {
          this.rewardShow = false;
      },
      refreshDOM () {
        this.$refs.content.refreshDOM();
      },
      //点击（收藏按钮），收藏该帖子,请求后台,参数帖子的ID
      collectIconAct (item) {
        console.log(item.isCollect)
        addCollectData(item.id).then(data=>{
          console.log(data);
        })
      },
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
  top: 100%;
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
.focus-btn {
	display: inline-block;
  background: #68A2F7;
  border-radius: .05rem;
  width: .4rem;
  height: .22rem;
  line-height: .22rem;
  font-size: .11rem;
  color: #fff;
  font-family: PingFangSC-Regular;
  letter-spacing: 0;
  margin-top: .07rem;
  margin-right: .01rem;
  text-align: center;
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
.star-btn {
  display: inline-block;
  width: .24rem;
}
.star-btn img {
  width: 100%;
}
</style>