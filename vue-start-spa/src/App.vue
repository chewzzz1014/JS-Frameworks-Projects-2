<template>
  <div>
    <Navbar
      :pages="pages"
      :activePage="activePage"
      @navLinkChange="updateActivePage"
    ></Navbar>
    <PageViewer
      v-if="pages.length"
      :page="pages[activePage]"
    ></PageViewer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageViewer from './components/PageViewer.vue'

export default {
    components: {
      Navbar,
      PageViewer
    },
    data() {
      return {
        activePage: 0,
        pages: [],
      }
    },
    created() {
      this.getPages()
    },
    methods: {
      updateActivePage(index) {
        this.activePage = index
      },
      async getPages() {
        let res = await fetch('http://localhost:3000/pages')
        let data = await res.json()
        this.pages = data
      },
    },
}
</script>

<style>

</style>