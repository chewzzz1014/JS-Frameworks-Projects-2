<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost v-for="(post, idx) in sampleBlogPost" :key="idx" :post="post"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';

export default {
  name: "Home",
  components: {
    BlogPost
  },
  data() {
    return {
      photoRootPath: '../assets/blogPhotos/',
      welcomeScreen: {
        title: 'Welcome!',
        blogPost: 'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: 'This is a Filter Title',
          blogHTML: 'this is a filter blog post title',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'This is a Filter Title 2',
          blogHTML: 'this is a filter blog post title',
          blogCoverPhoto: 'designed-for-everyone'
        }
      ]
    }
  },
};
</script>