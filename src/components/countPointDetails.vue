<template>
  <div class="relative w-full">
    <div v-if="CountPointData"
        class="text-sm w-full">
        <h1 class="text-xl px-10">Count Point {{ countPointID }} ({{ CountPointData.road_name }})</h1>
        <div class="flex px-10 mt-4 mb-8">
          <ul class="w-1/2">
            <li>Length: <strong class="font-bold">{{ CountPointData.link_length_km }}</strong>km</li>
            <li>Local Authority: <strong class="font-bold">{{ CountPointData.local_authority_name }}</strong></li>
            <li>Region: <strong class="font-bold">{{ CountPointData.region_name }}</strong></li>
            <li v-if="CountPointData.start_junction_road_name">Start junction: <strong class="font-bold">{{ CountPointData.start_junction_road_name }}</strong></li>
          </ul>
          <ul>
            <li><strong class="font-bold">{{ CountPointData.road_category }}</strong></li>
            <li>{{ CountPointData.road_category_description }}</li>
            <!-- <li><strong class="font-bold">{{ CountPointData.start_junction_road_name }}</strong></li> -->
            <li>Road type: <strong class="font-bold capitalize">{{ CountPointData.road_type }}</strong></li>
            <li v-if="CountPointData.end_junction_road_name">End junction: <strong class="font-bold">{{ CountPointData.end_junction_road_name }}</strong></li>
          </ul>
        </div>
        <countPointCountData :countPointID="countPointID"/>
        <countPointLocation :coordinates="[CountPointData.longitude, CountPointData.latitude]"/>
    </div>
    <div v-else class=" w-full">
      <h5 class="text-yellow-600">Loading data...</h5>
    </div>
  </div>
</template>
<script>
import countPointLocation from '@/components/countPointLocation';
import countPointCountData from '@/components/countPointCountData';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'countPointDetails',
  components: {
    countPointLocation,
    countPointCountData
  },
  props: {
    countPointID: {
      required: true,
      type: Number
    }
  },
  watch: {
    '$route': 'getData'
  },
  mounted() {
    this.getData();
  },
  methods: {
    ...mapActions('countPointDetail', ['clearCountPointDetailsData']),
    ...mapActions('countPointCounts', ['clearCountPointCountsData']),
    getData() {
      this.clearCountPointDetailsData();
      this.clearCountPointCountsData();
      this.$store.dispatch('countPointDetail/requestCountPointData', this.countPointID)
      .catch(error => {
        this.$store.commit('countPointDetail/setIsRequestingCountPointData', false);
        this.$store.dispatch('countPointDetail/clearPropertyDetailsData');
        console.error('error requestCountPointData');
      });
    },
  },
  computed: {
    ...mapState('countPointDetail', [
      'isRequestingCountPointData',
      'CountPointData'
    ])
  }
};
</script>
