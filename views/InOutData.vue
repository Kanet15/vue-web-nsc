<template>
  <div>
    <Navbar />
    <!-- Search inputs -->
    <section class="container mx-auto p-6 font-sans">
      <div class="flex mb-8 space-x-4">
        <!-- Name or license plate search -->
        <input
          type="text"
          v-model="searchTerm"
          placeholder="ค้นหาชื่อหรือป้ายทะเบียน"
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-base"
        />

        <!-- Date search -->
        <input
          type="date"
          v-model="searchDate"
          class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-base"
        />

        <!-- Search button -->
        <button
          @click="search"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 text-base"
        >
          ค้นหา
        </button>

        <!-- Refresh button -->
        <button
          @click="resetFilters"
          class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300 text-base"
        >
          รีเฟรช
        </button>
      </div>

      <!-- Records table -->
      <div class="w-full overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr
                class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"
              >
                <th class="px-4 py-3">Date</th>
                <th class="px-4 py-3">ชื่อ-นามสกุล</th>
                <th class="px-4 py-3">ป้ายทะเบียน</th>
                <th class="px-4 py-3 bg-green-100 text-green-800 rounded-md">
                  สถานะการเข้า
                </th>
                <th class="px-4 py-3 bg-red-100 text-red-800 rounded-md">
                  สถานะการออก
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr
                v-for="(record, index) in filteredRecords"
                :key="index"
                class="text-gray-700 border-b"
              >
                <td class="px-4 py-3 border">{{ record.date }}</td>
                <td class="px-4 py-3 font-semibold border">
                  {{ record.name }}
                </td>
                <td class="px-4 py-3 border">
                  <p class="font-semibold text-black">
                    {{ record.licensePlate }}
                  </p>
                </td>
                <td class="px-4 py-3 border">
                  <span :class="getStatusClass(record.timeIn, 'in')">
                    {{ record.timeIn }}
                  </span>
                </td>
                <td class="px-4 py-3 border">
                  <span :class="getStatusClass(record.timeOut, 'out')">
                    {{ record.timeOut }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Navbar from "../src/components/Navbar.vue";

const records = ref([
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-18",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-08",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-09",
    name: "Alice",
    licensePlate: "งง 2468",
    timeIn: "10:00",
    timeOut: "19:00",
  },
  {
    date: "2024-04-10",
    name: "Bob",
    licensePlate: "จจ 1357",
    timeIn: "08:30",
    timeOut: "17:30",
  },
  {
    date: "2024-04-11",
    name: "Emily",
    licensePlate: "ฉฉ 5793",
    timeIn: "07:00",
    timeOut: "16:00",
  },
  {
    date: "2024-04-12",
    name: "David",
    licensePlate: "ชช 8024",
    timeIn: "09:15",
    timeOut: "18:15",
  },
  {
    date: "2024-04-13",
    name: "Sophia",
    licensePlate: "ซซ 6431",
    timeIn: "08:45",
    timeOut: "17:45",
  },
  {
    date: "2024-04-14",
    name: "Liam",
    licensePlate: "ฌฌ 9756",
    timeIn: "07:30",
    timeOut: "16:30",
  },
  {
    date: "2024-04-15",
    name: "Olivia",
    licensePlate: "ญญ 1235",
    timeIn: "10:30",
    timeOut: "19:30",
  },
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-18",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-08",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-09",
    name: "Alice",
    licensePlate: "งง 2468",
    timeIn: "10:00",
    timeOut: "19:00",
  },
  {
    date: "2024-04-10",
    name: "Bob",
    licensePlate: "จจ 1357",
    timeIn: "08:30",
    timeOut: "17:30",
  },
  {
    date: "2024-04-11",
    name: "Emily",
    licensePlate: "ฉฉ 5793",
    timeIn: "07:00",
    timeOut: "16:00",
  },
  {
    date: "2024-04-12",
    name: "David",
    licensePlate: "ชช 8024",
    timeIn: "09:15",
    timeOut: "18:15",
  },
  {
    date: "2024-04-13",
    name: "Sophia",
    licensePlate: "ซซ 6431",
    timeIn: "08:45",
    timeOut: "17:45",
  },
  {
    date: "2024-04-14",
    name: "Liam",
    licensePlate: "ฌฌ 9756",
    timeIn: "07:30",
    timeOut: "16:30",
  },
  {
    date: "2024-04-15",
    name: "Olivia",
    licensePlate: "ญญ 1235",
    timeIn: "10:30",
    timeOut: "19:30",
  },
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-18",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-08",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-09",
    name: "Alice",
    licensePlate: "งง 2468",
    timeIn: "10:00",
    timeOut: "19:00",
  },
  {
    date: "2024-04-10",
    name: "Bob",
    licensePlate: "จจ 1357",
    timeIn: "08:30",
    timeOut: "17:30",
  },
  {
    date: "2024-04-11",
    name: "Emily",
    licensePlate: "ฉฉ 5793",
    timeIn: "07:00",
    timeOut: "16:00",
  },
  {
    date: "2024-04-12",
    name: "David",
    licensePlate: "ชช 8024",
    timeIn: "09:15",
    timeOut: "18:15",
  },
  {
    date: "2024-04-13",
    name: "Sophia",
    licensePlate: "ซซ 6431",
    timeIn: "08:45",
    timeOut: "17:45",
  },
  {
    date: "2024-04-14",
    name: "Liam",
    licensePlate: "ฌฌ 9756",
    timeIn: "07:30",
    timeOut: "16:30",
  },
  {
    date: "2024-04-15",
    name: "Olivia",
    licensePlate: "ญญ 1235",
    timeIn: "10:30",
    timeOut: "19:30",
  },
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-18",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-06",
    name: "Sufyan",
    licensePlate: "กก 1234",
    timeIn: "09:30",
    timeOut: "18:00",
  },
  {
    date: "2024-04-07",
    name: "Stevens",
    licensePlate: "ขข 5678",
    timeIn: "08:00",
    timeOut: "17:00",
  },
  {
    date: "2024-04-08",
    name: "Nora",
    licensePlate: "คค 9101",
    timeIn: "07:45",
    timeOut: "16:15",
  },
  {
    date: "2024-04-09",
    name: "Alice",
    licensePlate: "งง 2468",
    timeIn: "10:00",
    timeOut: "19:00",
  },
  {
    date: "2024-04-10",
    name: "Bob",
    licensePlate: "จจ 1357",
    timeIn: "08:30",
    timeOut: "17:30",
  },
  {
    date: "2024-04-11",
    name: "Emily",
    licensePlate: "ฉฉ 5793",
    timeIn: "07:00",
    timeOut: "16:00",
  },
  {
    date: "2024-04-12",
    name: "David",
    licensePlate: "ชช 8024",
    timeIn: "09:15",
    timeOut: "18:15",
  },
  {
    date: "2024-04-13",
    name: "Sophia",
    licensePlate: "ซซ 6431",
    timeIn: "08:45",
    timeOut: "17:45",
  },
  {
    date: "2024-04-14",
    name: "Liam",
    licensePlate: "ฌฌ 9756",
    timeIn: "07:30",
    timeOut: "16:30",
  },
  {
    date: "2024-04-15",
    name: "Olivia",
    licensePlate: "ญญ 1235",
    timeIn: "10:30",
    timeOut: "19:30",
  },
  // Add more records as needed
]);

const searchTerm = ref("");
const searchDate = ref("");

const getStatusClass = (time, type) => {
  // Type will be either 'in' or 'out'
  if (type === "in") {
    return "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm";
  } else if (type === "out") {
    return "px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm";
  }
  return "";
};

// Computed property to filter records based on search term and date
const filteredRecords = computed(() => {
  const search = searchTerm.value.toLowerCase();
  const date = searchDate.value;

  return records.value.filter((record) => {
    const isNameMatch = record.name.toLowerCase().includes(search);
    const isLicensePlateMatch = record.licensePlate
      .toLowerCase()
      .includes(search);
    const isDateMatch = !date || record.date === date;

    return (isNameMatch || isLicensePlateMatch) && (!date || isDateMatch);
  });
});

// Function to perform search
const search = () => {
  // The search functionality is handled by the computed property
  console.log(
    "Performing search with term:",
    searchTerm.value,
    "and date:",
    searchDate.value
  );
};

// Function to reset search filters
const resetFilters = () => {
  searchTerm.value = "";
  searchDate.value = "";
};
</script>

<style scoped>
/* Additional styling, if needed */
</style>
