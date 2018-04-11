<template lang="html">
  <nav>
      <router-link id="nav-logo" :to="{ path: '/' }">Home</router-link>
      <router-link :to="{ path: '/blog' }">Blog</router-link>
      <router-link id="nav-right" :to="{ path: '/create-post' }">New Post</router-link>
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
    /* background-color: #0D4052; */
    overflow: hidden;
  }

  nav a {
    display: block;
    float: left;
    font-family: sans-serif;
    font-size: 15px;
    color: #0D4052;
    text-decoration: none;
    padding-top: 18px;
    padding-right: 10px;
    padding-bottom: 15px;
    padding-left: 10px;
   }

   nav a:nth-child(n+2) {
     float: right;
   }


  nav a:hover {
    background-color: #3B8070;
  }

  #nav-logo {
    margin-left: 5%;
    font-size: 20px;
  }

</style>
