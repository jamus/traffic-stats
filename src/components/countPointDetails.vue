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
        <countPointCountData :countPointID="countPointID"/>
    </ul>
    <div v-else>
      Loading...
    </div>
  </div>
</template>
<script>
import countPointCountData from '@/components/countPointCountData';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'countPointDetails',
  components: {
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
