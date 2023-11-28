<template>
  <div>
    <Navbar
      :pages="pages"
      :activePage="activePage"
      @navLinkChange="updateActivePage"
    ></Navbar>
    <!-- <PageViewer
      v-if="pages.length"
      :page="pages[activePage]"
    ></PageViewer> -->
    <CreatePage
      @pageCreated="pageCreated"
    >
    </CreatePage>
  </div>
</template>

<script>
import CreatePage from './components/CreatePage.vue'
import Navbar from './components/Navbar.vue'
import PageViewer from './components/PageViewer.vue'

export default {
    components: {
      Navbar,
      PageViewer,
      CreatePage
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
      pageCreated(pageObj) {
        this.pages.push(pageObj)
      },
    },
}
</script>

<style>

</style>