<template>
  <div>
    <div class="mx-auto w-1/5">
      <div class="flex items-center justify-center">
        <input type="radio" id="length" value="length" v-model="filterby" class="toggle toggle-left">
        <label for="length" class="btn">Length</label>
        <input type="radio" id="type" value="type" v-model="filterby" class="toggle toggle-centre">
        <label for="type" class="btn">Type</label>
        <input type="radio" id="category" value="category" v-model="filterby" class="toggle toggle-right">
        <label for="category" class="btn">category</label>
      </div>
    </div>
    <div v-if="filterby === 'length'" class="option flex items-center justify-center">
      <span class="text-sm p-4">0 km</span>
      <span class="w-1/3 inline-block">
        <input type="range" v-model="linkLength" min="0.5" max="20" step=".5">
      </span>
      <span class="text-sm p-4">20 km</span>
    </div>
    <ul v-if="filterby === 'type'" class="option">
      <li>
        <input type="radio" id="all" value="" v-model="type" >
        <label for="all" >both</label>
        <div class="check"></div>
      </li>
      <li>
        <input type="radio" name="minor" id="minor" value="minor" v-model="type" >
        <label for="minor" >minor</label>
        <div class="check"></div>
      </li>
      <li>
        <input type="radio" id="major" value="major" v-model="type" >
        <label for="major" >major</label>
        <div class="check"></div>
      </li>
    </ul>
    <div v-if="filterby === 'category'" class="option">
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
      if (val === 'length') {
        this.updateListForLength(20)
      }
      else if (val === 'type') {
        this.updateListForType()
      }
      else if (val === 'category') {
        this.updateListForCategory()
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
      console.log('updateListForType', config);
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', config )
    },
    updateListForCategory(val) {
      const config = { param: 'road_category', arg: val };
      this.$store.dispatch('countPoints/updateCountPointsDataFiltered', config )
    },
    updateListForLength(val) {
      this.$store.dispatch('countPoints/updateCountPointsDataFilteredByLength', val )
    }
  }
};
</script>
<style lang="scss" scoped>
input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background: none;
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
  border-radius: 1px;
  border: 0px solid #000000;
  @apply bg-yellow-700;
}

input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  // background: #A1D0FF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
  @apply bg-yellow-500;
}


.btn {
  transition: background 600ms ease;
  z-index: 1;
  @apply text-yellow-600 border-2 border-yellow-700 inline-block px-6 py-2 relative text-center;
}

input[type="radio"].toggle {
    display: none;
    & + label{
        text-transform: capitalize;
        cursor: pointer;
        @apply bg-yellow-800;
    }
    &.toggle-left + label {
        border-right: 0;
        @apply rounded rounded-l;
    }
    &.toggle-centre + label {
        border-right: 0;
        margin-left: -4px;
    }
    &.toggle-right + label{
        margin-left: -2px;
        @apply rounded rounded-r;
    }
    &:checked + label {
        cursor: default;
        @apply text-yellow-500 bg-yellow-700;
    }
    
}

.option {
  @apply h-12
}

ul.option {
  @apply pl-4 pt-2 inline-block text-left;

  input[type=radio] {
    top: 0;
    position: absolute;
    visibility: hidden;
  }
  label {
    text-transform: capitalize;
    display: inline-block;
    position: relative;
    margin: 10px auto;
    height: 30px;
    z-index: 9;
    cursor: pointer;
    width: 100%;
    padding: 0 0 0 45px;
    @apply text-yellow-600;
  }

  li {
    position: relative;
    text-align: left;
    display: inline-block;
    width: 130px;
  }
  
  li:hover label {
    @apply text-yellow-500;
  }

  li .check {
  display: inline-block;
  position: absolute;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  top: 10px;
  left: 0;
  @apply border border-2 border-yellow-600  bg-yellow-700;
}

  li:hover .check {
    @apply border border-2 border-yellow-500 bg-yellow-700;
  }

  li .check::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 15px;
    width: 15px;
    top: 3px;
    left: 3px;
    margin: auto;
  }

  input[type=radio]:checked ~ .check {
    // @apply border border-4 border-yellow-500;
  }

  input[type=radio]:checked ~ .check::before{
    @apply bg-yellow-500;
  }

  input[type=radio]:checked ~ label{
    @apply text-yellow-500;
  }
}

</style>