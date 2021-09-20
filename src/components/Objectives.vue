<template>
  <section class="objectives">
    <div class="con">
      <div class="top">
        <h1 class="heading">Goals and objectives</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi,
          inventore cumque temporibus facere unde doloribus dolorum reiciendis,
          distinctio corporis tempora
        </p>
      </div>
      <div class="objectives-flex">
        <div class="objective">
          <img src="@/assets/images/icons/01.svg" alt="" />
          <h3>Objective one</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div class="objective">
          <img src="@/assets/images/icons/02.svg" alt="" />
          <h3>Objective two</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div class="objective">
          <img src="@/assets/images/icons/03.svg" alt="" />
          <h3>Objective three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
      </div>
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

.objectives {
  .con {
    .top {
      margin-bottom: 3em;
      text-align: center;
      p {
        @include for-tablet {
          width: 80%;
          margin: 0 auto;
        }
      }
    }
    .objectives-flex {
      @include for-tablet {
        display: flex;
        justify-content: space-between;
      }
      .objective {
        width: 100%;
        margin-bottom: 2em;
        text-align: center;
        @include for-tablet {
          width: 30%;
        }
        img {
          width: 40px;
          margin-bottom: 1em;
        }
        h3 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 0;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>
