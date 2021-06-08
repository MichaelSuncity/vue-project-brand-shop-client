export default {
  actions: {
    async login({commit}, {email, password}){
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
      
        const data  = await response.json()

        if(!response.ok){
          throw new Error(data.message)
        }

        localStorage.setItem('userData', JSON.stringify(data))
        commit('setInfo', data)
      } catch (error) {
        commit('setError', error)
        throw error
      }
    },

    async register ({commit}, {email, password, name}){
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/auth/register', {
          method: 'POST',
          body: JSON.stringify({
            name,
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data  = await response.json()

        if(!response.ok){
          throw new Error(data.message)
        }

      } catch (error) {
        commit('setError', error)
        throw error
      }
    },

    async logout({commit}){
      await localStorage.removeItem('userData')
      commit('clearInfo')
    },

    async changeAccount({commit}, {currentUserId, newName}){
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/auth/changeaccount', {
          method: 'PATCH',
          body: JSON.stringify({
            currentUserId,
            newName
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data  = await response.json()
        localStorage.removeItem('userData')
        localStorage.setItem('userData', JSON.stringify(data.user))
        commit('setInfo', data.user)
        return data
      } catch (error) {
        commit('setError', error)
        throw error
      }
    }
  }
}