<template lang="html">
  <div>
    <section v-for="post in allPosts" :key="post.id">
      <nuxt-link :to="'/blog/' + post.id">{{ post.title }}</nuxt-link>
    </section>
    <nuxt-link :to="'/'">Home</nuxt-link>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
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
</style>
