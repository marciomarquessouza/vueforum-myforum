<template>
  <div class="thread">
      <div>
          <p>
              <router-link :to="{name: 'PageThreadShow', params: {id: thread['.key']}}">
                {{ thread.title }}
              </router-link>
          </p>
          <p class="text-faded text-xsmall">
              By <a href="#">{{ user.name }}</a>, yesterday.
          </p>
      </div>

      <div class="activity">
          <p class="replies-count">
              {{ repliesCount }} replies
          </p>

          <img class="avatar-medium" :src="user.avatar" alt="">

          <div>
              <p class="text-xsmall">
                  <a href="profile.html">{{ user.name }}</a>
              </p>
              <p class="text-xsmall text-faded">2 hours ago</p>
          </div>
      </div>
  </div>
</template>

<script>

import sourceData from '@/data.json';

export default {
  props: {
    thread: {
      required: true,
      type: Object,
    },
  },
  computed: {
    repliesCount() {
      return Object.keys(this.thread.posts).length - 1;
    },
    user() {
      return sourceData.users[this.thread.userId];
    },
  },
};

</script>
