<template>
  <div>
    <Navbar
      :pages="pages"
      :activePage="activePage"
      @navLinkChange="updateActivePage"
    ></Navbar>
    <PageViewer
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
        pages: [
          {
            link: {text: 'Home', url: 'home.html'},
            pageTitle: 'Home Page',
            content: 'This is the home content'
          },
          {
            link: {text: 'About', url: 'about.html'},
            pageTitle: 'About Page',
            content: 'This is the about content'
          },
          {
            link: {text: 'Contact', url: 'contact.html'},
            pageTitle: 'Contact Page',
            content: 'This is the contact content'
          }, 
        ],
      }
    },
    methods: {
      updateActivePage(index) {
        this.activePage = index
      },
    },
}
</script>

<style>

</style>