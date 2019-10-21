<div>countPointCountChart</div>
<script>
import { Line } from 'vue-chartjs'
export default {
  name: 'countPointCountChart',
  extends: Line,
  data() {
    return {
      options: {
        elements: {
          line: {
            tension: 0
          }
        },
        legend: {
          // display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6,
              padding: 8,
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  },
  props: ['chartData'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
};
</script>
