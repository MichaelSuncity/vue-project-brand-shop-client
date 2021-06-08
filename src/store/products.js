export default {
  actions: {
    async fetchProducts({commit}){
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/products')
        const data  = await response.json()
        commit('updateProducts', data)
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async searchProduct({commit}, searchQuery){
      try {
        const response  = await fetch(`https://vue-learn-project-brand-shop.herokuapp.com/api/products/${searchQuery}`)
        const data  = await response.json()
        commit('updateProducts', data)
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async changeSort({commit}, {products, sortMethod}){
      try {
        switch(sortMethod) {
          case 'nameAz':
            products.sort((a, b) => a.name > b.name ? 1 : -1)
            break
          case 'nameZa':
            products.sort((a, b) => a.name > b.name ? -1 : 1)
            break
          case 'pricelow':
            products.sort((a, b) => a.price > b.price ? 1 : -1)
            break
          case 'pricehigh':
            products.sort((a, b) => a.price > b.price ? -1 : 1)
            break
        }
        commit('updateProducts', products)
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },

    async checkSizes ({commit}, checkedSizes){
      try {
        const response  = await fetch(`https://vue-learn-project-brand-shop.herokuapp.com/api/products/sizes/${checkedSizes}`)
        const data = await response.json()
        commit('updateProducts', data)
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },

  },

  state: {
    products: []
  },
  
  getters: {
    products: s => s.products
  },

  mutations: {
    updateProducts(state, data){
      state.products = data
    }
  },
}