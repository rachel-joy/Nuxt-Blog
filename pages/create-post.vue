<template lang="html">
  <section>
    <form class="post-form" method="POST">
      <div>
        <label for="title">Title: </label>
        <input id="title" type="text" v-model="title" placeholder="Post Title">
      </div>
      <br>
      <div>
        <label for="description">Description: </label>
        <input id="description" type="text" v-model="description" placeholder="Post Description">
      </div>
      <br>
      <div>
        <label for="content">Content: </label>
        <textarea id="content" v-model="content" placeholder="Post Content"></textarea>
      </div>
      <br>
      <div class="button">
        <button type="submit" @click.prevent="createPost()">Publish Post</button>
      </div>
    </form>
  </section>
</template>

<script>
import  { CREATE_POST } from '../graphql.js'

export default {
  data() {
    return {
      title: '',
      description: '',
      content: '',
    }
  },
  methods: {
    createPost () {
      this.$apollo.mutate({
        mutation: CREATE_POST,
        variables: {
          title: this.title,
          email: this.description,
          password: this.content
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css">
  .post-form {
    margin: 0 auto;
    width: 500px;
    padding: 1em;
  }

  form div + div {
    margin-top: 1em;
  }

  label {
    display: inline-block;
    width: 90px;
    text-align: right;
    margin-right: .5em;
  }

  input, textarea {
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
  }

  textarea {
    vertical-align: top;
    height: 5em;
  }

  .button {
    padding-left: 90px;
    margin-left: .5em;
  }

</style>
