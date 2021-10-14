<template>
  <div class="reports-page">
    <div class="con">
      <div class="reports-top-grid">
        <div class="report" id="report-1">
          <img
            :src="report_1.image"
            alt=""
            :class="{
              defualt:
                report_1.image == 'https://tohkam.org/images/darklogo.png',
            }"
          />
          <div class="info">
            <span>
              <div class="case">{{ report_1.report_case }}</div>
              <div class="title">{{ report_1.title }}</div>
              <router-link
                :to="{
                  name: 'report',
                  params: { id: parseInt(report_1.id) },
                }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-2">
          <img
            :src="report_2.image"
            alt=""
            :class="{
              defualt:
                report_2.image == 'https://tohkam.org/images/darklogo.png',
            }"
          />
          <div class="info">
            <span>
              <div class="case">{{ report_2.report_case }}</div>
              <div class="title">{{ report_2.title }}</div>
              <router-link
                :to="{
                  name: 'report',
                  params: { id: parseInt(report_2.id) },
                }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-3">
          <img
            :src="report_3.image"
            alt=""
            :class="{
              defualt:
                report_3.image == 'https://tohkam.org/images/darklogo.png',
            }"
          />
          <div class="info">
            <span>
              <div class="case">{{ report_3.report_case }}</div>
              <div class="title">{{ report_3.title }}</div>
              <router-link
                :to="{
                  name: 'report',
                  params: { id: parseInt(report_3.id) },
                }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-4">
          <img
            :src="report_4.image"
            alt=""
            :class="{
              defualt:
                report_4.image == 'https://tohkam.org/images/darklogo.png',
            }"
          />
          <div class="info">
            <span>
              <div class="case">{{ report_4.report_case }}</div>
              <div class="title">{{ report_4.title }}</div>
              <router-link
                :to="{
                  name: 'report',
                  params: { id: parseInt(report_4.id) },
                }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-5">
          <img
            :src="report_5.image"
            alt=""
            :class="{
              defualt:
                report_5.image == 'https://tohkam.org/images/darklogo.png',
            }"
          />
          <div class="info">
            <span>
              <div class="case">{{ report_5.report_case }}</div>
              <div class="title">{{ report_5.title }}</div>
              <router-link
                :to="{
                  name: 'report',
                  params: { id: parseInt(report_5.id) },
                }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
      </div>

      <div class="reports-latest-reports"><LatestReports /></div>
      <hr />
      <div class="join-us">
        <div class="content">
          <div class="logo">
            <img src="@/assets/images/logos/darklogo.png" alt="" />
          </div>
          <div class="text">
            <h1>
              The <span>Tohkam community</span> is one that allows every one to
              share and discuss domestic violence and abuse experiences
            </h1>
            <p>
              A place to share, stay up to date and find solutions to such
              issues in our communities
            </p>
          </div>
        </div>
        <div class="btns">
          <router-link :to="{ name: 'home' }" class="btn btn-primary"
            ><span>Create account</span></router-link
          >
          <router-link :to="{ name: 'login' }" class="btn btn-transparent"
            ><span>Login</span></router-link
          >
        </div>
      </div>
      <div class="reports-grid" id="reports-grid">
        <div v-for="report in reports" :key="report.id" class="report-card">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LatestReports from "@/components/LatestReports.vue";
