<template>
  <section class="testimonial">
    <div class="con">
      <h1 class="heading">Our users speak</h1>
      <div class="wrapper" id="testimonial-wrapper" dir="ltr">
        <div class="testimonial">
          <div class="message">
            Duis irure eiusmod et magna ad. Anim duis esse cillum sit commodo
            ullamco occaecat veniam deserunt sunt duis. Esse aute velit do
            officia Lorem tempor ullamco do aliqua enim labore. Laboris nulla
            laboris adipisicing ad aute ex pariatur.
          </div>
          <div class="user-con">
            <div class="user-card">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="info">
                <div class="user-name">John Doe</div>
                <div class="time">CEO, ABC Corporation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="message">
            Duis irure eiusmod et magna ad. Anim duis esse cillum sit commodo
            ullamco occaecat veniam deserunt sunt duis. Esse aute velit do
            officia Lorem tempor ullamco do aliqua enim labore. Laboris nulla
            laboris adipisicing ad aute ex pariatur.
          </div>
          <div class="user-con">
            <div class="user-card">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="info">
                <div class="user-name">John Doe</div>
                <div class="time">CEO, ABC Corporation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="message">
            Duis irure eiusmod et magna ad. Anim duis esse cillum sit commodo
            ullamco occaecat veniam deserunt sunt duis. Esse aute velit do
            officia Lorem tempor ullamco do aliqua enim labore. Laboris nulla
            laboris adipisicing ad aute ex pariatur.
          </div>
          <div class="user-con">
            <div class="user-card">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="info">
                <div class="user-name">John Doe</div>
                <div class="time">CEO, ABC Corporation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="message">
            Duis irure eiusmod et magna ad. Anim duis esse cillum sit commodo
            ullamco occaecat veniam deserunt sunt duis. Esse aute velit do
            officia Lorem tempor ullamco do aliqua enim labore. Laboris nulla
            laboris adipisicing ad aute ex pariatur.
          </div>
          <div class="user-con">
            <div class="user-card">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="info">
                <div class="user-name">John Doe</div>
                <div class="time">CEO, ABC Corporation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="message">
            Duis irure eiusmod et magna ad. Anim duis esse cillum sit commodo
            ullamco occaecat veniam deserunt sunt duis. Esse aute velit do
            officia Lorem tempor ullamco do aliqua enim labore. Laboris nulla
            laboris adipisicing ad aute ex pariatur.
          </div>
          <div class="user-con">
            <div class="user-card">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="info">
                <div class="user-name">John Doe</div>
                <div class="time">CEO, ABC Corporation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <div class="message">
            Duis irure eiusmod et magna ad. Anim duis esse cillum sit commodo
            ullamco occaecat veniam deserunt sunt duis. Esse aute velit do
            officia Lorem tempor ullamco do aliqua enim labore. Laboris nulla
            laboris adipisicing ad aute ex pariatur.
          </div>
          <div class="user-con">
            <div class="user-card">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="info">
                <div class="user-name">John Doe</div>
                <div class="time">CEO, ABC Corporation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="@/assets/images/icons/quotes.svg" alt="" class="abstract-bg" />
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      let testimonial = document.getElementById("testimonial-wrapper");
      setInterval(() => {
        if (testimonial.scrollLeft >= 2000 ) {
          testimonial.scrollLeft = 0;
        } else {
          testimonial.scrollLeft += document.querySelector(".con").offsetWidth;
        }
      }, 5000);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_utils.scss";

.testimonial {
  background-color: $primary-color;
  .con {
    position: relative;
    .heading {
      color: $white;
    }
    .wrapper {
      width: 100%;
      background-color: transparent;
      display: flex;
      position: relative;
      z-index: 2;
      overflow: scroll;
      scroll-behavior: smooth;
      @include for-tablet {
        overflow: hidden;
      }
      .testimonial {
        min-width: 90vw;
        max-width: 90vw;
        padding: 0 1em;
        @include for-tablet {
          min-width: 45vw;
          max-width: 45vw;
        }
        @include for-large {
          min-width: 500px;
          max-width: 500px;
        }
        @include for-extra-large {
          min-width: 433.33px;
          max-width: 433.33px;
        }
        .message {
          width: 100%;
          background-color: $white;
          font-size: 1em;
          text-align: center;
          padding: 0.5em;
          color: $text;
          border-radius: $border-radius;
          margin-bottom: 1em;
          position: relative;
          @include for-tablet {
            padding: 1em;
          }
          &:after {
            content: "";
            display: block;
            width: 16px;
            height: 7px;
            position: absolute;
            top: calc(100% - 1px);
            left: calc(50% - 3px);
            background-color: $white;
            clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
          }
        }
        .user-con {
          width: 100%;
          display: flex;
          justify-content: center;
          .user-card {
            width: fit-content;
          }
        }
      }
    }
    .abstract-bg {
      position: absolute;
      right: 0;
      top: 0;
      width: 100px;
      opacity: 0.3;
      z-index: 1;
    }
  }
}
</style>
