<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
    <div v-show="page=='recommended'">
            <h1>推荐</h1>
        </div>
        <div v-show="page=='special'">
            <h1>特别关注</h1>
        </div> 
    </app-content>
</div>

</template>
<script>
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
            }
        }
    },
    mounted(){
    this.$pubsub.$on('show-page',(data)=>{
        this.page=data
    })
}
}
</script>






// import {getHomeBannerData, getNowPlayingData, getComingSoonData} from '../../services/homeService.js'

// export default {
// }
// </script>

<style scoped>

</style>

