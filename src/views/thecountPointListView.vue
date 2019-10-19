<template>
  <div class="flex">
    <div class="w-1/3">
      <theCountPointList />
    </div>
    <div class="w-3/4">
      <router-view></router-view>
    </div>
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
