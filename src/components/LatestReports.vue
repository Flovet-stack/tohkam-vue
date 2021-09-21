<template>
  <!-- home donations section  -->
  <div class="latest-reports">
    <div class="con">
      <h1 class="heading">Latest Reports</h1>
      <div class="reports">
        <div class="report-card">
          <div class="top">
            <img src="@/assets/images/IMG_20201218_155258.jpg" alt="" />
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
                  <img src="@/assets/images/hero-img.png" alt="" />
                  <div class="info">
                    <div class="user-name">John Doe</div>
                    <div class="time">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="" class="name">
            <p>
              This is the name for a report can be as long as possible a report
              can be as long as possible a report can be as long as possible a
              report can be as long as possibl
            </p>
          </router-link>
        </div>
        <div class="report-card">
          <div class="top">
            <img
              src="../assets/images/gettyimages-534931830-612x612.jpg"
              alt=""
            />
            <div class="top-sub">
              <div class="like-con">
                <router-link to="" class="like" uk-tooltip="Like">
                  <img src="@/assets/images/icons/heart.svg" alt="" />
                  <span>34</span>
                </router-link>
              </div>
              <div class="user-con">
                <div class="user-card">
                  <img src="@/assets/images/hero-img.png" alt="" />
                  <div class="info">
                    <div class="user-name">John Doe</div>
                    <div class="time">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="" class="name">
            <p>
              This is the name for a report can be as long as possible a report
              can be as long as possible a report can be as long as possible a
              report can be as long as possibl
            </p>
          </router-link>
        </div>
        <div class="report-card">
          <div class="top">
            <img
              src="@/assets/images/gettyimages-50338620-612x612.jpg"
              alt=""
            />
            <div class="top-sub">
              <div class="like-con">
                <router-link to="" class="like" uk-tooltip="Like">
                  <img src="@/assets/images/icons/heart.svg" alt="" />
                  <span>34</span>
                </router-link>
              </div>
              <div class="user-con">
                <div class="user-card">
                  <img src="@/assets/images/hero-img.png" alt="" />
                  <div class="info">
                    <div class="user-name">John Doe</div>
                    <div class="time">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="" class="name">
            <p>
              This is the name for a report can be as long as possible a report
              can be as long as possible a report can be as long as possible a
              report can be as long as possibl
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_utils.scss";
.latest-reports {
  width: 100%;
  .reports {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1em;
    @include for-tablet {
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
    }
    @include for-large {
      grid-template-columns: repeat(3, 1fr);
      gap: 3em;
    }
  }
  .btn-con {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;
  }
}
</style>
