<template>
  <div>
    <form class="searchWrap">
      <div class="searchBrowse">
          Browse <i class="fas fa-caret-down"></i>
      </div>
      <input placeholder="Search for Item..." type="text" v-model="searchQuery">
      <button @click.prevent ="handleSearchClick">
          <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data:() => ({
    searchQuery: ''
  }),
  methods: {
    async handleSearchClick() {
      if(this.$route.path != '/products'){
        await this.$router.push('/products')
      }
      await this.$store.dispatch('searchProduct',this.searchQuery)
    }
  }

}
</script>