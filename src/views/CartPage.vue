<template>
  <div>
    <main>
    <Cart/>

    <div class="containerWrap checkOutWrapCart">
        <section class="shippingAddressWrap">
            <form>
                <h2>Shipping adress</h2>
                <select required>
                    <option>Bangladesh</option>
                    <option>Russia</option>
                    <option>Australia</option>
                </select>
                <input required type="text" placeholder="State">
                <input required type="number" placeholder="Postcode / Zip">
                <button>Get a quote</button>
            </form>
        </section>
        <section class="couponDiscountWrap">
            <h2>Coupon discount</h2>
            <form>
                <label for="state">Enter your coupon code if you have one</label>
                <input id="state" type="text" placeholder="State">
                <button>Apply coupon</button>
            </form>
        </section>
        <div class="grandTotalWrap">
            <div class="grandTotalSub">
                <span>Sub total</span>
                <span>$ {{ total }}</span>
            </div>
            <div class="grandTotalGrand">
                <span>Grand total</span>
                <span>$ {{ total }}</span>
            </div>
            <button>Proceed to checkout</button>
        </div>
    </div>
    </main>
  </div>
</template>
<script>
import Cart from '@/components/Cart';

export default {
    metaInfo() {
        return {
            title: this.$title('Cart')
        }
    },
   name: 'cartPage',
   computed: {
       total() {
           return this.$store.getters.cart.reduce((total, item) => total + item.quantity * item.price, 0)
       }
   },
   components: {
       Cart
   }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/cartPage.scss';
</style>