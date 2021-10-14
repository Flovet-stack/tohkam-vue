<template>
  <div class="report-details">
    <div class="con">
      <aside>
        <div class="">
          <div class="aside-reports">
            <h4>More like these</h4>
            <router-link
              :to="{ name: 'report', params: { id: parseInt(report.id) } }"
              v-for="report in moreReports"
              :key="report.id"
              class="aside-report"
            >
              <img :src="report.image" alt="" />
              <div class="info">
                <div class="title">{{ report.title }}</div>
                <p>
                  {{ report.description }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </aside>
      <div class="content">
        <div class="title">{{ reportDetail.title }}</div>
        <div class="img">
          <img :src="reportDetail.image" alt="" />
          <router-link to="" class="like" uk-tooltip="Like">
            <img src="@/assets/images/icons/heart.svg" alt="" />
            <span>34 Likes</span>
          </router-link>
        </div>
        <div class="report-info">
          <div class="user-con">
            <div class="user-card">
              <img :src="reportDetailUser.profile_image" alt="" />
              <div class="info">
                <div class="user-name">
                  {{ reportDetailUser.first_name }}
                  {{ reportDetailUser.last_name }}
                </div>
                <div class="time">
                  <div class="time">
                    {{ reportDetailUser.user_role }},
                    {{ reportDetailUser.user_location }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="categories">
            <div
              class="category"
              :class="{
                [categoryPillClass]: true,
              }"
            >
              #{{ reportDetail.report_case }}
            </div>
          </div>
        </div>
        <div class="report-content">
          <p>
            {{ reportDetail.description }}
          </p>
        </div>
        <div class="report-comments">
          <div class="comment">
            <img :src="reportDetailUser.profile_image" alt="" />
            <div class="sub">
              <form action="">
                <div class="user-info">
                  <div class="user-name">
                    {{ reportDetailUser.first_name }}
                    {{ reportDetailUser.last_name }}
                  </div>
                  <div class="time">
                    {{ reportDetailUser.user_role }},
                    {{ reportDetailUser.user_location }}
                  </div>
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write a comment"
                ></textarea>
                <div class="btn-con">
                  <button type="submit" class="btn btn-primary">
                    <span>comment</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <h3>Comments</h3>
          <div class="comments">
            <div class="comment">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="sub">
                <form action="">
                  <div class="user-info">
                    <div class="user-name">John Doe</div>
                    <div class="time">CEO, ABC Corporation</div>
                  </div>
                  <p>
                    Est pariatur exercitation laborum velit esse. Eiusmod
                    incididunt consectetur magna Lorem. Velit ad occaecat
                    pariatur labore minim nisi qui dolor culpa pariatur occaecat
                    consectetur ad reprehenderit. Nulla veniam sunt cillum ad
                    sit ex. Eu magna labore amet amet est id ad in non esse
                    excepteur voluptate consequat irure. Veniam culpa in est
                    sunt voluptate in nulla anim enim eiusmod ullamco in est.
                  </p>
                </form>
              </div>
            </div>
            <div class="comment">
              <img src="@/assets/images/hero-img.png" alt="" />
              <div class="sub">
                <form action="">
                  <div class="user-info">
                    <div class="user-name">John Doe</div>
                    <div class="time">CEO, ABC Corporation</div>
                  </div>
                  <p>
                    Est pariatur exercitation laborum velit esse. Eiusmod
                    incididunt consectetur magna Lorem. Velit ad occaecat
                    pariatur labore minim nisi qui dolor culpa pariatur occaecat
                    consectetur ad reprehenderit. Nulla veniam sunt cillum ad
                    sit ex. Eu magna labore amet amet est id ad in non esse
                    excepteur voluptate consequat irure. Veniam culpa in est
                    sunt voluptate in nulla anim enim eiusmod ullamco in est.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside>
        <div class="aside-sub">
          <h4>More like this</h4>
          <div class="aside-reports">
            <router-link
              :to="{ name: 'report', params: { id: parseInt(report.id) } }"
              v-for="report in moreReports"
              :key="report.id"
              class="aside-report"
            >
              <img :src="report.image" alt="" />
              <div class="info">
                <div class="title">{{ report.title }}</div>
                <p>
                  {{ report.description }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      reportDetail: {},
      reportDetailUser: {},
      moreReports: {},
      categoryPillClasses: ["blue", "red", "green", "purple", "orange", "pink"],
      categoryPillClass: "",
    };
  },
  setup() {},
  mounted() {
    // get single report
    axios
      .get(`/single-report/${this.$route.params.id}`, {})
      .then((response) => {
        this.reportDetail = response.data.data;
        this.reportDetailUser = response.data.data.user;
        this.categoryPillClass =
          this.categoryPillClasses[Math.floor(Math.random() * 6)];
      })
      .catch((error) => console.log(error));

    // get all reports
    axios
      .get("/all-reports")
      .then((response) => {
        this.moreReports = response.data.data.slice(
          Math.max(response.data.data.length - 3, 0)
        );
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_utils.scss";

.report-details {
  .con {
    @include for-large {
      width: 100%;
      display: flex;
      position: relative;
    }
    .content {
      width: auto;
      @include for-large {
        max-width: calc(100% - calc(550px + 6em));
        margin: 0 3em;
      }
      .title {
        font-size: 1.5em;
        font-weight: 500;
        margin-bottom: 0.3em;
        color: $text;
        @include for-large {
          font-size: 2.3em;
        }
      }
      .img {
        width: 100%;
        position: relative;
        background-color: $report-bg;
        border-radius: $border-radius;
        > img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          object-position: center;
          border-radius: $border-radius;
          background-color: $report-bg;
        }
        .like {
          position: absolute;
          width: max-content;
          height: 25px;
          border-radius: $border-radius;
          display: flex;
          align-items: center;
          background-color: $primary-color;
          padding: 0.3em 0.5em;
          top: 0.5em;
          right: 0.5em;
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
      .report-info {
        margin-top: 1em;
        display: flex;
        align-items: center;
        .user-card {
          > .info {
            .user-name {
              color: $text;
            }
            .time {
              color: $text-light;
            }
          }
        }
        .categories {
          margin-left: 1em;
          display: flex;
          @include for-tablet {
            margin-left: 2em;
          }
          .category {
            margin: 0 0.3em;
            font-size: 0.8em;
            border-radius: $border-radius;
            background-color: $light-gray;
            color: $text-light;
            padding: 0.1em 1em;
            &.red {
              background-color: $red-pill;
              color: $white;
            }
            &.blue {
              background-color: $blue-pill;
              color: $white;
            }
            &.green {
              background-color: $green-pill;
              color: $white;
            }
            &.pink {
              background-color: $pink-pill;
              color: $white;
            }
            &.purple {
              background-color: $purple-pill;
              color: $white;
            }
            &.orange {
              background-color: $orange-pill;
              color: $white;
            }
          }
        }
      }
      .report-content {
        margin-top: 2em;
        p {
          color: $text;
          margin-bottom: 1em;
          line-height: 1.9em;
        }
      }
      .report-comments {
        > .comment {
          display: flex;
          width: 100%;
          border-top: 1px solid $border-color;
          padding-top: 2em;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-position: center;
            object-fit: cover;
          }
          .sub {
            width: auto;
            width: calc(100% - 50px);
            margin-left: 10px;
            @include for-large {
              width: 640px;
            }
            .user-info {
              color: $white;
              .user-name {
                font-weight: 600;
                text-transform: capitalize;
                line-height: 1;
                color: $text;
                font-size: 0.9em;
              }
              .time {
                color: $text-light;
                font-size: 0.7em;
              }
            }
            textarea {
              width: 100%;
              border: 1px solid #ccc;
              border-radius: $border-radius;
              padding: 1em;
              font-family: "Asap", sans-serif;
            }
            .btn-con {
              width: 100%;
              display: flex;
              justify-content: flex-start;
            }
          }
        }
        .comments {
          width: 100%;
          height: auto;
          @include for-large {
            width: 700px;
          }
          > .comment {
            display: flex;
            width: 100%;
            margin-bottom: 1em;
            background-color: $white;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              object-position: center;
              object-fit: cover;
            }
            .sub {
              width: auto;
              width: calc(100% - 50px);
              margin-left: 10px;
              background-color: #fafafa;
              border: 1px solid $border-color;
              padding: 1em;
              .user-info {
                color: $white;
                .user-name {
                  font-size: 0.9em;
                  font-weight: 600;
                  text-transform: capitalize;
                  line-height: 1;
                  color: $text;
                }
                .time {
                  color: $text-light;
                  font-size: 0.7em;
                }
              }
              p {
                padding: 1em;
                border: 1px solid $border-color;
                width: 100%;
                font-size: 0.9em;
                color: $text;
                border-radius: $border-radius;
                background-color: $light-gray;
                margin-top: 0.5em;
              }
            }
          }
        }
      }
    }
    aside {
      width: 100%;
      position: relative;
      @include for-large {
        width: 300px;
        max-width: 300px;
      }
      &:first-child {
        display: none;
        @include for-large {
          display: block;
          max-width: 250px;
          .aside-report {
            max-width: 250px;
          }
        }
      }
      @include for-large {
        width: 300px;
        .aside-sub {
          width: 300px;
          position: sticky;
          top: 90px;
        }
      }
      h4 {
        font-size: 1em;
        font-weight: 700;
      }
      .aside-reports {
        width: 100%;
        @include for-tablet {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2em;
        }
        @include for-large {
          display: block;
        }
        .aside-report {
          width: 100%;
          border-radius: $border-radius;
          display: flex;
          margin-bottom: 1em;
          @include for-large {
            padding: 0.3em;
            width: 300px;
          }
          &:hover {
            background-color: #eee;
          }
          > img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            object-position: center;
            background-color: $report-bg;
            border-radius: $border-radius;
            margin-right: 0.5em;
            @include for-tablet {
              width: 100px;
              height: 100px;
            }
            @include for-large {
              width: 60px;
              height: 60px;
            }
          }
          .info {
            @include for-tablet {
              width: auto;
            }
            @include for-large {
              width: calc(100% - calc(60px + 0.5em));
            }
            .title {
              font-size: 1em;
              font-weight: 500;
              color: $text;
              &::first-letter {
                text-transform: capitalize;
              }
            }
            p {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              color: $text-light;
              margin-bottom: 0;
              font-size: 0.8em;
            }
          }
        }
      }
    }
  }
}
</style>
