<template>
<div>
    <app-header :title="conten">
    </app-header>
    <app-content>
    <h1>首页</h1>  

    </app-content>
    <app-foot></app-foot>
</div>

</template>
<script>
export default {
    data(){
        return{
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
    }
}
</script>






// import {getHomeBannerData, getNowPlayingData, getComingSoonData} from '../../services/homeService.js'

// export default {
// }
// </script>

<style scoped>

</style>

