<template>
  <div>
      <div class="containerWrap shoppingCart">
      <Loader v-if="loading" />
      <h2 class="emptyHead" v-else-if="!cart.length">Your cart is empty. You may add products in cart on <router-link class="link" to="/products">Products page</router-link></h2>
        <div class="shoppingGridRow shoppingGridRowHead" v-else>
            <div>Product details</div>
            <div class="productPrice">Unite price</div>
            <div class="productQty">Quantity</div>
            <div class="productShipping">Shipping</div>
            <div class="productSubtotal">Subtotal</div>
            <div class="productAction">Action</div>
        </div>
        <section class="shoppingGridRow" 
        v-for="item in cart"
        :key="item.id">
            <div class="product">
                <img :src="getItemImage(item.imageName)" :alt="item.imageName">
                <div class="productDetails">
                    <h2 class="productName">
                        {{ item.name }}
                    </h2>
                    <div class="productColor">
                        <span class="productParam">Color:</span> Red
                    </div>
                    <div class="productSize">
                        <span class="productParam">Size:</span> XII
                    </div>
                </div>
            </div>
            <div class="productPrice">$ {{ item.price }}</div>
            <div class="productQty">
              <div>
                <button @click.prevent="decreaseQuantity(item.idProduct)">-</button>
              </div>
              <div>
                {{ item.quantity}}
              </div>
              <div>
                <button @click.prevent="increaseQuantity(item.idProduct)">+</button>
              </div>
            </div>
            <div class="productShipping">FREE</div>
            <div class="productSubtotal">$ {{ item.price * item.quantity}}</div>
            <div class="productAction" @click.prevent="clearProductInCart(item.idProduct)">
                <i class="fas fa-times-circle"></i>
            </div>
        </section>
    </div>

    <div class="containerWrap shoppingBtnsWrap">
        <button @click.prevent="clearCart">Clear shopping cart</button>
        <button @click.prevent="continueShopping">Continue shopping</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex' 
import messages from '../utils/messages';

export default {
    data: () => ({
        loading: true,
    }),
    computed:{...mapGetters(['cart'])},
    async mounted() {
        const currentUserId = this.$store.getters.info.id
        await this.fetchCart(currentUserId)
        this.loading = false
    },
    methods: {
        ...mapActions(['fetchCart', 'clearUserCart', 'changeQuantityInCart', 'removeProductInCart']),
        async clearCart(){
          const currentUserId = this.$store.getters.info.id
          const data = await this.clearUserCart(currentUserId)
          this.$message(messages[data.message])
        },
        getItemImage(imageName){
            return require(`../assets/images/products/${imageName}`)
        },
        continueShopping(){
          this.$router.push('/products')
        },
        async increaseQuantity(idProduct){
          const currentUserId = this.$store.getters.info.id
          const quantityMethod = 'increase'
          const data = await this.changeQuantityInCart({idProduct, currentUserId, quantityMethod})
          this.$message(messages[data.message])
        },
        async decreaseQuantity(idProduct){
          const product = this.$store.getters.cart.filter(item => item.idProduct == idProduct)[0]
          const currentUserId = this.$store.getters.info.id
          if(product.quantity > 1) {
            const quantityMethod = 'decrease'
            const data =  await this.changeQuantityInCart({idProduct, currentUserId, quantityMethod})
            this.$message(messages[data.message])
          } else {
            const data =  await this.removeProductInCart({idProduct, currentUserId})
            this.$message(messages[data.message])
          }
        },
        async clearProductInCart(idProduct){
          const currentUserId = this.$store.getters.info.id
          const data =  await this.removeProductInCart({idProduct, currentUserId})
          this.$message(messages[data.message])
        }
    },
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/cart.scss';
</style>