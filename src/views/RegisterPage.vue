<template>
  <div>
    <main>
      <div class="register containerWrap">                                 
        <div class="registerHead">
            Register and save time!
        </div>
        <div class="registerDesc">Register with us for future convenience</div>

        <div class="registerPoint">
            Fast and easy checkout
        </div>
        <div class="registerPoint">
            Easy access to your order history and status
        </div>
        <form class="registerForm" action="#" @submit.prevent="submitHandler">
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
                <label for="">Name 
                <small  class="invalidInfo"
                    v-if="$v.name.$dirty && !$v.name.required" 
                > Fill in the field 
                </small>
              </label>
              <input type="text" 
              v-model.trim="name" 
              :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
              >
            <input id="reg1" type="checkbox"  v-model="agree"> 
            <label for="reg1">I agree with the terms of use</label>
            <button type="submit">Register</button>
        </form>
      </div>
    </main>
  </div>
</template>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators';
export default {
    metaInfo() {
        return {
            title: this.$title('Register')
        }
    },
    name: 'register',
    data: () => ({
        email: '',
        password: '',
        name: '',
        agree: false
    }),

    validations: {
        email: {email, required},
        password: {required, minLength: minLength(4)},
        name: {required},
        agree: {checked: v => v}
    },

   methods: {
       async submitHandler() {
            if(this.$v.$invalid){
                this.$v.$touch()
                return
            }
            
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            try {
                await this.$store.dispatch('register', formData)
                this.$router.push('/login');
            } catch (error) {
              //  throw new Error()
            }
      
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/register.scss';
.invalid {
    outline: 1px solid #f16d7f;
}

.invalidInfo {
    color: #f16d7f;
}
</style>