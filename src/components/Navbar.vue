<template>
  <div>
    <!-- Navbar -->
    <nav
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

      <!-- Hamburger Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none"
      >
        <font-awesome-icon :icon="isMenuOpen ? 'times' : 'bars'" />
      </button>

      <!-- Navigation Links -->
      <div
        :class="[
          'flex items-center',
          { hidden: !isMenuOpen && windowWidth <= 768 },
          'md:flex',
        ]"
      >
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

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMenuOpen && windowWidth <= 768"
      class="fixed inset-0 bg-white z-50 flex flex-col"
    >
      <!-- Close Button -->
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 text-gray-800 text-2xl focus:outline-none"
      >
        <font-awesome-icon icon="times" />
      </button>

      <!-- Menu Links -->
      <div class="flex flex-col space-y-4 mt-12 px-4">
        <router-link
          class="block py-2 text-lg text-gray-800 border-b border-gray-300 w-full"
          to="/"
          @click="closeMenu"
          >หน้าหลัก</router-link
        >
        <router-link
          class="block py-2 text-lg text-gray-800 border-b border-gray-300 w-full"
          to="/register"
          @click="closeMenu"
          >เพิ่มบุคลากร</router-link
        >
        <router-link
          class="block py-2 text-lg text-gray-800 border-b border-gray-300 w-full"
          to="/inoutdata"
          @click="closeMenu"
          >ข้อมูลเข้าออก</router-link
        >
        <router-link
          class="block py-2 text-lg text-gray-800 border-b border-gray-300 w-full"
          to="/toggle"
          @click="closeMenu"
          >เปิด-ปิดแผงกั้น</router-link
        >
        <LogoutButton
          class="block py-2 text-lg text-gray-800 w-full"
          @click="closeMenu"
        />
      </div>
    </div>
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
    const isMenuOpen = ref(false);
    const windowWidth = ref(window.innerWidth);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
      windowWidth,
    };
  },
};
</script>

<style scoped>
/* Additional Styles for Mobile Menu */
@media (max-width: 768px) {
  .fixed {
    display: flex;
  }
}
</style>
