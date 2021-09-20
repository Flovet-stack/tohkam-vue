<template>
  <div class="auth-layout">
    <div class="sec-1">sec 1</div>
    <div class="sec-2">
      sec-2
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.auth-layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
}
</style>
