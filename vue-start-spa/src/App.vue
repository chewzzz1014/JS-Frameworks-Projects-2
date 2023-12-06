<template>
  <div>
    <Navbar
      :pages="pages"
    ></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    components: {
      Navbar,
    },
    methods: {
      pageCreated(pageObj) {
        this.pages.push(pageObj)
      },
    },
}
</script>

<style>

</style>