<template>
  <div>
    <select v-model="selected">
      <option disabled value="">road_type</option>
      <option value="major">Major</option>
      <option value="minor">Minor</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'theListFilter',
  data() {
    return {
      selected: ''
    }
  },
  watch: {
    selected: function (newVal) {
      this.updateList(newVal)
    }
  },
  methods: {
    ...mapActions('countPoints', ['updateCountPointsDataFiltered']),
    updateList(val) {
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', val)
      console.log('selected changed!', val);
    }
  }
};
</script>
