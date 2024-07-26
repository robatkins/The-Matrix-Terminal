<!-- src/views/TheMatrixPage.vue -->
<template>
  <div>
    
    <TheMatrix msg="Welcome to The Matrix Page!" />
  </div>
</template>

<script>
import TheMatrix from '../components/TheMatrix.vue'; // Adjust the path if needed

export default {
  name: 'TheMatrixPage',
  components: {
    TheMatrix
  }
}
</script>

<style scoped>
/* Add any specific styles for TheMatrixPage here */
</style>