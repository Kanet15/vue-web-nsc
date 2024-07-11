<template>
  <!-- component -->
  <section class="container mx-auto p-6 font-mono">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr
              class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"
            >
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">ชื่อ-นามสกุล</th>
              <th class="px-4 py-3">ป้ายทะเบียน</th>
              <th class="px-4 py-3">เวลาเข้า</th>
              <th class="px-4 py-3">เวลาออก</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              v-for="(record, index) in records"
              :key="index"
              class="text-gray-700"
            >
              <td class="px-4 py-3 text-sm border">{{ record.date }}</td>
              <td class="px-4 py-3 text-md font-semibold border">
                {{ record.name }}
              </td>
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-black">
                      {{ record.licensePlate }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-xs border">
                <span :class="getStatusClass(record.timeIn)">{{
                  record.timeIn
                }}</span>
              </td>
              <td class="px-4 py-3 text-xs border">
                <span :class="getStatusClass(record.timeOut)">{{
                  record.timeOut
                }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const records = ref([
  {
    date: "6/4/2024",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "6/4/2024",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "6/4/2024",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  // Add more records as needed
]);

const getStatusClass = (time) => {
  return "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm";
};
</script>

<style>
/* Your styles here */
</style>
