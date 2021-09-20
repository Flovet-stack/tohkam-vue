<template>
  <div class="footer">
    <!-- start of the footer  -->
    <footer>
      <div class="con">
        <div class="footer-sub">
          <img src="@/assets/images/logos/darklogo.png" alt="" class="logo" />
          <div class="info">
            <span>Address :</span>
            <p>
              HN 257, Rue de Cocotier, Biyem-Assi P.O. Box 30198 Yaoundé,
              Cameroon
            </p>
          </div>
          <div class="info">
            <span>Mail us :</span>
            <p>info@africaopl.org</p>
          </div>
          <div class="info">
            <span>Phone :</span>
            <p>(+237) 6 81 75 73 80</p>
          </div>
          <div class="social">
            <ul>
              <li>
                <a href=""
                  ><i class="fab fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href=""
                  ><i class="fab fa-dribbble" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href=""><i class="fab fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href=""><i class="fab fa-youtube" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-sub">
          <div class="sub-menu">
            <h3>Our Services</h3>
            <ul>
              <li><a href="">About AOPL</a></li>
              <li><a href="">Why We Exist</a></li>
              <li><a href="">About Publication</a></li>
              <li><a href="">Terms & Conditions</a></li>
            </ul>
          </div>
          <div class="sub-menu">
            <h3>Library Policies</h3>
            <ul>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Local History Publications</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-sub">
          <div class="sub-menu">
            <h3>Domains</h3>
            <ul>
              <li><a href="">Science Journals</a></li>
              <li><a href="">Architecture & Planning</a></li>
              <li><a href="">Health and Fitness</a></li>
              <li><a href="">Biography and Memoir</a></li>
              <li><a href="">Business Finance & Accounting</a></li>
              <li><a href="">Aquaculture & Food Science</a></li>
              <li><a href="">Agriculture Articles</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-sub">
          <div class="sub-menu">
            <h3>Join Our Newsletter</h3>
            <p>
              Be the first to get amazing articles which may interest you.
              Subscribe to our newsletter to get started
            </p>

            <form action="" class="email-form">
              <input
                type="email"
                name=""
                placeholder="Enter your email"
                id=""
              />
              <button type="submit" class="btn btn-primary">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <div id="footer-bottom">
      <div class="con">
        <p>
          Copyright © Africa Online & Publications Library 2021. All rights
          reserved.
        </p>
        <span>
          <a href="register.html" class="btn btn-white"><span>Sign In</span></a>
          <a href="" class="btn btn-primary"><span>Sign Up</span></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";
@import "../assets/styles/_utils.scss";

footer {
  width: 100%;
  padding: 5rem 0;
  height: auto;
  background-color: $secondary-dark;
  .con {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .footer-sub {
      width: 100%;
      .logo {
        width: 100px;
        margin-bottom: 2rem;
      }
      .info {
        width: 90%;
        margin-bottom: 1em;
        color: $white;
        span {
          font-weight: 600;
          margin-bottom: 0.3em;
          display: block;
        }
      }
      .social {
        margin-top: 1em;
        ul {
          display: flex;
          li {
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              margin-right: 0.5em;
              border-radius: 50%;
              text-decoration: none;
              color: $primary-color;
              background-color: rgba($primary-color, 0.1);
              &:hover {
                background-color: rgba($primary-color, 0.3);
              }
            }
          }
        }
      }
      .sub-menu {
        color: $white;
        font-size: 1em;
        margin-bottom: 2rem;
        h3 {
          font-size: 1.5em;
          margin-bottom: 1rem;
          font-weight: 400;
          color: $primary-color;
          font-family: "Roboto Slab", serif;
        }
        ul {
          padding: 0;
          li {
            margin-bottom: 1rem;
            a {
              font-size: 1em;
              color: $white;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        form {
          margin-top: 2rem;
          display: grid;
          &.email-form {
            input {
              width: 100%;
              height: 40px;
              background-color: $gray;
              color: $text;
              margin-bottom: 0.5rem;
              border: none;
              outline: none;
              padding: 0 1rem;
              border-radius: $border-radius;
              font-size: 1em;
              &:focus,
              &:hover {
                background-color: $white;
              }
            }
            button {
              width: 100%;
              text-align: center;
              height: 40px;
            }
          }
        }
      }
    }
  }
}

#footer-bottom {
  width: 100%;
  background-color: $footer-bg;
  .con {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    color: $white;
    span {
      display: flex;
      .btn:first-child {
        margin-right: 0.5em;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  footer .con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  footer .social {
    margin-bottom: 2rem;
  }
  #footer-bottom .con {
    flex-wrap: wrap;
  }
  #footer-bottom span {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}

@media screen and (max-width: 767px) {
  footer .con {
    grid-template-columns: repeat(1, 1fr);
  }
  footer .social {
    margin-bottom: 2rem;
  }
  #footer-bottom .con {
    flex-wrap: wrap;
  }
  #footer-bottom span {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}

/* end of he footer styles  */
</style>
