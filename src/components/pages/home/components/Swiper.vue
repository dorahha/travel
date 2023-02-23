<template>
  <div id="swipercom">
    <div class="swiper-container" id="swiperIndex" >
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(item,i) in list" :key="i">
          <img :src="item.imgUrl"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css' // 引入swiper样式
import Swiper from 'swiper' // 引入swipers
export default {
  name: 'HomeSwiper',
  props: {
    list: Array // 接受请求的数据
  },
  mounted() {
    // eslint-disable-next-line
    new Swiper('#swiperIndex', {
      observer: true, // 开启动态检查器，监测swiper和slide
      // 配置分页器内
      loop: true, // 循环模式选项
      autoplay: {
        disableOnInteraction: false,
        delay: 4000
      },
      pagination: {
        el: '.swiper-pagination', // 换页器与哪个标签关联
        clickable: true // 分页器是否可以点击
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
// >>>表示的是样式穿透 因为在这个样式表中加入了scoped 使用这个样式穿透就能是swiper组件中的样式发生改变
#swipercom >>> .swiper-pagination-bullet-active
  background-color: #fff !important
#swipercom
  width: 7.5rem
  #swiperIndex.swiper-container
    width: 8rem
    height: 4rem
    .swiper-slide img
      width: 100%
      height: 4rem
</style>
