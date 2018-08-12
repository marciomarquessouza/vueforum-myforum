<template>
  <div>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>
        <PostList :posts="posts" />
        <form @submit.prevent="addPost">
          <div class="form-group">
            <textarea rows="10"
                      cols="30"
                      class="form-input"
                      v-model="initialTextArea"
                      ></textarea>
          </div>
          <div class="form-actions">
            <button class="btn-blue">Submit Post</button>
          </div>
        </form>
    </div>
  </div>
</template>

<script>

import sourceData from '@/data.json';
import PostList from '@/components/PostList';

export default {
  components: {
    PostList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      thread: sourceData.threads[this.id],
      initialTextArea: '',
    };
  },
  methods: {
    addPost() {
      const postId = `great-post ${Math.random()}`;
      const post = {
        publishedAt: Math.floor(Date.now() / 1000),
        text: this.initialTextArea,
        threadId: this.id,
        userId: 'Miej9zSGMRZKDvMXzfxjVOyv3RF3',
        '.key': postId,
      };
      this.$set(sourceData.posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.$set(sourceData.users[post.userId].posts, postId, postId);
    },
  },
  computed: {
    posts() {
      const postIds = Object.keys(this.thread.posts);
      return Object.values(sourceData.posts)
        .filter(post => postIds.includes(post['.key']));
    },
  },
};
</script>
