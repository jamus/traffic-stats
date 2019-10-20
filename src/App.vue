<template>
    <div id="app" class="bg-grey-900 text-grey-500">
      <theListFilter class="p-6 text-center" />
      <div class="text-sm container mx-auto">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import theListFilter from '@/components/theListFilter';
export default {
  name: 'app',
  components: {
    theListFilter
  }
};
</script>

<style src="./main.css"></style>
