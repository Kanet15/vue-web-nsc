<template>
  <div>
    <Navbar />
    <form @submit.prevent="handleSubmit">
      <div
        class="min-h-screen p-6 bg-gray-100 flex items-center justify-center"
      >
        <div class="container mx-auto px-4">
          <div class="bg-white rounded shadow-lg p-4 md:p-8 mb-6">
            <div class="grid gap-4 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="first_name">ชื่อ</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      v-model="firstName"
                      required
                    />
                  </div>
                  <div class="md:col-span-5">
                    <label for="last_name">นามสกุล</label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      v-model="lastName"
                      required
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="license_plate">ป้ายทะเบียน</label>
                    <input
                      type="text"
                      name="license_plate"
                      id="license_plate"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      v-model="licensePlate"
                      placeholder="กรอกป้ายทะเบียน"
                      required
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="license_plate_province"
                      >จังหวัดของป้ายทะเบียน</label
                    >
                    <input
                      type="text"
                      name="license_plate_province"
                      id="license_plate_province"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      v-model="licensePlateProvince"
                      placeholder="กรอกจังหวัดของป้ายทะเบียน"
                      required
                    />
                  </div>

                  <div class="md:col-span-5 text-right">
                    <button
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <transition name="fade">
      <Alert
        v-if="showAlert"
        :message-title="alertTitle"
        :message="alertMessage"
        @dismiss="onDismissAlert"
      />
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../src/main.js";
import Navbar from "../src/components/Navbar.vue";
import Alert from "../src/components/Alert.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    Navbar,
    Alert,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const licensePlate = ref("");
    const licensePlateProvince = ref("");
    const showAlert = ref(false);
    const alertTitle = ref("");
    const alertMessage = ref("");
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        const docRef = await addDoc(collection(firestore, "users"), {
          firstName: firstName.value,
          lastName: lastName.value,
          licensePlate: licensePlate.value,
          licensePlateProvince: licensePlateProvince.value,
        });
        console.log("Document written with ID: ", docRef.id);

        firstName.value = "";
        lastName.value = "";
        licensePlate.value = "";
        licensePlateProvince.value = "";

        alertTitle.value = "การลงทะเบียนสำเร็จ!";
        alertMessage.value = "การลงทะเบียนของคุณสำเร็จแล้ว.";
        showAlert.value = true;
      } catch (e) {
        console.error("Error adding document: ", e);
        alertTitle.value = "เกิดข้อผิดพลาด!";
        alertMessage.value = "ไม่สามารถลงทะเบียนได้ กรุณาลองใหม่.";
        showAlert.value = true;
      }
    };

    const onDismissAlert = () => {
      showAlert.value = false;
      router.push("/");
    };

    return {
      firstName,
      lastName,
      licensePlate,
      licensePlateProvince,
      showAlert,
      alertTitle,
      alertMessage,
      handleSubmit,
      onDismissAlert,
    };
  },
};
</script>

<style scoped>
/* Fade transition for alert */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Responsive styles for the form container */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
