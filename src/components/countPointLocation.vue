<template>
  <div class="container map pl-8 mt-8">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="coordinates" :zoom="14" :interactive=false>
      <MglMarker :coordinates="coordinates" :color="markerCol" />
    </MglMap>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
import COLOURS from '@/constants/colourValues.js';
export default {
  name: 'countPointLocation',
  components: {
    MglMap,
    MglMarker
  },
  props: {
    coordinates: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      markerCol: COLOURS.ALL_VEHICLES,
      accessToken: 'pk.eyJ1IjoiamF5cmV5bm8iLCJhIjoiY2sxeHdrejg2MDgwMTNjcGgzcnM2YTU5dyJ9.QnKAon8cixzaqDGloGcF2Q', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/jayreyno/ck20xk4tu0rgk1crp2pex3jpo' // your map style
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>
<style scoped>
.map {
  width: 880px;
  height: 350px;
  display: inline-block;
}
.mgl-map-wrapper {
  pointer-events: none;
}
</style>