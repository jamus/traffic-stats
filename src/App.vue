<template>
    <div id="app">
      <div class="p-6 bg-gray-100 text-center">Filter Goes here</div>
      <div class="text-sm container mx-auto">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {};
  }
};
</script>

<style src="./main.css"></style>
