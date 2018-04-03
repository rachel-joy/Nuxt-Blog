<template lang="html">
  <div>
    <nuxt-link :to="'/'">Home</nuxt-link>
    <div>
      <ul>
        <li v-for="post in allPosts"
            :key="post.id"> {{ post.title }}</li>
      </ul>
    </div>
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
      query: gql `query allPosts {
        query {
          allPosts {
            nodes {
              id
              title
              content
              description
              createdAt
            }
          }
        }
      }`
    }
  }
}
</script>

<style lang="css">
</style>
