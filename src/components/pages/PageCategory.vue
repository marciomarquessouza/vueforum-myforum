<template>
  <div class="col-full">
      <div class="col-full push-top">
          <h1>{{ category.name }}</h1>
      </div>

      <div class="col-full">
          <div class="forum-list">
              <CategoryListItem :category="category" />
          </div>
      </div>
  </div>
</template>

<script>

import sourceData from '@/data.json';
import CategoryListItem from '@/components/CategoryListItem';

export default {
  components: {
    CategoryListItem,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    category() {
      return sourceData.categories[this.id];
    },
  },
};

</script>
