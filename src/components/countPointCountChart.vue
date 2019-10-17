<div>countPointCountChart</div>
<script>
import { Line } from 'vue-chartjs'
export default {
  name: 'countPointCountChart',
  extends: Line,
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
};
</script>