export default {
  data() {
    return {
      reports: {},
      report_1: {},
      report_2: {},
      report_3: {},
      report_4: {},
      report_5: {},
    };
  },
  setup() {},
  components: {
    LatestReports,
  },
  mounted() {
    axios
      .get("/all-reports")
      .then((response) => {
        this.reports = response.data.data;
        this.report_1 = response.data.data[0];
        this.report_2 = response.data.data[1];
        this.report_3 = response.data.data[2];
        this.report_4 = response.data.data[3];
        this.report_5 = response.data.data[4];
      })
      .catch((error) => console.log(error));

    // window.addEventListener("scroll", () => {
    //   // console.log(
    //   //   document.getElementById("reports-grid").getBoundingClientRect().bottom
    //   // );
    //   if (
    //     document.getElementById("reports-grid").getBoundingClientRect().bottom <
    //     window.innerHeight
    //   ) {
    //     console.log("test");
    //     axios
    //       .get("/all-reports")
    //       .then((response) => {
    //         console.log(response.data.data);
    //         // this.reports.push(response.data.data);
    //       })
    //       .catch((error) => console.log(error));
    //   }
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_utils.scss";

.reports-page {
  .con {
    .reports-top-grid {
      #report-1 {
        grid-area: report-1;
        min-height: 405px;
        max-height: 405px;
      }
      #report-2 {
        grid-area: report-2;
        min-height: 200px;
        max-height: 200px;
        .info {
          .title {
            font-size: 1.3em;
          }
        }
      }
      #report-3 {
        grid-area: report-3;
        min-height: 200px;
        max-height: 200px;
        .info {
          .title {
            font-size: 1.3em;
          }
        }
      }
      #report-4 {
        grid-area: report-4;
        min-height: 200px;
        max-height: 200px;
        .info {
          .title {
            font-size: 1.3em;
          }
        }
      }
      #report-5 {
        grid-area: report-5;
        min-height: 200px;
        max-height: 200px;
        .info {
          .title {
            font-size: 1.3em;
          }
        }
      }
      display: grid;
      grid-template-areas:
        "report-1 report-1 report-1 report-1 report-1 report-1"
        "report-2 report-2 report-2 report-3 report-3 report-3"
        "report-4 report-4 report-4 report-5 report-5 report-5";
      gap: 5px;
      display: grid;
      @include for-tablet {
        grid-template-areas:
          "report-1 report-1 report-2 report-2 report-3 report-3"
          "report-1 report-1 report-2 report-2 report-3 report-3"
          "report-1 report-1 report-4 report-4 report-5 report-5"
          "report-1 report-1 report-4 report-4 report-5 report-5";
      }
      .report {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: $report-bg;
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 30%;
          &.defualt {
            object-fit: contain;
          }
        }
        > .info {
          width: 100%;
          height: auto;
          min-height: 60%;
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(0deg, #000, transparent);
          padding: 1em;
          display: flex;
          align-items: flex-end;
          span {
            display: block;
            width: 100%;
          }
          .case {
            font-size: 0.9em;
            color: #aaa;
            font-weight: 600;
          }
          .title {
            font-size: 1.5em;
            font-weight: 500;
            color: $white;
            text-align: left;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1em;
          }
          .btn {
            width: 100%;
            height: 0;
            padding: 0;
            align-items: center;
            text-align: center;
            overflow: hidden;
          }
        }
        &:hover {
          .info {
            .title {
              margin-bottom: 0.3em;
            }
            .btn {
              height: 40px;
              padding: 0.5rem 0;
            }
          }
        }
      }
    }
    .reports-latest-reports {
      margin: 3em 0 2em 0;
    }
    .reports-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2em;
      margin-bottom: 4em;
      @include for-tablet {
        grid-template-columns: repeat(2, 1fr);
        gap: 2em;
      }
      @include for-large {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1em;
        row-gap: 2em;
      }
    }
    .join-us {
      padding: 2em 1em;
      border-radius: $border-radius;
      border: 2px solid $primary-light;
      background-color: $primary-light;
      margin-bottom: 2em;
      @include for-tablet {
        padding: 3em;
      }
      .content {
        width: 100%;
        @include for-tablet {
          display: flex;
        }
        .logo {
          margin-right: 1em;
          margin-bottom: 1em;
          @include for-tablet {
            margin-bottom: 0;
          }
          img {
            width: 50px;
            height: auto;
            position: relative;
            transform: rotateZ(-35deg);
            @include for-tablet {
              width: 100px;
            }
            @include for-large {
              width: 70px;
            }
          }
        }
        .text {
          text-align: left;
          h1 {
            font-size: 1.4em;
            margin: 0;
            @include for-large {
              font-size: 2em;
            }
            span {
              color: $primary-color;
              font-weight: 600;
            }
          }
          p {
            margin: 0;
            font-size: 1em;
            margin-top: 0.5em;
            color: $text-light;
          }
        }
      }
      .btns {
        width: 100%;
        margin-top: 2em;
        @include for-tablet {
          margin-left: calc(50px + 0.5em);
          width: fit-content;
        }
        .btn {
          width: 100%;
          margin-bottom: 0.5em;
          text-align: center;
          @include for-tablet {
            width: 250px;
          }
          &:last-child {
            background-color: rgba($primary-color, 0.1);
            margin-bottom: 0;
            &::after {
              background-color: $primary-light;
            }
          }
        }
      }
    }
  }
}
</style>
