<template>
  <div class="flex">
    <div class="w-1/3 w-1/3 border-r-2 border-yellow-700 px-6">
      <theCountPointList />
    </div>
    <div class="w-3/4 pr-4">
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
