<template>
  <div>
    <Navbar />
    <!-- Welcome Text -->
    <div class="text-center text-4xl font-bold my-8">
      WELCOME TO SHOW AT HOME
    </div>
    <!-- Video Section -->
    <section class="container mx-auto p-6 font-mono">
      <div class="flex justify-center mb-8">
        <video
          controls
          class="w-full max-w-3xl h-auto rounded-lg shadow-lg border-4 border-black"
        >
          <source
            src="file:///C:/Users/Lenovo/Pictures/Camera%20Roll/WIN_20240616_10_49_58_Pro.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
/* Additional styling, if needed */
</style>
