<template>
  <div class="home">
    <vue-logo></vue-logo>
    <vue-logo color1="#ff0000" color2="#0000FF"></vue-logo>
  </div>
</template>

<script>
import VueLogo from "@/components/VueLogo.vue";

export default {
  components: { VueLogo },
  name: "HomeView",
};
</script>
