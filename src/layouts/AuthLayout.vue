<template>
  <div class="auth-layout">
    <header>
      <div class="con">
        <router-link to="/"
          ><img src="@/assets/images/logos/darklogo.png" alt="" class="logo"
        /></router-link>
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
        <p>Nice to meet you</p>
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
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_utils.scss";

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
          @include for-tablet {
            font-size: 1em;
            padding: 0.5em 1em;
          }
        }
      }
    }
  }
  .sec-1 {
    display: none;
    @include for-large {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    background-color: $primary-color;
    text-align: center;
    color: $white;
    background-image: url("../assets/images/bg/BG-Mask.png");
    background-size: cover;
    .sub {
      width: 70%;
      height: auto;
      img {
        width: 80%;
        margin: 0 auto;
        margin-top: 2em;
      }
    }
  }
  .sec-2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    @include for-large {
      width: 50%;
    }
  }
}
</style>
