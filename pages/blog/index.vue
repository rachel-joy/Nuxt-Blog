<template lang="html">
  <div>
    <navbar/>
    <section v-for="post in allPosts" :key="post.id" class="post-list">
      <nuxt-link :to="'/blog/' + post.id">{{ post.title }}</nuxt-link>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      title: '',
      description: '',
      content: '',
      allPosts: ''
    }
  },
  apollo: {
    allPosts: {
      query: gql `query allPosts{
        allPosts {
          nodes {
            id
            title
            content
            description
            createdAt
          }
        }
      }`,
      update(data) {
        console.log(data)
        return data.allPosts.nodes
      }
    }
  }
}
</script>

<style lang="css">
  .post-list {
    padding-top: 20px;
  }
</style>
