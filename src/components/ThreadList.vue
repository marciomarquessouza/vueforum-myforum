<template>
  <div>
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <ThreadListItem v-for="thread in threads"
                      :key="thread['.key']"
                      :thread="thread" />
    </div>
  </div>
</template>

<script>

import ThreadListItem from '@/components/ThreadListItem';

export default {
  props: {
    threads: {
      required: true,
      type: Array,
    },
  },
  components: {
    ThreadListItem,
  },
};

</script>
