<template>
  <div class="icons">
    <div class="swiper-container "  id="iconsIndex">
      <swiper >
      <!-- 有两层循环 第一层循环是自己轮播页面
            第二层循环表示自己一个轮播页面要展示的图片
      -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
    </swiper-slide>
  </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  // 计算属性
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icons
  padding-top: -0.4rem
  .icon
    position relative
    overflow: hidden
    float left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .56rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: .60rem auto
        height: 60%
    .icon-desc
      position: absolute
      right: 0
      left: 0
      bottom: 0
      height: .56rem
      line-height: .56rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
