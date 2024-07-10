<template>
  <div class="font-sans">
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div
        class="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-md rounded-md"
      >
        <div class="md:max-w-md w-full px-4 py-4">
          <form @submit.prevent="register">
            <div class="mb-12">
              <h3 class="text-gray-800 text-3xl font-extrabold">Sign in</h3>
            </div>
            <!-- Email -->
            <div>
              <label class="text-gray-800 text-xs block mb-2">Email</label>
              <div class="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  required
                  class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
            </div>
            <!-- Password -->
            <div class="mt-8">
              <label class="text-gray-800 text-xs block mb-2">Password</label>
              <div class="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  v-model="password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- Error Message -->
            <div v-if="errMsg" class="mt-4 text-red-500 text-xs">
              {{ errMsg }}
            </div>
            <!-- Sign in -->
            <div class="mt-12">
              <button
                type="submit"
                class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div class="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
          <img
            src="https://readymadeui.com/signin-image.webp"
            class="w-full h-full object-contain"
            alt="login-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const register = async () => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("Successfully signed in!", userCredential.user);
    router.push("/");
  } catch (error) {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
        errMsg.value = "อีเมลไม่ถูกต้อง";
        break;
      case "auth/wrong-password":
        errMsg.value = "รหัสผ่านไม่ถูกต้อง";
        break;
      default:
        errMsg.value = "อีเมล/รหัสผ่าน ไม่ถูกต้อง";
        break;
    }
  }
};
</script>
