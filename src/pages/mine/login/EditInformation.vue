<template>
<div class="pages bg1">
    <app-header :title="conten" >
    </app-header>
    <app-content  id="pageContent">
        <div class="headInfo">
            <img src="img/xhdpi/headerImg.png"  />
            <p>头像会用作公开资料</p>
        </div>
        <ul class="edit-info">
            <li v-for="(item,i) in editList" :key="i" @click="editInfoAction(i)">
                <span>{{item}}:</span>
                <p class="list-info">ddddd</p>
                <img  src="img/xhdpi/right copy 48.png"></li>
        </ul>
        <!-- <mt-datetime-picker
            v-model="pickerVisible"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日">
            </mt-datetime-picker> -->
        <!-- <div>
            <div class="loginpic"><img src="img/xhdpi/loginpic.png"></div>
            <span>头像公用作为公开资料</span>
        </div>
        <ul>
            <li>昵称:<input type="text"></li>
            <li>性别：</li>
            <li>生日：</li>
            <li>个人简介：<input type="text"></li>
        </ul> -->
    </app-content>
</div>
</template>
<script>
// import { DatetimePicker } from 'mint-ui';
export default {
    data(){
        return{
            conten:{
                left:'编辑资料',
                show:false,
                rightshow:false,
                arrowright:true,
                showleft:true,
                searchDetails:false,
                id:1
            },
            editList:['昵称','性别','生日','个人简介']
        }
    },
    methods:{
        editInfoAction(){
          
        }
        //   openPicker() {
            // this.$refs.picker.open();
        // }
    }
}
</script>
<style scoped>
.headInfo{width:100%;background:#fff;padding-top:0.3rem;box-sizing: border-box;}
.headInfo img{width:1.25rem;height:1.25rem;display: block;margin:0 auto;border-radius:50%;}
.headInfo p{font-size:0.14rem;color:#424242;text-align: center;padding:0.16rem 0 0.15rem;}
.edit-info {margin-top:0.1rem;padding: 0 0.15rem;box-sizing: border-box;background:#fff;}
.edit-info li{height: 0.46rem;line-height: 0.46rem; border-bottom:1px dotted #979797;  color: #333333;     font-size: 0.15rem;display: flex;}

.edit-info span{flex:1;display: block;}
.edit-info img{display: none; width: 0.15rem; height: 0.15rem; padding-top: 0.15rem;}
.edit-info .list-info{float:right;}


/* #edit{width:100%;height:100%;background:#fff;position:absolute;top:0;bottom:0; z-index: 6;}
.loginpic{
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    position: absolute;
    left: 0.15rem;
    top:1.77rem;
    background: #99C7FF;
}
.loginpic img{
    position: absolute;
    left: 0.05rem;
    top:0.08rem;
    height: 0.79rem;
    width: 0.91rem;
} */
</style>