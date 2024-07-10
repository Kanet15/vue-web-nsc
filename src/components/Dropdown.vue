<template>
  <div>
    <label for="จังหวัดของป้ายทะเบียน">จังหวัดของป้ายทะเบียน</label>
    <div
      class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <!-- Input field -->
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="selectedOption"
        @change="updateSelectedProvince"
        required
      >
        <option
          v-for="option in options"
          :key="option.PROVINCE_ID"
          :value="option.PROVINCE_ID"
        >
          {{ option.PROVINCE_NAME }}
        </option>
      </select>
      <!-- Dropdown select -->
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ProvinceSelector',
  setup() {
    const options = ref([]);
    const selectedOption = ref(null);
    const selectedProvinceName = ref('');

    // Fetch data on component mount
    onMounted(async () => {
      try {
        const response = await fetch('/src/assets/.vendor/Province.json');  // Update this path to match your actual JSON file path
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        options.value = data;
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    });

    // Update selectedProvinceName when selectedOption changes
    const updateSelectedProvince = () => {
      const selectedProvince = options.value.find(option => option.PROVINCE_ID === selectedOption.value);
      if (selectedProvince) {
        selectedProvinceName.value = selectedProvince.PROVINCE_NAME;
      }
    };

    return {
      options,
      selectedOption,
      selectedProvinceName,
      updateSelectedProvince,
    };
  },
});
</script>

<style scoped>
/* Your scoped styles here */
</style>
