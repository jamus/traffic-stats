<template>
  <div>countPointDetails {{ countPointID }}
    <ul v-if="CountPointData">
        <li>{{ CountPointData.road_name }}</li>
        <li>{{ CountPointData.region_id }}</li>
        <li>{{ CountPointData.region_name }}</li>
        <li>{{ CountPointData.road_category }}</li>
        <li>{{ CountPointData.road_category_description }}</li>
        <li>{{ CountPointData.road_name }}</li>
        <li>{{ CountPointData.road_type }}</li>
    </ul>
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
