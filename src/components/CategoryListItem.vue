<template>
  <div class="col-full">
    <div class="forum-list">
        <h2 class="list-title">
            <router-link
              :to="{name: 'Category', params: {id:category['.key']}}">
              {{ category.name }}
            </router-link>
        </h2>
    </div>
    <ForumList :forums="forums" />
  </div>
</template>

<script>

import sourceData from '@/data.json';
import ForumList from '@/components/ForumList';

export default {
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
  components: {
    ForumList,
  },
  computed: {
    forums() {
      return Object.values(sourceData.forums)
        .filter(forum => forum.categoryId === this.category['.key']);
    },
  },
};
</script>
