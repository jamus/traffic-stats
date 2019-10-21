<template>
  <div class="container map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="coordinates" :zoom="14" :interactive=false>
      <MglMarker :coordinates="coordinates" color="blue" :offset="[418,0]" />
    </MglMap>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
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
      accessToken: 'pk.eyJ1IjoiamF5cmV5bm8iLCJhIjoiY2sxeHdrejg2MDgwMTNjcGgzcnM2YTU5dyJ9.QnKAon8cixzaqDGloGcF2Q', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v11' // your map style
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
  width: 400px;
}
.mgl-map-wrapper {
  pointer-events: none;
}
</style>