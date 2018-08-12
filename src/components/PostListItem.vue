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

import sourceData from '@/data.json';
import AppDate from '@/components/AppDate';

export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  components: {
    AppDate,
  },
  computed: {
    user() {
      return sourceData.users[this.post.userId];
    },
    userPosts() {
      return Object.keys(this.user.posts).length;
    },
  },
};

</script>
