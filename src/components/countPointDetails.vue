<template>
  <div>countPointDetails {{ countPointID }}
    <div v-if="CountPointData">
      <div v-for="(item, index) in CountPointData" :key=index>
        {{ item.count_point_id }} - {{ item.year }} - {{ item.direction_of_travel }}
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'countPointDetails',
  props: {
    countPointID: {
      required: true,
      type: Number
    }
  },
  mounted() {
    this.$store.dispatch('countPoint/requestCountPointData', this.countPointID)
      .catch(error => {
        this.$store.commit('countPoint/setIsRequestingCountPointData', false);
        this.$store.dispatch('countPoint/clearPropertyDetailsData');
        console.error('error requestCountPointData');
      });
  },
  computed: {
    ...mapState('countPoint', [
      'isRequestingCountPointData',
      'CountPointData'
    ])
  }
};
</script>
