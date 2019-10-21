<template>
  <div class="sticky top-0 mt-32 pt-6">
    <countPointDetails :countPointID="id"/>
    <div class="flex justify-between mx-8 mt-12 pb-24">
      <div>
        <h5>Placement by Category</h5>
        <img src="@/assets/chart-rank-1.svg">
      </div>
      <div>
        <h5>Placement by Type</h5>
        <img src="@/assets/chart-rank-2.svg">
      </div>
      <div>
        <h5>Placement by Length</h5>
        <img src="@/assets/chart-rank-3.svg">
      </div>
    </div>
  </div>
</template>
<script>

import countPointDetails from '@/components/countPointDetails';
export default {
  name: 'theCountPointDetailView',
  components: {
    countPointDetails
  },
  props: {
    id: {
      required: true,
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 200px;
}
</style>