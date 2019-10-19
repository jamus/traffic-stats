<template>
  <div>
    <div>
      <input type="radio" id="type" value="type" v-model="filterby">
      <label for="type">Type</label>
      <br>
      <input type="radio" id="category" value="category" v-model="filterby">
      <label for="category">category</label>
    </div>
    <div v-if="filterby === 'type'">
      <select v-model="type">
        <option disabled value="">Road Type</option>
        <option value="major">Major</option>
        <option value="minor">Minor</option>
      </select>
    </div>
    <div v-if="filterby === 'category'">
      <select v-model="category">
        <option disabled value="">Road category</option>
        <option value="TM">M or Class A Trunk Motorway</option>
        <option value="PM">M or Class A Principal Motorway</option>
        <option value="TA">Class A Trunk road</option>
        <option value="PA">Class A Principal road</option>
        <option value="MB">Class B road</option>
        <option value="MCU">Class C and Unclassified road</option>
      </select>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'theListFilter',
  data() {
    return {
      filterby: 'type',
      type: '',
      category: ''
    }
  },
  watch: {
    type: function (newVal) {
      this.category = '';
      this.updateListForType(newVal)
    },
    category: function (newVal) {
      this.type = '';
      this.updateListForCategory(newVal)
    }
  },
  methods: {
    ...mapActions('countPoints', ['updateCountPointsDataFiltered']),
    updateListForType(val) {
      const config = { param: 'road_type', arg: val };
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', config )
      console.log('type changed!', val);
    },
    updateListForCategory(val) {
      const config = { param: 'road_category', arg: val };
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', config )
      console.log('road_category changed!', val);
    }
  }
};
</script>
