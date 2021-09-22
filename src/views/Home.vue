<template>
  <div class="home">
    <div class="home-hero">
      <div class="con">
        <div class="sec-1">
          <span>
            <h1>Let's break the silence together</h1>
            <!-- <p>Stand up to abuse we want to live without voilence</p> -->
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              sunt dolor blanditiis quo fuga quasi nulla similique cumque
            </p>
            <a href="" class="btn btn-primary"
              ><span>Get Started</span></a
            ></span
          >
        </div>
        <div class="sec-2">
          <div class="left">
            <h1>Donate</h1>
            <p>
              The long journey to end voilence begins with one action of
              generousity
            </p>
            <router-link to="" class="btn btn-orange"
              ><span>Donate to our cause</span></router-link
            >
          </div>
          <div class="right">
            <h1>Report</h1>
            <p>
              Have a case that you want to share with us report anonymously here
            </p>
            <router-link to="" class="btn btn-secondary"
              ><span>Report Case</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="sec-3"><img src="@/assets/images/hero-img.png" alt="" /></div>
    </div>

    <Partners />

    <Objectives />

    <Donate />

    <section class="home-reports">
      <LatestReports />
      <div class="con">
        <div class="btn-con">
          <router-link to="/reports" class="btn btn-outline"
            ><span
              >View More
              <i class="fa fa-arrow-right" aria-hidden="true"></i></span
          ></router-link>
        </div>
      </div>
    </section>

    <Testimonial />

    <!-- home campaign section  -->
    <section class="home-campaigns">
      <div class="con">
        <h1 class="heading">Ongoing Campaigns</h1>
        <div class="campaign-grid">
          <div class="campaign-card">
            <img
              src="@/assets/images/gettyimages-540547630-612x612.jpg"
              alt=""
              class="card-img"
            />
            <div class="category">Category</div>
            <router-link to="" class="name"
              >Help children rise out of poverty</router-link
            >
            <p>
              Nostrud non mollit do velit ea aliqua aute officia exercitation
              non proident aliqua non pariatur.
            </p>
            <div class="progress-con">
              <div class="progress">
                <div class="progress-value">70%</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="sub">
                <div class="name">Goal</div>
                <div class="value">10,000</div>
              </div>
              <div class="sub">
                <div class="name">To go</div>
                <div class="value">3,000</div>
              </div>
              <router-link to="" class="btn btn-primary"
                ><span>Donate</span></router-link
              >
            </div>
          </div>
          <div class="campaign-card">
            <img
              src="@/assets/images/gettyimages-55949603-612x612.jpg"
              alt=""
              class="card-img"
            />
            <div class="category">Category</div>
            <router-link to="" class="name"
              >Help children rise out of poverty</router-link
            >
            <p>
              Nostrud non mollit do velit ea aliqua aute officia exercitation
              non proident aliqua non pariatur.
            </p>
            <div class="progress-con">
              <div class="progress">
                <div class="progress-value">70%</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="sub">
                <div class="name">Goal</div>
                <div class="value">10,000</div>
              </div>
              <div class="sub">
                <div class="name">To go</div>
                <div class="value">3,000</div>
              </div>
              <router-link to="" class="btn btn-primary"
                ><span>Donate</span></router-link
              >
            </div>
          </div>
          <div class="campaign-card">
            <img
              src="@/assets/images/gettyimages-929598248-612x612.jpg"
              alt=""
              class="card-img"
            />
            <div class="category">Category</div>
            <router-link to="" class="name"
              >Help children rise out of poverty</router-link
            >
            <p>
              Nostrud non mollit do velit ea aliqua aute officia exercitation
              non proident aliqua non pariatur.
            </p>
            <div class="progress-con">
              <div class="progress">
                <div class="progress-value">70%</div>
              </div>
            </div>
            <div class="card-bottom">
              <div class="sub">
                <div class="name">Goal</div>
                <div class="value">10,000</div>
              </div>
              <div class="sub">
                <div class="name">To go</div>
                <div class="value">3,000</div>
              </div>
              <router-link to="" class="btn btn-primary"
                ><span>Donate</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="btn-con">
          <a href="" class="btn btn-outline"
            ><span
              >View More
              <i class="fa fa-arrow-right" aria-hidden="true"></i></span
          ></a>
        </div>
      </div>
    </section>

    <!-- home blogs section -->
    <section class="home-blog">
      <div class="con">
        <h1 class="heading">Letest on our blog</h1>
        <div class="blog-grid">
          <div class="blog-card">
            <img
              src="@/assets/images/gettyimages-50338620-612x612.jpg"
              alt=""
              class="img"
            />
            <router-link to="" class="name"
              >This is the title for this blog</router-link
            >
            <p>
              In dolor anim sit voluptate qui do mollit sunt irure. Officia id
              culpa esse commodo ullamco eu duis cupidatat aliqua aliqua cillum
              veniam laborum. Officia ipsum enim consequat nostrud minim ea
              aliqua et pariatur non deserunt amet. Sint non eiusmod eiusmod
              nulla culpa exercitation consectetur. Et ut veniam veniam anim sit
              deserunt ut sit ex eu occaecat. Ex ullamco aliqua excepteur cillum
              ex ex proident exercitation dolor eu irure duis.
            </p>
          </div>
          <div class="blog-card">
            <img
              src="@/assets/images/gettyimages-534931830-612x612.jpg"
              alt=""
              class="img"
            />
            <router-link to="" class="name"
              >this is the title for this blog</router-link
            >
            <p>
              In dolor anim sit voluptate qui do mollit sunt irure. Officia id
              culpa esse commodo ullamco eu duis cupidatat aliqua aliqua cillum
              veniam laborum. Officia ipsum enim consequat nostrud minim ea
              aliqua et pariatur non deserunt amet. Sint non eiusmod eiusmod
              nulla culpa exercitation consectetur. Et ut veniam veniam anim sit
              deserunt ut sit ex eu occaecat. Ex ullamco aliqua excepteur cillum
              ex ex proident exercitation dolor eu irure duis.
            </p>
          </div>
        </div>
        <div class="btn-con">
          <a href="" class="btn btn-outline"
            ><span
              >View More
              <i class="fa fa-arrow-right" aria-hidden="true"></i></span
          ></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Partners from "@/components/Partners.vue";
