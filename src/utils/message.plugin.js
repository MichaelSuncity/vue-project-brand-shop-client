export default {
    install(Vue) {
        Vue.prototype.$message = function(message) {
            this.$bvToast.toast(`${message}`, {
            title: 'Message from server',
            toaster: 'b-toaster-top-center',
            autoHideDelay: 1500,
        })
        }

        Vue.prototype.$error = function(message) {
            this.$bvToast.toast(`${message}`, {
            title: 'Message from server',
            toaster: 'b-toaster-top-center',
            autoHideDelay: 1500,
        })
        }
    }
}