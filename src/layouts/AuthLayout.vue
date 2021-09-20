<template>
  <div class="auth-layout">
    <header>
      <div class="con">
        <img src="@/assets/images/logos/darklogo.png" alt="" class="logo" />
        <p>
          Already have an account?
          <router-link to="" class="btn btn-primary"
            ><span>Login here</span></router-link
          >
        </p>
      </div>
    </header>
    <div class="sec-1">
      <div class="sub">
        <h1>Welcome</h1>
        <p>Nive to meet you</p>
        <img src="@/assets/images/illustrations/rafiki.svg" alt="" />
      </div>
    </div>
    <div class="sec-2">
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
  header {
    position: fixed;
    left: 0;
    top: 0;
    padding: 1em 0;
    width: 100vw;
    .con {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 40px;
      }
      p {
        display: flex;
        align-items: center;
        font-size: 0.8em;
        .btn {
          margin-left: 0.3em;
          padding: 0.3em 1em;
          font-size: 0.8em;
        }
      }
    }
  }
  .sec-1 {
    display: none;
  }
  .sec-2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
}
</style>
