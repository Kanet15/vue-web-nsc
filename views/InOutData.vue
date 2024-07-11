<template>
  <!-- component -->
  <section class="container mx-auto p-6 font-mono">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3">ป้ายทะเบียน</th>
              <th class="px-4 py-3">ชื่อ-นามสกุล</th>
              <th class="px-4 py-3">เวลาเข้า-ออก</th>
              <th class="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="(record, index) in records" :key="index" class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  
                  <div>
                    <p class="font-semibold text-black">{{ record.licensePlate }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-md font-semibold border">{{ record.name }}</td>
              <td class="px-4 py-3 text-xs border">
                <span :class="getStatusClass(record.status)">{{ record.status }}</span>
              </td>
              <td class="px-4 py-3 text-sm border">{{ record.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Sample data - replace with your actual data or fetch from API
const records = ref([
  {
    licensePlate: 'กก 1234',
    name: 'Sufyan',
    status: '09:30-18:00',
    date: '6/4/2024',
    
  },
  {
    licensePlate: 'ขข 5678',
    name: 'Stevens',
    status: '08:00-17:00',
    date: '6/4/2024',
    
  },
  {
    licensePlate: 'คค 9101',
    name: 'Nora',
    status: '07:45-16:15',
    date: '6/4/2024',
   
  },
  // Add more records as needed
]);

// Function to determine status class based on status value
const getStatusClass = (status) => {
  switch (status) {
    case '09:30-18:00':
      return 'px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm';
    case '08:00-17:00':
    return 'px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm';
    case '07:45-16:15':
    return 'px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm';
    default:
      return '';
  }
};
</script>
