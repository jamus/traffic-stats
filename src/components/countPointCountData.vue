<template>
  <div>
    countPointCountData {{ countPointID }}
    <div v-if="CountPointCountsData && yearsCounted">
      {{ roadDirectionsOfTravel }}
      <div v-for="direction in roadDirectionsOfTravel">
        {{ direction }}
        <countPointCountChart :chartData="chartData(direction)" :options="options" />
        </div>
    </div>
    <div v-else>
      Loading CountPointCountsData 
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import countPointCountChart from '@/components/countPointCountChart';
export default {
  name: 'countPointCountData',
  components: {
    countPointCountChart
  },
  props: {
    countPointID: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      options: {
        lineTension: 0
      }
    };
  },
  mounted() {
    this.$store.dispatch('countPointCounts/requestCountPointCountsData', this.countPointID)
      .catch(error => {
        this.$store.commit('countPointCounts/setIsRequestingCountPointData', false);
        this.$store.dispatch('countPointCounts/clearPropertyDetailsData');
        console.error('error requestCountPointCountsData', error);
      });
  },
  methods: {
    chartData(direction) {
      return {
        labels: this.yearsCounted,
        datasets: [
          this.getDataset(
            this.getVehicleCountByDirection('all_motor_vehicles', direction),
            'All motor vehicles'),
          this.getDataset(
            this.getVehicleCountByDirection('cars_and_taxis', direction),
            'Cars and Taxis'),
          this.getDataset(
            this.getVehicleCountByDirection('two_wheeled_motor_vehicles', direction),
            'Two wheeled motor vehicles')
        ]
      }
    }
  },
  computed: {
    ...mapState('countPointCounts', [
      'isRequestingCountPointCountsData',
      'CountPointCountsData'
    ]),
    ...mapGetters('countPointCounts', [
      'getVehicleCountByDirection',
      'getDataset'
    ]),
    yearsCounted() {
      return [...new Set(this.CountPointCountsData.map(item => item.year))];
    },
    roadDirectionsOfTravel() {
      return [...new Set(this.CountPointCountsData.map(item => item.direction_of_travel))];
      
    }
  }
};
</script>
