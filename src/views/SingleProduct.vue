<template>
  <div>
 <main>
    <div class="modelWrap">
        <div class="modelSlider">
            <img src="../assets/images/slider1.jpg" alt="picture">
            <div class="modelSliderLeftArrow">
                <i class="fas fa-angle-left"></i>
            </div>
            <div class="modelSliderRightArrow">
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
        <div class="modelDataWrap">
            <div class="modelData">
                <div class="modelHeader">Women collection</div>
                <div class="modelProductHeader">
                    Moschino Cheap And Chic
                </div>
                <div class="modelProductDesc">
                    Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate
                    collaborative architectures before cutting-edge services. Completely visualize parallel core competencies
                    rather than exceptional portals.
                </div>
                <div class="modelProductDetails">
                    <div>
                        <span class="modelProductParam">Material:</span>
                        <span class="modelProductValue">Cotton</span>
                    </div>
                    <div>
                        <span class="modelProductParam">Designer:</span>
                        <span class="modelProductValue">Binburhan</span>
                    </div>
                </div>
                <div class="modelProductPrice">
                    $561
                </div>
                <form class="modelProductOrder">
                    <div class="modelProductOrderUnit">
                        <label for="">Choose color</label>
                        <div class="modelProductSelectWrap">
                            <i class="fas fa-chevron-down"></i>
                            <div class="modelProductColorValue"></div>
                            <select class="modelProductColor" name="" id="">
                                <option value="">Red</option>
                                <option value="">Green</option>
                                <option value="">Blue</option>
                            </select>
                        </div>
                    </div>
                    <div class="modelProductOrderUnit">
                        <label for="">Choose size</label>
                        <div class="modelProductSelectWrap">
                            <i class="fas fa-chevron-down"></i>
                            <select name="" id="">
                                <option value="">XXL</option>
                                <option value="">XL</option>
                                <option value="">L</option>
                            </select>
                        </div>
                    </div>
                    <div class="modelProductOrderUnit">
                        <label for="">Quantity</label>
                        <input type="text" value="2">
                    </div>
                    <button>
                        <img src="../assets/images/cartPink.png" alt="picture">
                        Add to Cart
                    </button>
                </form>
            </div>
        
        </div>
    </div>

    <div class="containerWrap alsoLike">
        <div class="alsoLikeHeader">
            You may like also
        </div>
        <div class="featuredItems">
            <div class="featuredItem">
                    <div class="featuredImgWrap">
                        <div class="featuredBuy">
                            <button>
                                <img src="../assets/images/addToCart.png" alt="picture">
                                Add to Cart
                            </button>
                        </div>
                        <img class="featuredProduct" src="../assets/images/featuredItem1.jpg" alt="picture">
                    </div>
                    <div class="featuredNameAndPrice">
                        <div class="featuredItemName">
                            Mango People T-shirt
                        </div>
                        <div class="featuredItemPrice">$52.00</div>
                    </div>
            </div>
            <div class="featuredItem">
                <div class="featuredImgWrap">
                    <div class="featuredBuy">
                        <button>
                            <img src="../assets/images/addToCart.png" alt="picture">
                            Add to Cart
                        </button>
                    </div>
                    <img class="featuredProduct" src="../assets/images/featuredItem2.jpg" alt="picture">
                </div>
                <div class="featuredNameAndPrice">
                    <div class="featuredItemName">
                        Mango People T-shirt
                    </div>
                    <div class="featuredItemPrice">$52.00</div>
                </div>
            </div>
            <div class="featuredItem">
                <div class="featuredImgWrap">
                    <div class="featuredBuy">
                        <button>
                            <img src="../assets/images/addToCart.png" alt="picture">
                            Add to Cart
                        </button>
                    </div>
                    <img class="featuredProduct" src="../assets/images/featuredItem3.jpg" alt="picture">
                </div>
                <div class="featuredNameAndPrice">
                    <div class="featuredItemName">
                        Mango People T-shirt
                    </div>
                    <div class="featuredItemPrice">$52.00</div>
                </div>
            </div>
            <div class="featuredItem">
                <div class="featuredImgWrap">
                    <div class="featuredBuy">
                        <button>
                            <img src="../assets/images/addToCart.png" alt="picture">
                            Add to Cart
                        </button>
                    </div>
                    <img class="featuredProduct" src="../assets/images/featuredItem4.jpg" alt="picture">
                </div>
                <div class="featuredNameAndPrice">
                    <div class="featuredItemName">
                        Mango People T-shirt
                    </div>
                    <div class="featuredItemPrice">$52.00</div>
                </div>
            </div>
        </div>
    </div>
    </main>
  </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: this.$title('Single product')
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/singlePage.scss';
</style>