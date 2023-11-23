<template>
  <v-card class="card--device-controls">
    <router-view />
    Area for device controls
  </v-card>
  <device-table />
</template>

<script>
import { defineComponent } from 'vue'
import DeviceTable from '../components/DeviceTable.vue';
export default defineComponent({
  components: { DeviceTable },
  name: 'HomeView',
})
</script>


<style lang="scss">
  .card {
    &--device-controls {
      height: 6.875rem;
    }
  }
</style>