<template>
  <div>
    countPointCountData {{ countPointID }}
  </div>
</template>
<script>
export default {
  name: 'countPointCountData',
  props: {
    countPointID: {
      required: true,
      type: Number
    }
  }
};
</script>
