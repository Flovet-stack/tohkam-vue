<template>
  <div class="login">
    <!-- <img src="@/assets/images/logos/darklogo.png" alt="" /> -->
    <h1>Login</h1>
    <form action="">
      <div class="form-field">
        <div class="icon"><i class="fa fa-user" aria-hidden="true"></i></div>
        <input type="email" name="" id="" placeholder="Email" />
      </div>
      <div class="form-field">
        <div class="icon"><i class="fa fa-user" aria-hidden="true"></i></div>
        <input type="password" name="" id="" placeholder="Password" />
      </div>
      <div class="remember">
        <input type="checkbox" name="remember" id="remember" />
        <label for="remember"> <span></span> Remember Me</label>
      </div>
      <button type="submit" class="btn btn-primary"><span>Login</span></button>

      <p>Forgot password? <router-link to="">Click here</router-link></p>
    </form>
  </div>
</template>

<script>

export default {
  setup() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_utils.scss";

.login {
  text-align: center;
  @include for-tablet {
    width: 350px;
  }
  > img {
    width: 50px;
  }
  h1 {
    font-size: 1.4em;
    font-weight: 500;
    margin-bottom: 1em;
  }
  form {
    width: 100%;
    .form-field {
      width: 100%;
      height: 40px;
      border: 1px solid rgba($border-color, 1);
      border-radius: $border-radius;
      margin-bottom: 0.5em;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba($primary-color, 0.1);
        color: $text;
      }
      input {
        width: calc(100% - 40px);
        height: 38px;
        padding: 0 0.5em;
        color: $text;
      }
    }
    .remember {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 2em;
      label {
        display: flex;
        align-items: center;
        font-size: 1em;
        cursor: pointer;
        span {
          width: 15px;
          height: 15px;
          border: 1px solid $primary-color;
          display: block;
          margin-right: 0.5em;
          &:after {
            display: block;
            content: "";
            width: 100%;
            height: 100%;
            background-color: $primary-color;
            opacity: 0;
          }
        }
      }
      input[type="checkbox"] {
        display: none;
        &:checked {
          ~ label {
            span {
              &::after {
                transform: scale(0.7);
                opacity: 1;
                transition-duration: 0.3s;
                transition-timing-function: cubic-bezier(
                  0.175,
                  0.885,
                  0.32,
                  1.275
                );
              }
            }
          }
        }
      }
    }
    button[type="submit"] {
      width: 100%;
      margin-bottom: 0.5em;
    }
    P {
      margin-bottom: 2em;
    }
  }
  p {
    font-size: 0.8em;
    a {
      color: $primary-color;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
