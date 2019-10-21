<template>
  <div class="mt-6">
    <ul class="flex justify-between relative">
      <li :style="{ color: colours.all }"><span>All motor vehicles</span></li>
      <li :style="{ color: colours.cars }"><span>Cars & taxis</span></li>
      <li :style="{ color: colours.hgvs }"><span>HGVs</span></li>
      <li :style="{ color: colours.buses }"><span>Buses & coaches</span></li>
      <li :style="{ color: colours.lgvs }"><span>LGVs</span></li>
      <li :style="{ color: colours.motorbikes }"><span>Motorcycles & scooters</span></li>
      <li :style="{ color: colours.pedals }"><span>Pedal cycles</span></li>
    </ul>
  </div>
</template>
<script>
import COLOURS from '@/constants/colourValues.js';
export default {
  name: 'chartLegend',
  data() {
    return {
      colours: {
        all: COLOURS.ALL_VEHICLES,
        cars: COLOURS.CARS_TAXIS,
        hgvs: COLOURS.HGVS,
        buses: COLOURS.BUSES_COACHES,
        lgvs: COLOURS.LGVS,
        motorbikes: COLOURS.MOTORCYCLES_SCOOTERS,
        pedals: COLOURS.PEDAL_CYCLES
      }
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  padding-left: 36px;
  margin-left: 6px;
  position: relative;
}
li:before {
    content:"·";
    font-size: 120px;
    vertical-align: middle;
    line-height: 16px;
    position: absolute;
    top: -10px;
    left: 0;
}
span {
  @apply text-grey-500;
}
</style>