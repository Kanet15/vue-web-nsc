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
                  {{ record.FirstName }} {{ record.LastName }}
                </td>
                <td class="px-4 py-3 border">
                  <p class="font-semibold text-black">
                    {{ record.licensePlate }}
                  </p>
                </td>
                <td class="px-4 py-3 border">
                  <span :class="getStatusClass(record.timeIn, 'in')">
                    {{ formatTimestamp(record.timeIn) }}
                  </span>
                </td>
                <td class="px-4 py-3 border">
                  <span :class="getStatusClass(record.timeOut, 'out')">
                    {{ formatTimestamp(record.timeOut) }}
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
import { ref, computed, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../src/components/Navbar.vue";
import { firestore } from "../src/main"; // Adjust the path as needed

const records = ref([]);
const searchTerm = ref("");
const searchDate = ref("");

// ฟังก์ชันแปลง timestamp เป็นรูปแบบวันที่และเวลา
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp); // ใช้ timestamp ที่เป็น milliseconds
  return date.toLocaleString("th-TH", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Bangkok", // ใช้ timezone ที่ต้องการ
  });
};

const fetchRecords = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "TimeUser"));
    records.value = querySnapshot.docs.map((doc) => doc.data());
    console.log("Records fetched:", records.value);
  } catch (error) {
    console.error("Error fetching records:", error);
  }
};

onMounted(() => {
  fetchRecords();
});

const getStatusClass = (time, type) => {
  if (type === "in") {
    return "px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm";
  } else if (type === "out") {
    return "px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm";
  }
  return "";
};

const filteredRecords = computed(() => {
  const search = searchTerm.value.toLowerCase();
  const date = searchDate.value;

  return records.value.filter((record) => {
    const name = record.FirstName
      ? `${record.FirstName} ${record.LastName}`.toLowerCase()
      : "";
    const licensePlate = record.licensePlate
      ? record.licensePlate.toLowerCase()
      : "";

    const isNameMatch = name.includes(search);
    const isLicensePlateMatch = licensePlate.includes(search);
    const isDateMatch = !date || record.date === date;

    return (isNameMatch || isLicensePlateMatch) && isDateMatch;
  });
});

const search = () => {
  console.log(
    "Performing search with term:",
    searchTerm.value,
    "and date:",
    searchDate.value
  );
};

const resetFilters = () => {
  searchTerm.value = "";
  searchDate.value = "";
  console.log("Filters reset");
};
</script>
