<template>
  <div>
    <!-- Navbar -->
    <nav
      v-if="showNavbar"
      class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between"
    >
      <!-- Logo and Title -->
      <div class="flex items-center">
        <div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 mr-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/th/0/0a/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B9%81%E0%B8%9E%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2.jpg"
            alt="Logo"
            class="h-full w-full object-cover"
          />
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
          >หน้าหลัก</router-link
        >
        <router-link
          class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/register"
          >เพิ่มบุคลากร</router-link
        >
        <router-link
          class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/inoutdata"
          >ข้อมูลเข้าออก</router-link
        >
        <router-link
          class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          to="/toggle"
          >เปิด-ปิดแผงกั้น</router-link
        >
        <LogoutButton class="ml-4" />
      </div>
    </nav>
  </div>
</template>

<script>
import LogoutButton from "../components/LogoutButton.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  components: {
    LogoutButton,
  },
  setup() {
    const showNavbar = ref(true);

    const handleResize = () => {
      showNavbar.value = window.innerWidth > 768;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      showNavbar,
    };
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
