<template>
  <div>
    theCountPointList
    <div v-if="isRequestingCountPointsData" class="p-2 m-2">Making request!</div>
    <div v-if="CountPointsData">
      <div v-for="(item, index) in CountPointsData" :key="index">
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
    if(!this.CountPointsData) {
          this.$store.dispatch('countPoints/requestCountPointsData')
      .catch(error => {
        this.$store.commit('countPoints/setIsRequestingCountPointsData', false);
        // log error
      })
    }
  },
  computed: {
    ...mapState('countPoints', ['isRequestingCountPointsData', 'CountPointsData'])
  }
};
</script>
