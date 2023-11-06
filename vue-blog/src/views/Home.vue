<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import {ref} from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: {
    PostList,
  },
  setup() {
    const posts = ref([
      {title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique in mollitia, nihil qui ad iusto ratione pariatur. Sit placeat cupiditate ipsam nobis adipisci. Quam itaque sed eos! Ab, ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus, sint fugiat eveniet aliquid ex, assumenda maxime, pariatur itaque dolore quis natus facilis consequatur nemo beatae? Laudantium consequuntur iusto repellat.', id: 1},
      {title: 'Top 5 CSS tips', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique in mollitia, nihil qui ad iusto ratione pariatur. Sit placeat cupiditate ipsam nobis adipisci. Quam itaque sed eos! Ab, ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam accusamus, sint fugiat eveniet aliquid ex, assumenda maxime, pariatur itaque dolore quis natus facilis consequatur nemo beatae? Laudantium consequuntur iusto repellat.', id: 2},
    ])

    return {posts}
  },
}
</script>

<style>

</style>
