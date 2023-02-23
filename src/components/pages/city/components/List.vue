<template>
  <!-- refs 可以帮助获取dom元素 -->
  <div class="list" ref="wrapper">
   <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wraper">
          <div class="button">{{ this.currentCity }}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div
          class="button-wraper"
          v-for="item in hotCities"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          <div class="button">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="area"
      v-for="(item, key) of cities"
      :key="key"
      :ref="key"
    >
      <div class="title border-topbottom">{{ key }}</div>
      <div class="item-list ">
        <div
          class="item  border-bottom"
          v-for="innerItem in item"
          :key="innerItem.id"
          @click="handleCityClick(innerItem.name)"
        >
          {{ innerItem.name }}
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick(city) {
      // 因为写了 ...mapMutations('changeCity') 所以这句话 this.$store.commit('changeCity', city) 可以简写成 this.changeCity(city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      // console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:after
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  // height: 12rem
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    font-size: .26rem
    color: #666
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wraper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    line-height: .76rem
    padding-left: .2rem
</style>
