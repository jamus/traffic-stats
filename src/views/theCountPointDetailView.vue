<template>
  <div>
    theCountPointDetailView<hr>
    <countPointDetails :countPointID="id"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

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
  },
  beforeRouteLeave(to, from, next) {
    console.log('leaving');
    this.clearCountPointCountsData();
    this.clearCountPointDetailsData();
    next();
  },
  methods: {
    ...mapActions('countPointDetail', ['clearCountPointDetailsData']),
    ...mapActions('countPointCounts', ['clearCountPointCountsData'])
  }
};
</script>
