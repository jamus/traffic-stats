<template>
  <div>
    countPointCountData {{ countPointID }}
    <div v-if="CountPointCountsData">
      <!-- {{ this.getCountsByDirection('E') }} -->
      <!-- {{ chartData }} -->
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
const cheese = {
            label: 'cheese',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        };
const bacon = {
            label: 'bacon',
            data: [3, 3, 5, 6, 8, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      chartData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [cheese, bacon]
      },
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
        console.error('error requestCountPointCountsData');
      });
  },
  computed: {
    ...mapState('countPointCounts', [
      'isRequestingCountPointCountsData',
      'CountPointCountsData'
    ]),
    ...mapGetters('countPointCounts', [
      'getCountsByDirection'
    ])
  }
};
</script>
