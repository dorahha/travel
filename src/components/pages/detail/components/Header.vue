<template >
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
      <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
      >
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情
      </div>
  </div>
</template>
<script>

export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true, // 用来是否展示头部类名为header-abs
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.querySelector('.header-fixed').scrollTop || document.documentElement.scrollTop // 获取元素距离顶部的高度
      // console.log(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  beforeDestroy() {
    // 对于windowa事件进行解绑
    window.removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  text-align: center
  line-height: .8rem
  border-radius: .4rem
  background: rgba(0, 0, 0, .8)
  .header-abs-back
    color: #fff
    font-size: .4rem
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  right: 0
  left: 0
  height: $headerHeight
  line-height: $headerHeight
  font-size: .32rem
  text-align: center
  color: #fff
  background: $bgColor
  .header-fixed-back
    position: absolute
    left: 0
    top: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
