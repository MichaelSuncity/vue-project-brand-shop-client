export default {
  actions: {
    async fetchComments({commit}){
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/comments')
        const data  = await response.json()
        commit('updateComments', data)
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async sendMessage({commit}, newComment){
      try {
        const response  = await fetch('https://vue-learn-project-brand-shop.herokuapp.com/api/comments/send', {
          method: 'POST',
          body: JSON.stringify(newComment),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        commit('createComment', data.newComment)
        return data
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },

    async deleteMessage({commit}, {idComment, currentUserId}){
      try {
        const response  = await fetch(`https://vue-learn-project-brand-shop.herokuapp.com/api/comments/delete`, {
          method: 'DELETE',
          body: JSON.stringify({
            idComment, 
            currentUserId
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data  = await response.json()
        commit('deleteComment', data.id)
        return data
      }  catch (error) {
      commit('setError', error)
      throw error
      }
    },
  },
  state: {
    comments: []
  },
  getters: {
    comments: s => s.comments
  },
  mutations: {
    updateComments(state, data){
      state.comments = data
    },
    createComment(state, newComment){
      state.comments.push(newComment)
    },
    deleteComment(state, id){
      state.comments = state.comments.filter(item => item.id != id)
    }
  },
}