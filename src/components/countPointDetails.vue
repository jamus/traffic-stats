<template>
  <div class="relative w-full">
    <h1 class="text-xl px-4">Count Point {{ countPointID }}</h1>
    <div v-if="CountPointData"
        class="text-xs w-full">
        <div class="w-full">
          <!-- <ul class="w-1/2">
            <li>{{ CountPointData.link_length_km }}</li>
            <li>{{ CountPointData.road_name }}</li>
            <li>{{ CountPointData.region_id }}</li>
            <li>{{ CountPointData.region_name }}</li>
          </ul>
          <ul>
            <li>{{ CountPointData.road_category }}</li>
            <li>{{ CountPointData.road_category_description }}</li>
            <li>{{ CountPointData.road_name }}</li>
            <li>{{ CountPointData.road_type }}</li>
          </ul> -->
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
