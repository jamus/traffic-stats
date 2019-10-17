<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      error: 'getError'
    })
  }
};
</script>

<style src="./main.css"></style>
