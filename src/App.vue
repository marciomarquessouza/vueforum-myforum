<template>
  <div id="app">
    <TheNavBar/>
    <router-view/>
  </div>
</template>

<script>

import TheNavBar from '@/components/TheNavBar';

export default {
  components: {
    TheNavBar,
  },
};
</script>

<style>
  @import "assets/css/style.css"
</style>
