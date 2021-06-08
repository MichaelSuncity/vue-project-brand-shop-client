<template>
  <div>
    <nav class="topNav">
      <router-link
        v-for="link in links"
        :key="link.url"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
        >
        <a href="#">{{link.title}}</a>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data:() => ({
    links: [
      {title: 'Home', url: '/', exact: true},
      {title: 'Products', url: '/products'},
      {title: 'Single Product', url: '/singleproduct'},
      {title: 'Cart', url: '/cart'},
      {title: 'Comments', url: '/comments'},
      {title: 'Checkout', url: '/checkout'},
    ]
  })

}
</script>

<style lang="scss"  scoped>
@import '@/assets/scss/navbar.scss';
</style>