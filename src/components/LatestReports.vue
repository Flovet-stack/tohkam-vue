<template>
  <!-- home donations section  -->
  <div class="latest-reports">
    <div class="con">
      <h1 class="heading">Latest Reports</h1>
      <div class="reports">
        <div
          v-for="report in latestReports"
          :key="report.id"
          class="report-card"
        >
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
            <div class="category">
              {{ report.report_case }}
            </div>
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
export default {
  data() {
    return {
      latestReports: {},
    };
  },
  setup() {},
  mounted() {
    axios
      .get("/all-reports")
      .then((response) => {
        this.latestReports = response.data.data.slice(
          Math.max(response.data.data.length - 4, 0)
        );
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_utils.scss";
.latest-reports {
  width: 100%;
  .reports {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1em;
    @include for-tablet {
      grid-template-columns: repeat(2, 1fr);
      gap: 2em;
    }
    @include for-large {
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;
    }
  }
}
</style>
