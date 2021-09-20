<template>
  <!-- <component :is="layout"> -->
  <router-view />
  <!-- </component> -->
</template>

<script>
export default {
  name: "Home",
  data() {},
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
