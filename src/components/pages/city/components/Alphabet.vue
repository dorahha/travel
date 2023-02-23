<template>
  <div >
    <ul class="list">
      <li
        class="item"
        v-for=" item in letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters // 返回结果 ['A', 'B', 'C']
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      // 向外触发事件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // 优化代码的性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // eslint-disable-next-line
        this.timer = setTimeout (() => {
          const startY = this.startY // 获取A距离顶部的高度
          // console.log(startY) // 输出91
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
  display: flex
  position: absolute
  right: 0
  top: 1.58rem
  bottom: 0
  width: .4rem
  flex-direction: column
  justify-content: center
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor

</style>
