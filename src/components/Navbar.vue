<template>
  <div>
    <!-- Navbar -->
    <nav
      class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between"
    >
      <!-- Logo and Title -->
      <router-link
        class="font-bold text-xl tracking-tight mr-auto mb-2 md:mb-0"
        to="#"
      >
        My Site
      </router-link>

      <!-- Navigation Links -->
      <div class="flex items-center">
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
