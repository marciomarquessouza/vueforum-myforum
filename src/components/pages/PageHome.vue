<template>
  <div class="col-full">
    <h1>Ana Maria Nerd</h1>
    <ForumList :forums="forums"/>
  </div>
</template>

<script>
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList';

export default {
  components: {
    ForumList,
  },
  data() {
    return {
      forums: Object.values(sourceData.forums),
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
};
</script>
