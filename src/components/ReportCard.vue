<template>
  <div>
    <div class="report-card">
      <div class="top">
        <img :src="report.image" alt="" />
        <div class="top-sub">
          <div class="like-con">
            <router-link
              to=""
              class="like liked"
              uk-tooltip="Unlike"
              uk-animation-scale-up
            >
              <img src="@/assets/images/icons/heart.svg" alt="" />
              <span>34</span>
            </router-link>
          </div>
          <div class="user-con">
            <div class="user-card">
              <img :src="report.user.profile_image" alt="" />
              <div class="info">
                <div class="user-name">
                  {{ report.user.first_name }} {{ report.user.last_name }}
                </div>
                <div class="time">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link
        :to="{ name: 'report', params: { id: parseInt(report.id) } }"
        class="name"
      >
        <div class="category">{{ report_5.report_case }}</div>
        <p>
          {{ report.title }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_utils.scss";

// report card styles
.report-card {
  //this card is meant to be use in a grid system or in a container with a specified width
  width: 100%;
  border-radius: $border-radius;
  background-color: $white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  .top {
    width: 100%;
    height: 200px;
    position: relative;
    border-radius: $border-radius $border-radius 0 0;
    background-color: $report-bg;
    @include for-tablet {
      height: 300px;
    }
    > img {
      width: 100%;
      height: 100%;
      border-radius: $border-radius $border-radius 0 0;
      object-fit: cover;
    }
    .top-sub {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: transparent;
      .like-con {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        .like {
          width: max-content;
          height: 25px;
          border-radius: $border-radius;
          display: flex;
          align-items: center;
          background-color: $primary-color;
          padding: 0.3em 0.5em;
          &.liked {
            background-color: $orange;
          }
          &:hover {
            background-color: $primary-dark;
            text-decoration: none;
          }
          &:active {
            background-color: $text;
          }
          img {
            height: 15px;
            margin-right: 0.3em;
          }
          span {
            color: $white;
            font-size: 1em;
            font-weight: 600;
          }
        }
      }
      .user-con {
        width: 100%;
        height: 50%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.699), transparent);
        padding: 1em;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: flex-end;
      }
    }
  }
  .name {
    width: 100%;
    height: 7em;
    padding: 1em;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 500;
    display: block;
    text-decoration: none;
    &:hover {
      background-color: rgb(240, 240, 240);
    }
    .category {
      font-size: 0.8em;
      color: $text-light;
      font-weight: 500;
    }
    p {
      text-align: left;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: $text;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
