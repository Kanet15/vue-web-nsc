<template>
  <div>
    <Navbar />
    <form @submit.prevent="handleSubmit">
      <div
        class="min-h-screen p-6 bg-gray-100 flex items-center justify-center"
      >
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div
                class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
              >
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div class="lg:col-span-2">
                  <div
                    class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  >
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
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../src/main.js"; // Adjust the path to your firebase config
import Navbar from "../src/components/Navbar.vue";
import { useRouter } from "vue-router";

const firstName = ref("");
const lastName = ref("");
const licensePlate = ref("");
const licensePlateProvince = ref(""); // New field for license plate province

const router = useRouter();

const handleSubmit = async () => {
  try {
    // Log the values to the console
    console.log("First Name:", firstName.value);
    console.log("Last Name:", lastName.value);
    console.log("License Plate:", licensePlate.value);
    console.log("License Plate Province:", licensePlateProvince.value);

    const docRef = await addDoc(collection(firestore, "users"), {
      firstName: firstName.value,
      lastName: lastName.value,
      licensePlate: licensePlate.value,
      licensePlateProvince: licensePlateProvince.value, // Include the new field in the document
    });
    console.log("Document written with ID: ", docRef.id);

    // Clear form fields after successful submission
    firstName.value = "";
    lastName.value = "";
    licensePlate.value = "";
    licensePlateProvince.value = ""; // Clear the new field

    // Alert and redirect
    alert("ลงทะเบียนสำเร็จ");
    router.push("/"); // Redirect to home page ("/")
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>
