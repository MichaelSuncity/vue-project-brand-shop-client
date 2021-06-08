export default {
  actions: {
    async fetchCart({commit}, currentUserId){
      try {
        const response  = await fetch(`https://vue-learn-project-brand-shop.herokuapp.com/api/cart/${currentUserId}`);
        const data  = await response.json();
        commit('updateCart', data)
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async addProductToCart({commit}, {idProduct, currentUserId}){
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/cart/add', {
          method: 'POST',
          body: JSON.stringify({
            idProduct,
            currentUserId
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        commit('addToCart', data.newItem)
        return data
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async changeQuantityInCart({commit}, {idProduct, currentUserId, quantityMethod}) {
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/cart/changequantity', {
          method: 'PATCH',
          body: JSON.stringify({
            idProduct,
            currentUserId,
            quantityMethod
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        commit('changeItemCart', data.itemCart)
        return data
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async clearUserCart({commit}, currentUserId){
      try {
        const response  = await fetch(`https://vue-learn-project-brand-shop.herokuapp.com/api/cart/clear/${currentUserId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        commit('updateCart', data.userCart)
        return data
      } catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async removeProductInCart({commit}, {idProduct, currentUserId}){
      try {
        const response  = await fetch(`https://vue-learn-project-brand-shop.herokuapp.com/api/cart/removeproduct`, {
          method: 'DELETE',
          body: JSON.stringify({
            idProduct,
            currentUserId
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        commit('removeFromCart', data.itemCart)
        return data
      } catch (error) {
      commit('setError', error)
      throw error
      }
    }

  },
  state: {
    cart: []
  },
  
  getters: {
    cart: s => s.cart
  },

  mutations: {
    updateCart(state, data){
      state.cart = data
    },
    addToCart(state, data) {
      state.cart.push(data)
    },
    changeItemCart(state, itemCart){
      const id = state.cart.findIndex(item => item.id == itemCart.id)
      state.cart.splice(id, 1, itemCart)
    },
    removeFromCart(state, itemCart){
      state.cart = state.cart.filter(item => item.idProduct != itemCart.idProduct)
    }
  },
}