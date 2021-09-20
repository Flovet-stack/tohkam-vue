<template>
  <section class="donate">
    <div class="con">
      <div class="sec-1">
        <h1>We help people get through their personal issues</h1>
        <p>
          The long journey to end voilence begins with one action of generousity
        </p>
      </div>
      <div class="sec-2">
        <h2>Donate to our cause</h2>
        <form action="">
          <div class="options">
            <div class="option">
              <input type="radio" name="amount" id="for-500" />
              <label for="for-500">
                <span>500</span>
                <img src="../assets/images/icons/check.svg" alt="" />
              </label>
            </div>
            <div class="option">
              <input type="radio" name="amount" id="for-1000" />
              <label for="for-1000">
                <span>1,000</span>
                <img src="../assets/images/icons/check.svg" alt="" />
              </label>
            </div>
            <div class="option">
              <input type="radio" name="amount" id="for-1500" />
              <label for="for-1500">
                <span>1,500</span>
                <img src="../assets/images/icons/check.svg" alt="" />
              </label>
            </div>
            <div class="option">
              <input type="radio" name="amount" id="for-2000" />
              <label for="for-2000">
                <span>2,000</span>
                <img src="../assets/images/icons/check.svg" alt="" />
              </label>
            </div>
            <div class="option">
              <input type="radio" name="amount" id="for-5000" />
              <label for="for-5000">
                <span>5,000</span>
                <img src="../assets/images/icons/check.svg" alt="" />
              </label>
            </div>
            <div class="option">
              <input type="radio" name="amount" id="for-10000" />
              <label for="for-10000">
                <span>10,000</span>
                <img src="../assets/images/icons/check.svg" alt="" />
              </label>
            </div>
          </div>
          <div class="or"><span>OR</span></div>
          <div class="field">
            <input type="number" name="" id="" min="1" required />
            <label for="">Enter your own amount</label>
          </div>
          <p>Thanks in advance for your donation</p>
          <button type="submit" class="btn btn-secondary">
            <span>Donate</span>
          </button>
        </form>
      </div>
    </div>
    <img
      src="../assets/images/vector/vector-1.svg"
      alt=""
      class="abstract-bg"
    />
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

.donate {
  width: 100%;
  background-color: $primary-light;
  position: relative;
  .con {
    @include for-tablet {
      display: flex;
    }
    .sec-1 {
      width: 100%;
      margin-bottom: 2rem;
      @include for-tablet {
        margin-bottom: 0;
        margin-top: 2em;
      }
      @include for-large {
        width: calc(100% - 500px);
        padding-right: 4em;
      }
      h1 {
        font-size: 1.6em;
        color: $secondary-color;
        margin-bottom: 0.5em;
        @include for-large {
          font-size: 2.3em;
          width: 70%;
        }
      }
      p {
        @include for-large {
          font-size: 1.3em;
        }
      }
    }
    .sec-2 {
      width: 100%;
      background-color: $white;
      padding: 2em 1em;
      border-radius: $border-radius;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      @include for-large {
        width: 500px;
        padding: 3em;
      }
      h2 {
        font-size: 1.6em;
        margin-bottom: 1rem;
      }
      .options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        .option {
          width: 100%;
          input {
            display: none;
          }
          label {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0.5em 0;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            text-align: center;
            cursor: pointer;
            position: relative;
            color: $text;
            &::after {
              content: "FCFA";
              display: block;
              position: absolute;
              right: 4px;
              bottom: 4px;
              font-size: 0.7em;
              color: $border-color;
            }
            img {
              position: absolute;
              right: 2px;
              top: 2px;
              opacity: 0;
            }
          }
          input:checked ~ label {
            background-color: rgba($orange, 0.1);
            border: 1px solid $orange;
            &::after {
              font-size: 0.7em;
              color: $orange;
            }
            span {
              color: $orange;
              font-weight: 500;
            }
            img {
              opacity: 1;
            }
          }
        }
      }
      .or {
        width: 100%;
        text-align: center;
        margin: 1em 0;
        color: #aaa;
        position: relative;
        span {
          background-color: $white;
          padding: 0 0.5em;
          position: relative;
          z-index: 2;
        }
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: #aaa;
        }
      }
      .field {
        width: 100%;
        position: relative;
        input {
          width: 100%;
          padding: 1em;
          border: 1px solid $border-color;
          border-radius: $border-radius;
          font-size: 1em;
        }
        label {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0.5em, -50%);
          color: $text;
          font-size: 1em;
        }
        input:valid,
        input:hover,
        input:focus {
          border-color: $orange;
          + label {
            color: $orange;
            padding: 0 0.5em;
            top: 0;
            background-color: $white;
            font-size: 0.8em;
          }
        }
      }
      p {
        margin: 0.5em 0;
      }
      button[type="submit"] {
        width: 100%;
        text-align: center;
      }
    }
  }
  .abstract-bg {
    display: none;
    @include for-tablet {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
  }
}
</style>
