<template>
  <div :class="$style.centeredBody">
    <h1 :class="$style.headingLarge">Page Not Found</h1>
    <p :class="$style.bodyTextLarge">Sorry, we coudn't find out your content. Go to
      <router-link :to="{name:'PageHome'}">
        Home
      </router-link>
      my friend.
    </p>
  </div>
</template>

<style module>
  .headingLarge {
    font-size: 100px;
  }
  .bodyTextLarge {
    font-size: 50px;
    font-weight: 100px;
  }
  .centeredBody {
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
