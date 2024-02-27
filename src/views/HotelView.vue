<template>
  <main class="hotelPage">
      <NavigationLayout />
      <DisplayPanels pageName="hotel" /> 
  </main>
</template>

<script>

// @ is an alias to /src

import NavigationLayout from '@/components/layout/NavigationLayout.vue'
import DisplayPanels from '@/components/utility/DisplayPanels.vue'

export default {
  name: "HotelView",
  components: {
      DisplayPanels,
      NavigationLayout
  }
};
</script>