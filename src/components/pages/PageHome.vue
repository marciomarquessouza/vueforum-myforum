<template>
  <div class="col-full">
    <h1>Ana Maria Nerd</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList';

export default {
  components: {
    CategoryList,
  },
  data() {
    return {
      categories: Object.values(this.$store.state.categories),
    };
  },
};
</script>
