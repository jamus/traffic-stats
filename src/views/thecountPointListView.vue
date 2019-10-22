<template>
  <div class="flex wrap">
    <div class="left">
      <div class="viewport">
        <theCountPointList />
      </div>
    </div>
    <div class="right">
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
<style lang="scss" scoped>
.wrap {
  display: flex;
}

.right {
  flex-basis: 65%;
}

.left {
  overflow: hidden;
  flex-basis: 35%;
  height: 100vh; 
  overflow-y: auto;
  overflow-x: hidden;
}
.viewport {
    overflow: auto;

    /* Make sure the inner div is not larger than the container
     * so that we have room to scroll.
     */
    max-height: 100%;

    /* Pick an arbitrary margin/padding that should be bigger
     * than the max width of all the scroll bars across
     * the devices you are targeting.
     * padding = -margin
     */
    margin-right: -100px;
    padding-right: 100px;
}
</style>