<template>
  <div class="reports-page">
    <div class="con">
      <div class="reports-top-grid">
        <div class="report" id="report-1">
          <img src="../assets/images/gettyimages-50338620-612x612.jpg" alt="" />
          <div class="info">
            <!-- <div class="user-con">
              <div class="user-card">
                <img src="@/assets/images/hero-img.png" alt="" />
                <div class="info">
                  <div class="user-name">John Doe</div>
                  <div class="time">CEO, ABC Corporation</div>
                </div>
              </div>
            </div> -->
            <div class="title">
              This is the title iot can be as long as possible iot can be as
              long as possible This is the title iot can be as long as possible
              iot can be as long as possible
            </div>
            <router-link to="" class="btn btn-primary"
              ><span>Read More</span></router-link
            >
          </div>
        </div>
        <div class="report" id="report-2">
          <img
            src="../assets/images/gettyimages-534931830-612x612.jpg"
            alt=""
          />
          <div class="info">
            <!-- <div class="user-con">
              <div class="user-card">
                <img src="@/assets/images/hero-img.png" alt="" />
                <div class="info">
                  <div class="user-name">John Doe</div>
                  <div class="time">CEO, ABC Corporation</div>
                </div>
              </div>
            </div> -->
            <div class="title">This is the title</div>
            <router-link to="" class="btn btn-primary"
              ><span>Read More</span></router-link
            >
          </div>
        </div>
        <div class="report" id="report-3">
          <img
            src="../assets/images/gettyimages-540547630-612x612.jpg"
            alt=""
          />
          <div class="info">
            <!-- <div class="user-con">
              <div class="user-card">
                <img src="@/assets/images/hero-img.png" alt="" />
                <div class="info">
                  <div class="user-name">John Doe</div>
                  <div class="time">CEO, ABC Corporation</div>
                </div>
              </div>
            </div> -->
            <div class="title">This is the title</div>
            <router-link to="" class="btn btn-primary"
              ><span>Read More</span></router-link
            >
          </div>
        </div>
        <div class="report" id="report-4">
          <img src="../assets/images/gettyimages-55949603-612x612.jpg" alt="" />
          <div class="info">
            <!-- <div class="user-con">
              <div class="user-card">
                <img src="@/assets/images/hero-img.png" alt="" />
                <div class="info">
                  <div class="user-name">John Doe</div>
                  <div class="time">CEO, ABC Corporation</div>
                </div>
              </div>
            </div> -->
            <div class="title">This is the title</div>
            <router-link to="" class="btn btn-primary"
              ><span>Read More</span></router-link
            >
          </div>
        </div>
        <div class="report" id="report-5">
          <img
            src="../assets/images/gettyimages-929598248-612x612.jpg"
            alt=""
          />
          <div class="info">
            <!-- <div class="user-con">
              <div class="user-card">
                <img src="@/assets/images/hero-img.png" alt="" />
                <div class="info">
                  <div class="user-name">John Doe</div>
                  <div class="time">CEO, ABC Corporation</div>
                </div>
              </div>
            </div> -->
            <div class="title">This is the title</div>
            <router-link to="" class="btn btn-primary"
              ><span>Read More</span></router-link
            >
          </div>
        </div>
      </div>

      <section><LatestReports /></section>
    </div>
  </div>
</template>

<script>
import LatestReports from "@/components/LatestReports.vue";
export default {
  setup() {},
  components: {
    LatestReports,
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
          position: absolute;
          left: 0;
          bottom: 0;
          background: linear-gradient(0deg, #000, transparent);
          padding: 1em;
          .title {
            font-size: 1.5em;
            font-weight: 500;
            color: $white;
            text-align: left;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 0.5em;
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
            .btn {
              height: 40px;
              padding: 0.5rem 0;
            }
          }
        }
      }
    }
  }
}
</style>
