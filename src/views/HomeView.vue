<template>
  <main class="homePage">
    <NavigationLayout />
    <DisplayPanels pageName="homePage" />
  </main>
</template>

<script>

// @ is an alias to /src

import NavigationLayout from '@/components/layout/NavigationLayout.vue'
import DisplayPanels from '@/components/utility/DisplayPanels.vue'

export default {

  name: 'HomeView',
  components: {
    NavigationLayout,
    DisplayPanels
  },
}

</script>
