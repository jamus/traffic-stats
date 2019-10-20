<template>
  <div>
    <div class="flex items-center">
      <div class="flex-1">
        <input type="radio" id="length" value="length" v-model="filterby">
        <label for="length">Length in km</label>
      </div>
      <div class="flex-1">
        <input type="radio" id="type" value="type" v-model="filterby">
        <label for="type">Type</label>
      </div>
      <div class="flex-1">
        <input type="radio" id="category" value="category" v-model="filterby">
        <label for="category">category</label>
      </div>
    </div>
    <div v-if="filterby === 'length'">
      link_length_km
      0<input type="range" v-model="linkLength" min="0.5" max="20" step=".5">20
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
      category: '',
      linkLength: 20
    }
  },
  watch: {
    filterby: function (val) {
      this.type = '';
      this.category = '';
      this.linkLength = 20;
      if (val === 'length') {
        console.log('updateListForLength');
        this.updateListForLength(20)
      }
    },
    type: function (newVal) {
      this.updateListForType(newVal)
    },
    category: function (newVal) {
      this.updateListForCategory(newVal)
    },
    linkLength: function (newVal) {
      this.updateListForLength(newVal)
    }
  },
  methods: {
    ...mapActions('countPoints', ['updateCountPointsDataFiltered']),
    updateListForType(val) {
      const config = { param: 'road_type', arg: val };
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', config )
    },
    updateListForCategory(val) {
      const config = { param: 'road_category', arg: val };
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', config )
    },
    updateListForLength(val) {
      this.$store.dispatch('countPoints/updateCountPointsDataFilteredByLength', val )
      console.log('linkLength changed!', val);
    }
  }
};
</script>
<style scoped>
input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497E3;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #2497E3;
}
input[type=range]:focus::-ms-fill-upper {
  background: #2497E3;
}
</style>