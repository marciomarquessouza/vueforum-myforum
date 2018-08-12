<template>
  <span :title="timestamp | humanFriendlyDate">
      {{ timestamp | difHumanFriendly }}
  </span>
</template>

<script>

import moment from 'moment';

export default {
  props: {
    timestamp: {
      required: true,
      type: Number,
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
