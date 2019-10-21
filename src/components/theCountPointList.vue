<template>
  <div class="mt-32 pt-4">
    <div v-if="isRequestingCountPointsData" class="pt-4"><h1 class="text-xl px-4">Loading...</h1></div>
    <div v-if="doHaveRoadList">
      <h1 class="text-xl px-4">Count points</h1>
      <div v-for="(item, index) in CountPointsDataFiltered" :key="index">
        <router-link :to="{ name:'countPointDetail', params: { id: item.count_point_id }}">
          <div class="my-4 mx-2 px-2 py-3 bg-grey-900 hover:text-yellow-500 text-yellow-600 border-b-2 border-yellow-700">
            <h3 class="text-lg">{{ item.count_point_id }}</h3>
            <h3 class="text-lg">{{ item.road_name }}</h3> 
          {{ item.link_length_km }}km - {{ item.road_category }} {{ item.road_type }}
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h1 class="text-xl px-4">None match you selection</h1>
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
    ...mapState('countPoints', ['isRequestingCountPointsData', 'CountPointsDataFiltered']),
    doHaveRoadList() {
      return this.CountPointsDataFiltered.length;
    }
  }
};
</script>
