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

      <div class="post-date text-faded"
            :title="post.publishedAt | humanFriendlyDate">
          {{ post.publishedAt | difHumanFriendly }}
      </div>
  </div>
</template>

<script>

import sourceData from '@/data.json';
import moment from 'moment';

export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  computed: {
    user() {
      return sourceData.users[this.post.userId];
    },
    userPosts() {
      return Object.keys(this.user.posts).length;
    },
  },
  filters: {
    humanFriendlyDate(date) {
      return moment.unix(date).locale('pt-BR').format('DD MMMM YYYY, h:mm:ss a');
    },
    difHumanFriendly(date) {
      return moment.unix(date).locale('pt-BR').fromNow();
    },
  },
};

</script>
