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
    <nuxt-link :to="'/'">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      content: '',
    }
  }
}
</script>

<style lang="css">
</style>
