<template>
  <div>
    <h1>Teste</h1>
    <div v-for="thread in threads" :key="thread.key">
      <h2>{{ thread.title }}</h2>
      <div v-for="postId in thread.posts"  :key="postId.key">
        <p>{{ posts[postId].text }}</p>
        <h3>{{ users[posts[postId].userId].name }}</h3>
      </div>
      </div>
    </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
};
</script>
