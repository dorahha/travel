<template >
  <div>
    <div class="banner" @click="handeleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title"> {{ this.sightName }}</div>
        <div class="banner-number banner-icon">
          <span class="iconfont">&#xe692;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
      :imgs="bannerImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handeleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow:hidden
    height:0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display:flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)) // 黑色的阴影
      .banner-title
        flex: 1
      .banner-number
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        margin-top: .14rem
        .banner-icon
          font-size: .24rem
</style>
