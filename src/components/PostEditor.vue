<template>
  <form @submit.prevent="addPost">
    <div class="form-group">
      <textarea rows="10"
                cols="30"
                class="form-input"
                v-model="text"
                ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit Post</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true,
    },
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addPost() {
      const postId = `great-post ${Math.random()}`;
      const post = {
        publishedAt: Math.floor(Date.now() / 1000),
        text: this.text,
        threadId: this.threadId,
        userId: 'Miej9zSGMRZKDvMXzfxjVOyv3RF3',
        '.key': postId,
      };
      this.text = '';
      this.$emit('save', { post });
    },
  },
};
</script>
