<template>
    <div>
        <header class="header">
                <div class="containerWrap headerInside">
                    <div class="logo" >
                        BRAN<span>D</span>
                    </div>
                    <SearchProduct />
                    <router-link class="headerCart" to="/cart">
                        <div class="countItemInCart" v-if="countItemInCart!=0">{{ countItemInCart }}</div>   
                        <img  src="../assets/images/cart.png" alt="cart">
                    </router-link>
                    <b-dropdown  variant="danger">
                        <template #button-content v-if="!name">
                        My account
                        </template>
                        <template #button-content v-else>
                        {{ name }}
                        </template>
                        <b-dropdown-item to="/register" variant="secondary" v-if="!name"><b-icon icon="person-lines-fill"></b-icon> Register</b-dropdown-item>
                        <b-dropdown-item to="/login" variant="secondary" v-if="!name"><b-icon icon="person-fill"></b-icon> Login</b-dropdown-item>
                        <b-dropdown-item to="/loginsettings" variant="secondary" v-if="name"><b-icon icon="gear-fill"></b-icon> Settings</b-dropdown-item>
                        <b-dropdown-item variant="secondary" @click.prevent="logout" v-if="name"><b-icon icon="door-open-fill"></b-icon> Exit</b-dropdown-item>
                    </b-dropdown>
                </div>
            </header>
            
            <Navbar />

            <div class="newArrivalsWrap">
                <div class="containerWrap newArrivals">
                    <h1>New arrivals</h1>
                    <nav>
                        <a href="">Home</a>
                        <span> / </span>
                        <a href="">Men</a>
                        <span> / </span>
                        <a href="">New arrivals</a>
                    </nav>
                </div>
            </div>

            <router-view />


            <div class="subscribeWrap productsPageSubscribe">
                <div class="containerWrap subscribe">
                    <div class="reviews">
                        <div class="reviewUnit">
                            <div class="reviewUnitLeft">
                                <img src="../assets/images/reviewPerson.png" alt="avatar">
                            </div>
                            <div class="reviewUnitRight">
                                <blockquote>
                                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                    a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                                </blockquote>
                                <div class="reviewName">
                                    Bin Burhan
                                </div>
                                <div class="reviewFrom">
                                    Dhaka, Bd
                                </div>
                                <div class="reviewsSwitch">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subscribeDivider"></div>
                    <div class="subscribeRight">
                        <div class="subscribeRightHead">
                            Subscribe
                        </div>
                        <div class="subscribeRightText">
                            FOR OUR NEWLETTER AND PROMOTION
                        </div>
                        <form class="subscribeForm" action="#">
                            <input placeholder="Enter Your Email" type="text">
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <footer class="containerWrap">
                <div class="footerBrand">
                    <div class="logo">
                        BRAN<span>D</span>
                    </div>
                    <div class="footerBrandText1">
                        Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
                        multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
                        processes and cross-unit partnerships.
                    </div>
                    <div class="footerBrandText2">
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                    </div>
                </div>
                <section class="footerColumn">
                    <h2>COMPANY</h2>
                    <nav>
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">About</a>
                        <a href="">How It Works</a>
                        <a href="">Contact</a>
                    </nav>
                </section>
                <section class="footerColumn">
                    <h2>INFORMATION</h2>
                    <nav>
                        <a href="">Tearms &amp; Condition</a>
                        <a href="">Privacy Policy</a>
                        <a href="">How to Buy</a>
                        <a href="">How to Sell</a>
                        <a href="">Promotion</a>
                    </nav>
                </section>
                <section class="footerColumn">
                    <h2>SHOP CATEGORY</h2>
                    <nav>
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">Child</a>
                        <a href="">Apparel</a>
                        <a href="">Browse All</a>
                    </nav>
                </section>
            </footer>
            <div class="copyrights">
                <div class="containerWrap copyrightsWrap">
                    <div class="copyrightsLeft">
                        &copy; Brand All Rights Reserved.  {{date | date('datetime')}}
                    </div>
                    <div class="copyrightsRight">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                        <a href=""><i class="fab fa-pinterest-p"></i></a>
                        <a href=""><i class="fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import SearchProduct from '@/components/SearchProduct'

import messages from '../utils/messages';

export default {
    name: 'main-layout',
    components: {
        Navbar, SearchProduct
    },
    data: () => ({
        date: new Date(),
        interval: null,
    }),
    async mounted() {
       this.interval =  setInterval(()=> {
            this.date = new Date()
        }, 1000)

        const userStorage = localStorage.getItem('userData') 
        if(userStorage){
            this.$store.commit('setInfo', JSON.parse(userStorage))
        } else {
            const guest = {id: 'guest' + new Date().getTime().toString()}
            localStorage.setItem('userData', JSON.stringify(guest))
            this.$store.commit('setInfo', guest)
        }    
    },
    methods: {
        async logout(){
            await this.$store.dispatch('logout')
            window.location.reload()
            this.$router.push('/login?message=logout')
        }
    },
    computed: {
        error(){
           return this.$store.getters.error
        },
        name(){
            return  this.$store.getters.info.name
        },
        countItemInCart(){
            return this.$store.getters.cart.reduce((count, item) => count + item.quantity, 0)
        }
    },
    watch: {
        error(error){
            console.log(messages[error.message])
            this.$error(messages[error.message] || 'Что-то пошло не так')
        },
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>