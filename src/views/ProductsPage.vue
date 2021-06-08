<template>
  <div>
    <main>
    <div class="containerWrap">
        <div class="container productsContainer">
            <div class="row">
                <div class="col-md-3">
                    <div class="accordion" id="productsMenuWrap">
                    <div class="productsMenu">
                        <div  class="productsMenuToggler">
                        <div v-b-toggle.collapse-1>Category</div>
                        </div>
                        <b-collapse visible id="collapse-1">
                            <b-card class="productsMenuUnits">      
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">Hoodies &amp; Sweatshirts</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Pants</a>
                            <a href="#">Polos</a>
                            <a href="#">Shirts</a>
                            <a href="#">Shoes</a>
                            <a href="#">Shorts</a>
                            <a href="#">Sweaters &amp; Knits</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Tanks</a></b-card>
                        </b-collapse>
                    </div>
                    <div class="productsMenu">
                        <div  class="productsMenuToggler">
                        <div v-b-toggle.collapse-2>Brand</div>
                        </div>
                        <b-collapse  id="collapse-2">
                            <b-card class="productsMenuUnits">      
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">Hoodies &amp; Sweatshirts</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Pants</a>
                            <a href="#">Polos</a>
                            <a href="#">Shirts</a>
                            <a href="#">Shoes</a>
                            <a href="#">Shorts</a>
                            <a href="#">Sweaters &amp; Knits</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Tanks</a></b-card>
                        </b-collapse>
                    </div>
                    <div class="productsMenu">
                        <div  class="productsMenuToggler">
                        <div v-b-toggle.collapse-3>Designer</div>
                        </div>
                        <b-collapse  id="collapse-3">
                            <b-card class="productsMenuUnits">      
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">Hoodies &amp; Sweatshirts</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Pants</a>
                            <a href="#">Polos</a>
                            <a href="#">Shirts</a>
                            <a href="#">Shoes</a>
                            <a href="#">Shorts</a>
                            <a href="#">Sweaters &amp; Knits</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Tanks</a></b-card>
                        </b-collapse>
                    </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row productsParams">
                        <div class="col-md-4">
                            <div class="productsParamHead">Trending now</div>
                            <div class="trendingParamsWrap">
                                <span class="trendingParam">Bohemian</span>    
                                <span class="trendingDivider">|</span>    
                                <span class="trendingParam">Floral</span>    
                                <span class="trendingDivider">|</span>    
                                <span class="trendingParam">Lace</span> 
                                <span class="trendingParam">Floral</span>    
                                <span class="trendingDivider">|</span>    
                                <span class="trendingParam">Lace</span>    
                                <span class="trendingDivider">|</span>    
                                <span class="trendingParam">Bohemian</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="productsParamHead">Size</div>
                            <div class="sizesWrap">
                                <div v-for="size in sizes" :key="size">
                                    <input :id="size" type="checkbox" :name="size" :value="size" v-model="checkedSizes">
                                    <span class="productsCheckbox"></span>
                                    <label :for="size">{{ size.toUpperCase() }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 priceParams">
                            <div class="productsParamHead">Price</div>
                            <img src="../assets/images/priceRange.svg" alt="priceRange">
                            <div class="priceRangeValues">
                                <span>$52</span>
                                <span>$400</span>
                            </div>
                        </div>
                        </div>
                    <form class="sorter">
                        <div class="sorterUnit">
                            <label for="sortBy">Sort By</label>
                            <select name="" id="sortBy" v-model="sortMethod">
                                <option value=""></option>
                                <option value="nameAz">Name a-z</option>
                                <option value="nameZa">Name z-a</option>
                                <option value="pricelow">Price from low to high</option>
                                <option value="pricehigh">Price from high to low</option>
                            </select>
                        </div>
                        
                        <div class="sorterUnit">
                            <label for="show">Show</label>
                            <select name="" id="show" v-model="pageSize">
                                <option value="9">09</option>
                                <option value="6">06</option>
                                <option value="3">03</option>
                            </select>
                        </div>
                    </form>
                        <Product />
                    <div class="paginationWrap">
                        <button @click.prevent="viewAll">View All</button>
                        <button @click.prevent="refresh">Refresh</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
        <div class="benefits">
            <div class="containerWrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4">
                            <img src="../assets/images/offerDetails1.png" alt="picture">
                            <div class="benefitHeader">Free Delivery</div>
                            <div class="benefitText">
                                Worldwide delivery on all. Authorit 
                                tively morph next-generation innov 
                                tion with extensive models.
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <img src="../assets/images/offerDetails2.png" alt="picture">
                            <div class="benefitHeader">Sales &amp; discounts</div>
                            <div class="benefitText">
                                Worldwide delivery on all. Authorit 
                                tively morph next-generation innov 
                                tion with extensive models.
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <img src="../assets/images/offerDetails3.png" alt="picture">
                            <div class="benefitHeader">Quality assurance</div>
                            <div class="benefitText">
                                Worldwide delivery on all. Authorit 
                                tively morph next-generation innov 
                                tion with extensive models.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product';
export default {
    metaInfo() {
        return {
            title: this.$title('Products')
        }
    },
   name: 'products',
    data: () => ({
        pageSize: 6,
        sortMethod: '',
        sizes:['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
        checkedSizes: []
    }),
    components: {
        Product
    },
    async mounted() {
        await this.$store.dispatch('changePageSize', this.pageSize)
    },
    watch: {
        async pageSize(){
            await this.$store.dispatch('changePageSize', this.pageSize)
        },
        async sortMethod(){
            const products = this.$store.getters.products
            const sortMethod = this.sortMethod
            await this.$store.dispatch('changeSort', {products, sortMethod})
        },
        async checkedSizes(){
            if(this.checkedSizes.length != 0){
                await this.$store.dispatch('checkSizes', this.checkedSizes)
            }  else {
                this.sortMethod = ''
                this.pageSize = 6
                await this.$store.dispatch('fetchProducts')
            }
        }
    },
    methods: {
        viewAll(){
            this.pageSize = this.$store.getters.products.length;
        },
        async refresh(){
            try {
                this.sortMethod = ''
                this.pageSize = 6
                this.checkedSizes = []
                await this.$store.dispatch('fetchProducts')
            } catch (error) {
                //
            }
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/productPage.scss';
</style>