<template>
  <div>
    <div v-if="isRequestingData" class="p-2 m-2">Making request!</div>
    <form @submit.prevent="submit">
      <button type="submit" class="border-blue rounded-md border p-2">Get greetings</button>
    </form>
    <div v-if="helloData">
      {{ helloData[0].attributes.name }} 👋
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      greeting: null
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('greetings/requestHelloData')
        .catch(error => {
          this.$store.commit('greetings/setIsRequestingData', false);
          // log error
        })
      ;
    }
  },
  computed: {
    ...mapState('greetings', ['isRequestingData', 'helloData'])
  }
};
</script>
