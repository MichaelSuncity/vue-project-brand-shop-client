<template>
  <div>
    <div class="commentInputWrap">
      <div class="commentInputHead">
          Add your comment
      </div>
      <form class="commentInputForm" @submit.prevent="createMessage">
        <label for="message">Message
          <span  class="invalidInfo"
            v-if="$v.message.$dirty && !$v.message.required"
            > Fill in the field
            </span>
        </label>
        <textarea 
          name="message" 
          id="message" 
          cols="30" 
          rows="10"
          placeholder="Enter your message ..."
          v-model.trim="message"
          :class="{invalid: ($v.message.$dirty && !$v.message.required)}"
          ></textarea>
        <button type="sumbit">Send comment</button>
      </form>
    </div>
  </div>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
import messages from '../utils/messages';

export default {
 data: () => ({
    message: '',
  }),
  validations: {
    message: {required},
  },
  methods: {
    async createMessage(){
      if(this.$v.$invalid){
          this.$v.$touch()
          return
        }
        
      try {
        const newComment = {
          message: this.message,
          userId: this.$store.getters.info.id,
          userName: this.$store.getters.info.name
        }

        const data = await this.$store.dispatch('sendMessage', newComment)
        this.$message(messages[data.message])
        this.message = ''
        this.$v.reset()
      } catch (error) {
        //
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/commentCreate.scss';

.invalid {
    outline: 1px solid #f16d7f;
}

.invalidInfo {
    color: #f16d7f;
}
</style>