<template>
  <div class="reports-page">
    <div class="con">
      <div class="reports-top-grid">
        <div class="report" id="report-1">
          <img :src="report_1.image" alt="" />
          <div class="info">
            <span>
              <div class="case">{{ report_1.report_case }}</div>
              <div class="title">{{ report_1.title }}</div>
              <router-link
                :to="{ name: 'report', params: { id: parseInt(report_1.id) } }"
                class="btn btn-primary"
                ><span>Read More {{ report_1.id }}</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-2">
          <img :src="report_2.image" alt="" />
          <div class="info">
            <span>
              <div class="case">{{ report_2.report_case }}</div>
              <div class="title">{{ report_2.title }}</div>
              <router-link
                :to="{ name: 'report', params: { id: parseInt(report_2.id) } }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-3">
          <img :src="report_3.image" alt="" />
          <div class="info">
            <span>
              <div class="case">{{ report_3.report_case }}</div>
              <div class="title">{{ report_3.title }}</div>
              <router-link
                :to="{ name: 'report', params: { id: parseInt(report_3.id) } }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-4">
          <img :src="report_4.image" alt="" />
          <div class="info">
            <span>
              <div class="case">{{ report_4.report_case }}</div>
              <div class="title">{{ report_4.title }}</div>
              <router-link
                :to="{ name: 'report', params: { id: parseInt(report_4.id) } }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
        <div class="report" id="report-5">
          <img :src="report_5.image" alt="" />
          <div class="info">
            <span>
              <div class="case">{{ report_5.report_case }}</div>
              <div class="title">{{ report_5.title }}</div>
              <router-link
                :to="{ name: 'report', params: { id: parseInt(report_5.id) } }"
                class="btn btn-primary"
                ><span>Read More</span></router-link
              >
            </span>
          </div>
        </div>
      </div>

      <section><LatestReports /></section>
      <hr />
      <br />
      <div class="reports-grid">
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
          <router-link to="" class="name">
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
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
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
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
    .reports-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2em;
      @include for-tablet {
        grid-template-columns: repeat(2, 1fr);
        gap: 2em;
      }
      @include for-large {
        grid-template-columns: repeat(4, 1fr);
        gap: 3em;
      }
    }
  }
}
</style>
