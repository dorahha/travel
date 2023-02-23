<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
      {{ this.city }}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 将vuex中的数据映射到mapState中
    ...mapState(['city'])
  }
}
</script>
 <!-- 在这里面书写宽度采用的是rem 1rem = html font-size 50px
所以高度是86px(二倍图) --- 43px ---(0.86rem) -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
      .back-icon
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
