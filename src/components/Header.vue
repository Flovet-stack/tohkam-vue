<template>
  <div>
    <header class="desktop-header">
      <div class="con">
        <div class="logo">
          <img src="@/assets/images/logos/darklogo.png" alt="" />
          <span>Tohkam</span>
        </div>
        <nav :class="{ show: navState }">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Reports</a></li>
            <li>
              <a href="">About</a>
            </li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div class="nav-btns">
            <router-link to="/login" class="btn btn-secondary"
              ><span>Login</span></router-link
            >
            <a href="" class="btn btn-primary"><span>Register</span></a>
          </div>
        </nav>
        <div
          class="nav-toggler"
          :class="{ show: navState }"
          @click="toggleNavState()"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    <div class="nav-overlay" :class="{ show: navState }"></div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navState: false,
    };
  },
  methods: {
    toggleNavState() {
      if (this.navState) {
        this.navState = false;
      } else {
        this.navState = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_utils.scss";

header.desktop-header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 7;
  background-color: $white;
  @include for-large {
    height: 70px;
  }
  .con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      img {
        height: 35px;
        margin-right: 0.3em;
      }
    }
    nav {
      position: fixed;
      background-color: $white;
      top: 0;
      left: 50%;
      transform: translate(-50%, -100%);
      border-radius: $border-radius;
      padding: 3em 1em;
      width: 80vw;
      z-index: 6;
      opacity: 0;
      @include for-tablet {
        max-width: 60vw;
      }
      @include for-large {
        width: auto;
        position: initial;
        transform: translate(0, 0);
        opacity: 1;
        display: flex;
        align-items: center;
        padding: 0;
        ul {
          display: flex;
          align-items: center;
          li {
            width: 100%;
            text-align: center;
            margin-bottom: 0 !important;
            @include for-large {
              width: min-content;
              margin-bottom: 0;
              margin-right: 1em;
            }
            a {
              font-size: 1em;
              color: $text;
              display: block;
              @include for-large {
                word-wrap: normal;
                &:hover {
                  color: $primary-color;
                }
              }
            }
          }
        }
      }
      &.show {
        transform: translate(-50%, -50%);
        top: 50%;
        opacity: 1;
      }
      ul {
        li {
          width: 100%;
          text-align: center;
          margin-bottom: 1em;
          a {
            font-size: 1em;
            color: $text;
          }
        }
      }
      .nav-btns {
        width: 100%;
        @include for-large {
          display: flex;
          align-items: center;
          margin-left: 1em;
        }
        .btn {
          width: 100%;
          margin-bottom: 0.3em;
          justify-content: center;
          display: flex;
          @include for-large {
            width: max-content;
            margin-left: 0.5em;
          }
        }
      }
      @include for-large {
      }
    }
    .nav-toggler {
      width: 25px;
      height: 15px;
      position: relative;
      cursor: pointer;
      @include for-large {
        display: none;
      }
      span {
        height: 2px;
        position: absolute;
        right: 0;
        background-color: $text;
        &:first-child {
          top: 0;
          width: 100%;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
          width: 50%;
        }
        &:last-child {
          bottom: 0;
          width: 75%;
        }
      }
      &.show {
        span {
          &:first-child {
            top: calc(50% - 1px);
            transform: rotateZ(45deg);
          }
          &:nth-child(2) {
            width: 0;
          }
          &:last-child {
            top: calc(50% - 1px);
            width: 100%;
            transform: rotateZ(-45deg);
          }
        }
      }
    }
  }
}
.nav-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($text, 0.3);
  z-index: -1;
  opacity: 0;
  &.show {
    opacity: 1;
    z-index: 4;
  }
}
</style>
