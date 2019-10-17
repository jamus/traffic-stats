<template>
  <div>
    theCountPointList
    <div v-if="isRequestingData" class="p-2 m-2">Making request!</div>
    <div v-if="TrafficFlowData">
      <div v-for="(item, index) in TrafficFlowData" :key="index">
        <router-link :to="{ name:'countPointDetail', params: { id: item.count_point_id }}">
          {{ item.count_point_id }} - {{ item.road_name }} {{ item.road_type }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  mounted() {
    if(!this.TrafficFlowData) {
          this.$store.dispatch('traffic/requestTrafficFlowData')
      .catch(error => {
        this.$store.commit('traffic/setIsRequestingData', false);
        // log error
      })
    }
  },
  computed: {
    ...mapState('traffic', ['isRequestingData', 'TrafficFlowData'])
  }
};
</script>
