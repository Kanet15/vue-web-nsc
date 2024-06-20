<template>
  <div class="">
    <nav> 
    <router-link to ="/"> Home </router-link>
    <router-link to = "/feed"> Feed </router-link>
    <router-link to = "/register"> Register</router-link>
    <router-link to = "/sign-in"> sign-in </router-link>
  </nav>
  </div>
  <router-view />
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>