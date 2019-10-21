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
      markerCol: 'blue',
      accessToken: 'pk.eyJ1IjoiamF5cmV5bm8iLCJhIjoiY2sxeHdrejg2MDgwMTNjcGgzcnM2YTU5dyJ9.QnKAon8cixzaqDGloGcF2Q', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v11' // your map style
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  mounted() {
    console.log(this.mapbox.Map.resize);
  }
};
</script>
<style scoped>
.map {
  width: 916px;
  height: 400px;
  display: inline-block;
}
.mgl-map-wrapper {
  pointer-events: none;
}
</style>