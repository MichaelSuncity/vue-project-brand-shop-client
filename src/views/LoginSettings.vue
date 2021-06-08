<template>
  <div>
    <main>
      <div class="login containerWrap">
          <h3 class="loginHead">Change account settings</h3>
          <div class="loginDesc">Please log in below</div>
          <form class="loginForm" action="#" @submit.prevent="submitHandler">
              <label for="">Name 
                  <small  class="invalidInfo"
                      v-if="$v.name.$dirty && !$v.name.required" 
                  > Fill in the field 
                  </small>
                  <small  class="invalidInfo"
                  v-else-if="$v.name.$dirty && !$v.name.minLength"
                  >The name must be {{ $v.name.$params.minLength.min }} characters long. It's now {{ name.length }} 
                  </small>
              </label>
              <input type="text" 
              v-model.trim="name" 
              :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
              >
              <div class="buttons">
                <button type="sumbit">Save</button>
                <button type="reset" class="reset">Reset</button>
              </div>
          </form>
      </div>
    </main>
  </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators';
import messages from '../utils/messages';

export default {
    metaInfo() {
        return {
            title: this.$title('Account settings')
        }
    },
    name: 'accountsettings',
    data: () => ({
        name: '',
    }),
    mounted() {
      this.name = this.$store.getters.info.name
    },

    validations: {
        name: {required, minLength: minLength(3)},
    },

    methods: {
       async submitHandler() {
        if(this.$v.$invalid){
            this.$v.$touch()
            return
        }
        
        try {
          const currentUserId = this.$store.getters.info.id
          const newName = this.name
          const data = await this.$store.dispatch('changeAccount', {currentUserId, newName})
          this.$message(messages[data.message])
        } catch (e) {
            //throw new Error(e);
        }
      }
    }
}
</script>



<style lang="scss" scoped>
@import '@/assets/scss/login.scss';
.buttons {
  display: flex;
  justify-content: space-around;

  @media(max-width: 500px){
    flex-direction: column;

    .reset {
      margin-top: 30px;
    }
  }

}

.invalid {
    outline: 1px solid #f16d7f;
}

.invalidInfo {
    color: #f16d7f;
}
</style>