import Objectives from "@/components/Objectives.vue";
import Donate from "@/components/Donate.vue";
import Testimonial from "@/components/Testimonial.vue";
import LatestReports from "@/components/LatestReports.vue";

export default {
  name: "Home",
  components: {
    Partners,
    Objectives,
    Donate,
    Testimonial,
    LatestReports,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_utils.scss";

.home-hero {
  margin-top: 70px;
  @include for-tablet {
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    margin-top: 70px;
    margin-bottom: 10vh;
  }
  .con {
    @include for-tablet {
      height: 90vh;
      position: relative;
      z-index: 2;
    }
    .sec-1 {
      @include for-tablet {
        width: 100%;
        height: 100%;
        padding-top: 20vh;
      }
      @include for-large {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
      }
      > span {
        display: block;
        h1 {
          font-size: 2.5em;
          font-weight: 600;
          margin-bottom: 0.5rem;
          width: 100%;
          text-transform: capitalize;
          @include for-tablet {
            font-size: 3.5em;
            width: 60%;
          }
          @include for-large {
            font-size: 4em;
            width: 50%;
          }
        }
        p {
          font-size: 1.1em;
          width: 100%;
          color: $text;
          margin-bottom: 2em;
          @include for-tablet {
            font-size: 1.3em;
            width: 60%;
          }
          @include for-large {
            width: 50%;
          }
        }
        .btn {
          padding: 0.7em 2em;
          padding-bottom: 1em;
        }
      }
    }
    .sec-2 {
      margin-top: 2em;
      @include for-tablet {
        position: absolute;
        top: 100%;
        width: 100%;
        transform: translateY(-60%);
        height: auto;
        display: flex;
        margin: 0;
      }
      @include for-large {
        width: 70%;
      }
      .left {
        width: 100%;
        height: auto;
        background-color: $secondary-color;
        padding: 2em 1em;
        border-radius: $border-radius $border-radius 0 0;
        color: $white;
        @include for-tablet {
          width: 50%;
          border-radius: $border-radius 0 0 $border-radius;
          padding: 2em;
        }
        h1 {
          font-size: 2em;
          margin-bottom: 0.5em;
          color: $white;
        }
        p {
          font-size: 1em;
          margin-bottom: 1em;
          width: 100%;
          color: $white;
          @include for-tablet {
            font-size: 1.2em;
            margin-bottom: 2em;
            width: 75%;
          }
        }
      }
      .right {
        width: 100%;
        background-color: $primary-color;
        padding: 2em 1em;
        border-radius: 0 0 $border-radius $border-radius;
        color: $white;
        @include for-tablet {
          width: 50%;
          padding: 2em;
          border-radius: 0 $border-radius $border-radius 0;
        }
        h1 {
          font-size: 2em;
          margin-bottom: 0.5em;
          color: $white;
        }
        p {
          font-size: 1em;
          margin-bottom: 1em;
          width: 100%;
          color: $white;
          @include for-tablet {
            width: 75%;
            margin-bottom: 2em;
            font-size: 1.2em;
          }
        }
      }
    }
  }
  .sec-3 {
    display: none;
    @include for-tablet {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      width: 35vw;
      height: inherit;
      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
    @include for-large {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      width: 45vw;
      height: inherit;
      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
      }
    }
  }
}

.home-reports {
  width: 100%;
  .btn-con {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;
  }
}

.home-campaigns {
  width: 100%;
  height: auto;
  .con {
    .campaign-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3em;
      @include for-tablet {
        grid-template-columns: repeat(2, 1fr);
      }
      @include for-large {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .btn-con {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 1em;
    }
  }
}

.home-blog {
  .con {
    .blog-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3em;
      @include for-tablet {
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
      }
      @include for-large {
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
}
</style>
