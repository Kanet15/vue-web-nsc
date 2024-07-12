<template>
  <div>
    <!-- Navbar -->
    <nav
      class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between"
    >
      <!-- Logo and Title -->
      <div class="flex items-center">
        <!-- Assuming you want the logo and text on the same line -->
        <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 mr-2">
          <!-- Adjust size as needed -->
          <img
            src="https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_640.jpg"
            alt="Logo"
            class="h-full w-full object-cover"
          />
          <!-- Adjust object-fit as needed -->
        </div>
        <div class="font-bold text-xl tracking-tight">
          ระบบตรวจสอบการเข้า-ออกรถยนต์
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="flex items-center">
        <router-link
          class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/"
        >
          หน้าหลัก
        </router-link>
        <router-link
          class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/register"
        >
          เพิ่มบุคลากร
        </router-link>
        <router-link
          class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/inoutdata"
        >
          ข้อมูลเข้าออก
        </router-link>
        <router-link
          class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/toggle"
        >
          เปิด-ปิดแผงกั้น
        </router-link>
        <LogoutButton class="ml-4" />
      </div>
    </nav>
  </div>
</template>

<script>
import LogoutButton from "../components/LogoutButton.vue";

export default {
  components: {
    LogoutButton,
  },
};
</script>

<style scoped>
/* Responsive Styles */
@media (max-width: 768px) {
  .flex-wrap {
    flex-wrap: wrap;
  }
  .mr-auto {
    margin-right: auto;
  }
  .ml-4 {
    margin-left: 1rem;
  }
}
</style>
