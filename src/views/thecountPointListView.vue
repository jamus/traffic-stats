<template>
  <div>
    <theCountPointList />
    <router-view></router-view>
  </div>
</template>
<script>
import theCountPointList from '@/components/theCountPointList.vue';
export default {
  components: {
    theCountPointList
  }
};
</script>
