<template>
  <section class="partners">
    <div class="con">
      <img src="@/assets/images/vector/Divider.svg" alt="" />
      <div class="partners-con">
        <img src="@/assets/images/logos/darklogo.png" alt="" />
        <img src="@/assets/images/logos/darklogo.png" alt="" />
        <img src="@/assets/images/logos/darklogo.png" alt="" />
        <img src="@/assets/images/logos/darklogo.png" alt="" />
        <img src="@/assets/images/logos/darklogo.png" alt="" />
        <img src="@/assets/images/logos/darklogo.png" alt="" />
        <img src="@/assets/images/logos/darklogo.png" alt="" />
      </div>
      <img src="@/assets/images/vector/Divider.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_utils.scss";

.partners {
  .con {
    > img {
      width: 100%;
    }
    .partners-con {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      img {
        width: 50px;
        margin: 0.5rem;
        @include for-tablet {
          width: 70px;
          margin: 0.8rem;
        }
      }
    }
  }
}
</style>
