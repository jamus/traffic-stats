<template>
    <div id="app">
      <theListFilter class="p-6 bg-gray-100 text-center" />
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
