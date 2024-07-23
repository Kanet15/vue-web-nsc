<template>
  <div>
    <Navbar />
    <Togglebutton />
  </div>
</template>
<script>
import Togglebutton from "../src/components/Togglebutton.vue";
import Navbar from "../src/components/Navbar.vue";

export default {
  components: {
    Navbar,
    Togglebutton,
  },
};
</script>
