import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

// 公共数据仓库 一个组件按照要求修改数据之后，其他组件能够被感知到
// 下面写的就是vuex公共数据被多个组件使用的大致流程
export default new Vuex.Store({
  state,
  mutations
})
