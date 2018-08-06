<template>
  <div class="col-full">
    <h1>Page Not Found</h1>
    <p>Sorry, we coudn't find out your content. Got to
      <router-link :to="{name:'PageHome'}">
        Home
      </router-link>
      my friend.
    </p>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 50px;
    font-weight: 100px;
  }
  div {
    text-align: center;
  }
</style>
