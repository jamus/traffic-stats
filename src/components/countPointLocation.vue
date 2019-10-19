<template>
  <div>
    countPointLocation
    {{ coordinates }}
  </div>
</template>
<script>
export default {
  name: 'countPointLocation',
  props: {
    coordinates: {
      required: true,
      type: Object
    }
  }
};
</script>
