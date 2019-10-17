<template>
  <div>
    countPointCountData {{ countPointID }}
    <div v-if="CountPointCountsData && yearsCounted">
      <!-- {{ this.getCountsByDirection('E') }} -->
      {{ getAllMotorVehicleCountByDirection }}
      <countPointCountChart :chartData="chartData" :options="options" />
    </div>
    <div v-else>
      Loading CountPointCountsData 
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import countPointCountChart from '@/components/countPointCountChart';
const bacon = {
            label: 'bacon',
            data: [3, 3, 5, 6, 8, 9, 5, 2, 3, 12, 19, 3, 5, 2, 3, 3, 12, 19, 21],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 0
        };
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
  computed: {
    ...mapState('countPointCounts', [
      'isRequestingCountPointCountsData',
      'CountPointCountsData'
    ]),
    ...mapGetters('countPointCounts', [
      'getCountsByDirection',
      'getAllMotorVehicleCountByDirection'
    ]),
    chartData() {
      return {
        labels: this.yearsCounted,
        datasets: [this.allMotorVehiclesDataSet, bacon]
      }
    },
    yearsCounted() {
      return [...new Set(this.CountPointCountsData.map(item => item.year))]; // ES6 has a native object Set to store unique value
    },
    countedNorth() {
      return this.getCountsByDirection('N');
    },
    countedSouth() {
      return this.getCountsByDirection('S');
    },
    countedEast() {
      return this.getCountsByDirection('E');
    },
    countedWest() {
      return this.getCountsByDirection('W');
    },
    allMotorVehiclesDataSet() {
      return {
        label: 'cheese',
        data: this.getAllMotorVehicleCountByDirection('E'),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderWidth: 0
      };
    }
  }
};
</script>
