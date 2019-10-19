<template>
  <div>
    <select v-model="type">
      <option disabled value="">Road Type</option>
      <option value="major">Major</option>
      <option value="minor">Minor</option>
    </select>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'theListFilter',
  data() {
    return {
      type: ''
    }
  },
  watch: {
    type: function (newVal) {
      this.updateListForType(newVal)
    }
  },
  methods: {
    ...mapActions('countPoints', ['updateCountPointsDataFiltered']),
    updateListForType(val) {
      const config = { param: 'road_type', arg: val };
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', config )
      console.log('type changed!', val);
    }
  }
};
</script>
