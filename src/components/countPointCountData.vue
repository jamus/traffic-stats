<template>
  <div class="container px-4">
    <chartLegend />
    <div v-if="CountPointCountsData && yearsCounted"
          class="flex justify-around mt-6 pl-2">
      
      <div v-for="direction in roadDirectionsOfTravel" class="w-1/2">
        <h4 class="text-center">{{ direction | directionString }}</h4>
        <countPointCountChart :chartData="chartData(direction)" />
        </div>
    </div>
    <div v-else>
      <h5 class="text-yellow-600">Loading data...</h5>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import chartLegend from '@/components/chartLegend';
import countPointCountChart from '@/components/countPointCountChart';
export default {
  name: 'countPointCountData',
  components: {
    countPointCountChart,
    chartLegend
  },
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
            'Two wheeled motor vehicles'),
          this.getDataset(
            this.getVehicleCountByDirection('pedal_cycles', direction),
            'Bicycles'),
          this.getDataset(
            this.getVehicleCountByDirection('buses_and_coaches', direction),
            'Buses & coaches'),
          this.getDataset(
            this.getVehicleCountByDirection('lgvs', direction),
            'LGVs'),
          this.getDataset(
            this.getVehicleCountByDirection('all_hgvs', direction),
            'HGVs')
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
  },
  filters: {
    directionString: function (value) {
      let string;
      switch (value) {
        case 'S':
          string = 'South';
          break;
        case 'N':
          string = 'North';
          break;
        case 'E':
          string = 'East';
          break;
        case 'W':
          string = 'West';
          break;
        default:
          string = 'Unknown';
      }
      return string;
    }
  }
};
</script>
