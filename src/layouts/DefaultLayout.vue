<template>
  <Header />
  <div class="slot-con"><slot /></div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_utils.scss";

.slot-con {
  margin-top: 50px;
  @include for-tablet {
    margin-top: 70px;
  }
}
</style>
