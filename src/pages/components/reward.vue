<template>
	<div class="reward-layout">
    <div class="reward-wrap">
      <span class="close-btn" @click="closeReward">
          <img src="img/xhdpi/安卓 copy 3.png">
      </span>
      <span class="reward-head-img">
      	<slot name="head-img"></slot>
      </span>
      <p class="show-money">
          <span class="money-flag">¥</span>{{randomNum}}
          <span class="refresh-btn" @click="refreshMoney">
              <img src="img/xhdpi/安卓 copy 4.png">
          </span>
      </p>
      <input type="number" class="write-btn" placeholder="输入金额" ref="writeIpt">
      <p class="reward-result blue" v-if="rewardSuc">打赏成功</p>
      <p class="reward-result red" v-if="rewardFailed">
          余额不足操作未完成！
          <span class="recharge-btn">前往充值</span>
      </p>
      <span class="reward-btn" @click="rewardAct">赏</span>
    </div>
  </div>
</template>
<script type="text/javascript">
import {addRewardData} from "../../services/homeService.js";
	export default {
		props: ["data"],
		data () {
			return {
				randomNum: (Math.random() * 10).toFixed(2),
				rewardId: this.data.rewardId,
        rewardFailed: false,
        rewardSuc: false
			}
		},
		mounted () {
			console.log("mounted")
			this.rewardFailed = this.data.rewardFailed;
			this.rewardSuc = this.data.rewardSuc
		},
		methods: {
			closeReward() {
				this.$emit("closeAct");
			},
			refreshMoney () {
				this.randomNum = (Math.random() * 10).toFixed(2);
			},
			rewardAct () {
				console.log(this.data,1)
				let money = this.$refs.writeIpt.value ? this.$refs.writeIpt.value : this.randomNum;
				addRewardData(this.rewardId,money).then(data=>{
					console.log(data)
				    if(data.data.code == 200) {
				        this.rewardSuc = true;
				    } else {
				        this.rewardFailed = true;
				    }
				})
			}
		}
	}
</script>
<style scoped> 
.reward-layout {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,.45);
  z-index: 10;
}
.reward-wrap {
    width: 2.5rem;
    height: 2.5rem;
    background: #fff;
    border-radius: .05rem;
    text-align:center;
    position: absolute;
    left: 50%;
    margin-left: -1.25rem;
    top: 50%;
    margin-top: -1.25rem;
}
.close-btn {
    position: absolute;
    right: .04rem;
    top: .04rem;
}
.reward-head-img {
    display: inline-block;
    margin-top: .18rem;
    width: .6rem;
    height: .6rem;
}
.reward-head-img img {
    border-radius: 50%;
    width: 100%;
}
.show-money {
    height: .4rem;
    line-height: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SourceSansPro-Regular;
    font-size: 64px;
    color: #151515;
    margin-top: .17rem;
}
.show-money .money-flag {
    font-family: SourceSansPro-Regular;
    font-size: 40px;
    color: #333333;
}
.refresh-btn {
    display: inline-block;
    width: .2rem;
    margin-left: .1rem;
}
.refresh-btn img {
    width:100%;
}
.write-btn {
    font-family: SourceSansPro-Regular;
    font-size: .14rem;
    color: #333333;
    border: none;
    outline: none;
    margin-top: .18rem;
    height: .17rem;
    line-height: .17rem;
    text-align:center;
    margin-bottom: .25rem;
}
.reward-btn {
    display: block;
    background: #FA6161;
    border-radius: 1rem;
    font-family: SourceSansPro-Regular;
    font-size: 48px;
    color: #fff;
    width: 2rem;
    height: .4rem;
    line-height: .4rem;
    margin: 0 auto;
}
.reward-result {
    position: absolute;
    width: 100%;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    height: .17rem;
    line-height: .17rem;
    bottom: .55rem;
}
.red {
    color: #FA6161;
}
.blue {
    color: #60A7FF;
}
.recharge-btn {
    color: #60A7FF;
    text-decoration: underline;
}
</style>