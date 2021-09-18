<template>
    <!-- <component :is="AuthLayout"> -->
      <router-view />
    <!-- </component> -->
</template>

<script>
export default {
  name: "Home",
  layout() {
    return this.$route.meta.layout;
  },
};
</script>
