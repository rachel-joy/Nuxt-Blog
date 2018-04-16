<template lang="html">
  <nav>
      <router-link id="nav-logo" :to="{ path: '/' }">Nuxt Blog</router-link>
      <router-link :to="{ path: '/blog' }">Blog Posts</router-link>
      <router-link :to="{ path: '/create-post' }">New Post</router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
  nav {
    width: 100%;
    height: 50px;
    display: flex;
    /* background-color: #0D4052; */
    /* overflow: hidden; */
  }

  nav a {
    font-family: sans-serif;
    font-size: 1em;
    color: #0D4052;
    text-decoration: none;
    padding-top: 18px;
    padding-right: 10px;
    padding-bottom: 15px;
    padding-left: 10px;
   }

   nav a:nth-child(n+2) {
     /* float: right; */
   }


  nav a:hover {
    text-decoration: underline;
    /* background-color: #3B8070; */
  }

  #nav-logo {
    flex: 1;
    margin-left: 5%;
    font-size: 2em;
  }

</style>
