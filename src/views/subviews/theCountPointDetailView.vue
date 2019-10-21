<template>
  <div class="fixed top-0 mt-32 pt-4">
    <countPointDetails :countPointID="id"/>
  </div>
</template>
<script>

import countPointDetails from '@/components/countPointDetails';
export default {
  name: 'theCountPointDetailView',
  components: {
    countPointDetails
  },
  props: {
    id: {
      required: true,
      type: Number
    }
  }
};
</script>
