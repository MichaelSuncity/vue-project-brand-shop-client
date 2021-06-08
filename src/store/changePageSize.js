export default {
  actions: {
    async changePageSize({commit}, pageSize){
    commit('setPageSize', pageSize)
    }
  },
  
  state: {
    pageSize: {}
  },
  mutations:{
    setPageSize(state, pageSize) {
      state.pageSize = pageSize
      },
    clearPageSize(state){
      state.pageSize = {}
      },
  },
  getters: {
    pageSize: s => s.pageSize
  }
}