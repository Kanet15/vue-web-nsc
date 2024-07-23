<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-4 p-4">
    <!-- ปุ่มเปิด -->
    <button
      @click="toggleOn"
      :class="{
        'w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 py-4 rounded-lg text-white text-2xl font-semibold': true,
        'bg-green-500': isOn,
        'bg-gray-300': !isOn,
      }"
      class="transition duration-300 ease-in-out transform hover:scale-105"
    >
      เปิด
    </button>

    <!-- ปุ่มปิด -->
    <button
      @click="toggleOff"
      :class="{
        'w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 py-4 rounded-lg text-white text-2xl font-semibold': true,
        'bg-red-500': isOff,
        'bg-gray-300': !isOff,
      }"
      class="transition duration-300 ease-in-out transform hover:scale-105"
    >
      ปิด
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isOn = ref(false);
    const isOff = ref(false);

    const toggleOn = () => {
      isOn.value = true;
      isOff.value = false;
    };

    const toggleOff = () => {
      isOn.value = false;
      isOff.value = true;
    };

    return {
      isOn,
      isOff,
      toggleOn,
      toggleOff,
    };
  },
};
</script>

<style scoped>
button {
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}
</style>
