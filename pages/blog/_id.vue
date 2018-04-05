<template lang="html">
  <article>
    <header>
        <h2>{{ post.title }}</h2>
        <h3>{{ post.description }}</h3>
        <p>{{ post.createdAt | date }}</p>
    </header>
    <p>{{ post.content }}</p>
  </article>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      post: ''
    }
  },
  filters: {
    date: function(value) {
      const date = new Date(value)
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
      // const timestampSplit = value.split('T');
      // const dateComponent = timestampSplit[0];
      // return dateComponent;
    }
  },
  apollo: {
    post: {
      query: gql `query post($id: Int!) {
        postById(id: $id) {
          createdAt
          title
          description
          content
        }
      }`,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
      update(data) {
        console.log(data)
        return data.postById;
      }
    }
  }
}
</script>

<style lang="css">
</style>
