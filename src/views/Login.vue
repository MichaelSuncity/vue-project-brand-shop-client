<template>
  <div>
    <main>
      <div class="login containerWrap">
          <h3 class="loginHead">Already registered?</h3>
          <div class="loginDesc">Please log in below</div>
          <form class="loginForm" action="#" @submit.prevent="submitHandler">
              <label for="">Email address 
                  <small  class="invalidInfo"
                      v-if="$v.email.$dirty && !$v.email.required" 
                  > Fill in the field 
                  </small>
                      <small  class="invalidInfo"
                      v-else-if="$v.email.$dirty && !$v.email.email" 
                  > Fill correct Email
                  </small>
              </label>
              <input type="text" 
              v-model.trim="email" 
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
              >
              <label for="">Password   
                  <small  class="invalidInfo"
                  v-if="$v.password.$dirty && !$v.password.required"
                  > Fill in the field
                  </small>
                  <small  class="invalidInfo"
                  v-else-if="$v.password.$dirty && !$v.password.minLength"
                  >The password must be {{ $v.password.$params.minLength.min }} characters long. It's now {{ password.length }} 
                  </small>
              </label>
              <input type="password"
                v-model.trim="password" 
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
              >
            <button type="sumbit">Log in</button>
            <span class="shippingFormForgot">Forgot Password?</span>
          </form>
      </div>
    </main>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators';
import messages from '../utils/messages';

export default {
    metaInfo() {
        return {
            title: this.$title('Login')
        }
    },
    name: 'login',
    data: () => ({
        email: '',
        password: '',
    }),
    mounted() {
        if(messages[this.$route.query.message]){
            console.log(messages[this.$route.query.message])
            this.$message(messages[this.$route.query.message])
        } 
    },

    validations: {
        email: {email, required},
        password: {required, minLength: minLength(4)},
    },

    methods: {
       async submitHandler() {
            if(this.$v.$invalid){
                this.$v.$touch()
                return
            }
            
            const formData = {
                email: this.email,
                password: this.password
            }

            try {
               await this.$store.dispatch('login', formData)
                this.$router.push('/products')
            } catch (e) {
                //throw new Error(e);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/login.scss';

.invalid {
    outline: 1px solid #f16d7f;
}

.invalidInfo {
    color: #f16d7f;
}
</style>