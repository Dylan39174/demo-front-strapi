<template>
  <main class="restaurantPage">
    <NavigationLayout />
    <DisplayPanels pageName="restaurant" />
  </main>
</template>

<script>

// @ is an alias to /src

import NavigationLayout from "@/components/layout/NavigationLayout.vue"
import DisplayPanels from "@/components/utility/DisplayPanels.vue"

export default {
  name: "RestaurantView",
  components: {
    NavigationLayout,
    DisplayPanels,
  },
};
</script>