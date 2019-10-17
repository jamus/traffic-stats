<template>
  <div>
    theCountPointDetailView<hr>
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
