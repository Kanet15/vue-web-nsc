<template>
  <label
    class="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center"
  >
    <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
    <span
      :class="{
        'slider flex h-[36px] w-[70px] items-center rounded-full p-1 duration-300 ease-in-out': true,
        'bg-gray-300': !isChecked,
        'bg-green-400': isChecked,
      }"
    >
      <span
        :class="{
          'dot h-[28px] w-[28px] rounded-full shadow-md duration-300 ease-in-out transform': true,
          'translate-x-0 bg-white': !isChecked,
          'translate-x-[34px] bg-white': isChecked,
        }"
      ></span>
    </span>
    <span
      class="label flex items-center text-sm font-medium text-dark dark:text-white ml-3"
    >
      Auto Saver
      <span v-if="isChecked"> On </span>
      <span v-else> Off </span>
    </span>
  </label>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isChecked = ref(false);

    const handleCheckboxChange = () => {
      isChecked.value = !isChecked.value;
    };

    return {
      isChecked,
      handleCheckboxChange,
    };
  },
};
</script>

<style scoped>
.autoSaverSwitch .slider {
  transition: background-color 0.3s ease-in-out;
}

.autoSaverSwitch .dot {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
