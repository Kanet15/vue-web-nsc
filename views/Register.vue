<template>
    <div class="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-2xl">
      Create an Account
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="register">Submit</button></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router"; // Import router
  
  const email = ref("");
  const password = ref("");
  const router = useRouter();
  
  const register = () => {
    //need .value because ref()
    const auth = getAuth() //from firebase/auth
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Successfully registered!");

        console.log(auth.currentUser)

        router.push('/'); //redirect to the home
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };
  </script>
  
 