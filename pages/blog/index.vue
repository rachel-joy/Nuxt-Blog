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
