<template>
  <div class="post">
      <div class="user-info">
          <a href=# class="user-name">{{ user.name }}</a>
          <a href="profile.html#profile-details">
              <img class="avatar-large"
              :src="user.avatar" alt="">
          </a>
          <p class="desktop-only text-small">{{ userPosts }} posts</p>
          <span class="online desktop-only">online</span>
      </div>

      <div class="post-content">
          <div>
            <p>
              {{ post.text }}
            </p>
          </div>
      </div>
      <AppDate class="post-date text-faded" :timestamp="post.publishedAt" />
  </div>
</template>

<script>

export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  computed: {
    user() {
      return this.$store.state.users[this.post.userId];
    },
    userPosts() {
      return Object.keys(this.user.posts).length;
    },
  },
};

</script>
