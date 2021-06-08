<template>
  <div>
    <div class="row productsWrap">
        <Loader v-if="loading"/> 
        <h1  v-else-if="!products.length">Catalog is empty.</h1>
        <div class="col-lg-4 col-md-6 col-sm-12" v-else
        v-for="product in items"
        :key="product.id"
        >
            <div class="productUnit">
                <div class="featuredImgWrap">
                    <div class="featuredBuy">
                        <button @click.prevent="handleAddToCart(product.id)">
                            <img src="../assets/images/addToCart.png" alt="addToCart">
                            Add to Cart
                        </button>
                    </div>
                    <img :src="getItemImage(product.imageName)" :alt="product.name">
                </div>
                <div class="productName">
                    {{product.name}} 
                </div>
                <div class="productSize">
                    Size: {{ product.size.join(', ')}}
                </div>
                <div class="productPrice">
                    $ {{product.price}}
                </div>
            </div>
        </div>
        <div class="paginationWrap col-12">
            <Paginate
            v-model="page" 
            :page-count="pageCount"
            :click-handler="pageChangeHandler"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
            />
        </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex' 
import paginationMixin from '@/mixins/pagination.mixin'
import messages from '../utils/messages';

export default {
    data: () => ({
        loading: true,
        products: []
    }),
    mixins: [paginationMixin],
    watch: {
        getPageSizeAndSearch(){}
    },
    computed: {
        getPageSizeAndSearch(){
            this.setupPageSize(this.$store.getters.pageSize)
            return this.setupPagination(this.$store.getters.products)
        },
    },
    async mounted() {
        try {
            await this.fetchProducts()
            this.products = this.$store.getters.products
            this.setupPageSize(this.$store.getters.pageSize)
            this.setupPagination(this.products)
            this.loading = false
        } catch (error) {
            //
        }
    },
    methods: {
        ...mapActions(['fetchProducts', 'addProductToCart', 'changeQuantityInCart']),
        async handleAddToCart(idProduct){
            try {
                const currentUserId = JSON.parse(localStorage.getItem('userData')).id
                const isAlreadyAdded = this.$store.getters.cart.filter(item => item.idProduct == idProduct)
                if(isAlreadyAdded.length == 0){
                   const data = await this.addProductToCart({idProduct, currentUserId})
                   this.$message(messages[data.message])
                } else {
                    const quantityMethod = 'increase'
                    const data =  await this.changeQuantityInCart({idProduct, currentUserId, quantityMethod})
                    this.$message(messages[data.message])
                }
            } catch (error) {
                //
            }
        },
        getItemImage(imageName){
            return require(`../assets/images/products/${imageName}`)
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/productList.scss';
@import '@/assets/scss/pagination.scss';
</style>