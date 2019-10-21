<template>
    <div id="app" class="text-grey-500">
      <theListFilter class="p-6 text-center fixed w-full bg-grey-900" />
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
