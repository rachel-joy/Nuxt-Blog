<template lang="html">
  <div>
    <h3>Create a New Post</h3>
    <br>
    <input v-model="title" type="text" name="title" value="" placeholder="title">
    <br>
    <input v-model="description" type="text" name="description" value="" placeholder="description">
    <br>
    <input v-model="content" type="text" name="content" value="" placeholder="content">
    <br>
    <br>
    <button @click="create()" type="button" name="button">Create Post</button>
    <br>
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

const createPost = gql `
  mutation createPost($title: String!, $description: String!, $content: String!) {
    createPost(title: $title, description: $description, content: $content) {
      id
      createdAt
      title
      description
      content
    }
  }`

export default {
  data() {
    return {
      title: '',
      description: '',
      content: '',
    }
  },
  methods: {
    create() {
      const title = this.title
      const description = this.description
      const content = this.content

      this.$apollo.mutate({
        mutation: createPost,
        variables: {
          title,
          description,
          content
        }
      })
    }
  },
  apollo: {
    allPosts: gql `query allPosts {
      allPosts{
        id
        title
        description
        content
        createdAt
      }
    }`
  }
}
</script>

<style lang="css">
</style>
