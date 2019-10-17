<template>
  <div>
    countPointCountData {{ countPointID }}
    <div v-if="CountPointCountsData">
      {{ this.getCountsByDirection('E') }}
    </div>
    <div v-else>
      Loading CountPointCountsData 
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'countPointCountData',
  props: {
    countPointID: {
      required: true,
      type: Number
    }
  },
  mounted() {
    this.$store.dispatch('countPointCounts/requestCountPointCountsData', this.countPointID)
      .catch(error => {
        this.$store.commit('countPointCounts/setIsRequestingCountPointData', false);
        this.$store.dispatch('countPointCounts/clearPropertyDetailsData');
        console.error('error requestCountPointCountsData');
      });
  },
  computed: {
    ...mapState('countPointCounts', [
      'isRequestingCountPointCountsData',
      'CountPointCountsData'
    ]),
    ...mapGetters('countPointCounts', [
      'getCountsByDirection'
    ])
  }
};
</script>
