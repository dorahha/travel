<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wraper" >
      <div id="swipercom" >
        <div class="swiper-container" id="swiperIndex" >
          <div class="swiper-wrapper" >
            <div
              class="swiper-slide"
              v-for="(item, index) in imgs"
              :key="index"
            >
              <img class="gallary-img" :src=" item"/>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
  </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css' // 引入swiper样式
import Swiper from 'swiper' // 引入swipers
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  },
  mounted() {
    // eslint-disable-next-line
    new Swiper('#swiperIndex', {
      observer: true, // 开启动态检查器，监测swiper和slide
      // 配置分页器内
      loop: false, // 循环模式选项
      // 当swiper父级元素或者observe 监听到swiper的宽度发生变化的时候，就会自动刷新一次
      observeParents: true,
      // eslint-disable-next-line
      observer: true,
      pagination: {
        el: '.swiper-pagination', // 换页器与哪个标签关联
        type: 'fraction',
        clickable: true // 分页器是否可以点击
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display:flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wraper
    width: 100%
    height: 0
    padding-bottom: 100%
    .swiper-container
      height: 5rem
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
