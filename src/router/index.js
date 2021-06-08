import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {layout: 'main'},
    component: () =>import('../views/Home.vue')
  },
  {
    path:"/checkout",
    name: "checkout",
    meta: {layout: 'main'},
    component: () =>import('../views/Checkout.vue')
  },
  {
    path:"/products",
    name: "products",
    meta: {layout: 'main'},
    component: () =>import('../views/ProductsPage.vue')
  },
  {
    path:"/cart",
    name: "cart",
    meta: {layout: 'main'},
    component: () =>import('../views/CartPage.vue')
  },
  {
    path:"/singleproduct",
    name: "singleproduct",
    meta: {layout: 'main'},
    component: () =>import('../views/SingleProduct.vue')
  },
  {
    path:"/login",
    name: "login",
    meta: {layout: 'main'},
    component: () =>import('../views/Login.vue')
  },
  {
    path:"/register",
    name: "register",
    meta: {layout: 'main'},
    component: () =>import('../views/RegisterPage.vue')
  },
  {
    path:"/loginsettings",
    name: "loginsettings",
    meta: {layout: 'main', auth: true},
    component: () =>import('../views/LoginSettings.vue')
  },
  {
    path:"/comments",
    name: "comments",
    meta: {layout: 'main', auth: true},
    component: () =>import('../views/CommentsPage.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = JSON.parse(localStorage.getItem('userData'))
  const requireAuth = to.matched.some(record => record.meta.auth)
  if(requireAuth && (!currentUser || !currentUser.email)){
    next('/login?message=login')
  } else {
    next()
  }
})

export default router;
