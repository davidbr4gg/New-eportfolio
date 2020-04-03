<template>
  <div id="portfolio-wrap" style>
    <h2>Here are some of my projects.</h2>
    <carousel-3d :autoplay="false" :autoplayHoverPause="true" :autoplayTimeout="1500">
      <slide :index="0" class="card middle">
        <vue-flip :active-click="true">
          <div slot="front">
            <img src="~/assets/img/gains.png" id="fullImg" />
          </div>
          <div slot="back" id="back">
            <div class="whiteText">
              <h3 class>Gains Calculator</h3>
              <div class>
                <p>Side project created with VueJS in order to calculate various different fitness related variables (e.g. Bodyfat% and Maintenance Calorie levels). A link of the website is provided below, along with the GitHub link to the code where you can see how I devised these formulas!</p>
              </div>
              <div class="sm">
                <a
                  href="https://github.com/davidbr4gg/gainscalculator"
                  target="_blank"
                  class="whiteText"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a
                  href="http://gains-calculator-20191122181345-hostingbucket-bragg.s3-website-ap-southeast-1.amazonaws.com/"
                  target="_blank"
                  class="whiteText"
                >
                  <font-awesome-icon :icon="['fas','link']" />
                </a>
              </div>
            </div>
          </div>
        </vue-flip>
      </slide>

      <slide :index="1" class="card middle">
        <vue-flip :active-click="true">
          <div slot="front">
            <img src="~/assets/img/ezdonate.png" id="fullImg" />
          </div>
          <div slot="back" id="back">
            <div class="whiteText">
              <h3 style="margin-bottom:2px;">ezyDonate</h3>
              <div class>
                <p>
                  University project consisting of an Android application designed to remotely connect charity communities with donors.
                  I had received a perfect score for this subject, while also winning an award!
                  <i>(link below)</i> Please also see attached the YouTube link showcasing the application!
                </p>
              </div>
              <div class="sm">
                <a href="https://youtu.be/s1QZxaDlQuQ" target="_blank" class="whiteText">
                  <font-awesome-icon :icon="['fab','youtube']" />
                </a>
                <a href="/Award.pdf" target="_blank" class="whiteText">
                  <font-awesome-icon :icon="['fas','award']" />
                </a>
                <a
                  href="https://github.com/davidbr4gg/ezyDonate-1"
                  target="_blank"
                  class="whiteText"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </vue-flip>
      </slide>

      <slide :index="2" class="card middle">
        <vue-flip :active-click="true">
          <div slot="front">
            <img src="~/assets/img/fastcomps.png" id="fullImg" />
          </div>
          <div slot="back" id="back">
            <div class="whiteText">
              <h3 class>FastComps</h3>
              <div class>
                <p>An E-Commerce website built with VueJS and Firebase. This project enabled to further my understanding of full-stack development through practising HTTP requests and mutations through the Vuex store, along with website authentication controlled through an admin panel.</p>
              </div>
              <div class="sm">
                <a href="https://github.com/davidbr4gg/fastcomps" target="_blank" class="whiteText">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
          </div>
        </vue-flip>
      </slide>

      <slide :index="3">
        <vue-flip :active-click="true">
          <div slot="front">
            <img src="~/assets/img/eportfolio.png" id="fullImg" />
          </div>
          <div slot="back" id="back">
            <div class="whiteText">
              <h3 style="margin-top:30px;">Previous E-Portfolio</h3>
              <div class>
                <p>Written with HTML CSS and JavaScript(VueJS), my previous E-Portfolio was designed and developed by me in order to showcase my achievements and passion for software development. It is clear to see I have come a long way in just a few months!</p>
              </div>
              <div class="sm">
                <a
                  href="https://github.com/davidbr4gg/VueJS-E-Portfolio"
                  target="_blank"
                  class="whiteText"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a
                  href="http://davidbr4gg-vuejs.s3-website-ap-southeast-2.amazonaws.com/"
                  target="_blank"
                  class="whiteText"
                >
                  <font-awesome-icon :icon="['fas','link']" />
                </a>
              </div>
            </div>
          </div>
        </vue-flip>
      </slide>

      <slide :index="4">
        <vue-flip :active-click="true">
          <div slot="front">
            <img src="~/assets/img/rtls.png" id="fullImg" />
          </div>
          <div slot="back" id="back">
            <div class="whiteText">
              <h3 style="margin-top:16px;margin-bottom:8px;">RTLS Solutions</h3>
              <div class>
                <p
                  style="padding-top:0;"
                >RTLS Solutions is a universal page application written with Vue and Nuxt JS. With Nuxt's server side rendering and simple folder routing structure, this application consists of reusable code that maximises speed and search engine optimisation. The GitHub, along with the website link is provided below.</p>
              </div>
              <div class="sm">
                <a
                  href="https://github.com/davidbr4gg/rtls-nuxt-app"
                  target="_blank"
                  class="whiteText"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a href="http://rtls-nuxt.000webhostapp.com" target="_blank" class="whiteText">
                  <font-awesome-icon :icon="['fas','link']" />
                </a>
              </div>
            </div>
          </div>
        </vue-flip>
      </slide>

      <slide :index="5" id="four">
        <vue-flip :active-click="true">
          <div slot="front">
            <img src="~/assets/img/wwsi.png" id="fullImg" />
          </div>
          <div slot="back" id="back">
            <div class="whiteText">
              <h3 style="margin-top:30px;">WWSI</h3>
              <div>
                <p>This is an independent project I was working on for my internship at WWSI. I had redisgned and redeveloped the entire website into a universal page application with Vue and Nuxt JS. A link to the website and code is provided below!</p>
              </div>
              <div class="sm">
                <a
                  href="https://github.com/davidbr4gg/Vue.js-Nuxt.js-WWSI-"
                  target="_blank"
                  class="whiteText"
                >
                  <font-awesome-icon :icon="['fab','github']" />
                </a>
                <a href="https://wwsi.herokuapp.com/" target="_blank" class="whiteText">
                  <font-awesome-icon :icon="['fas','link']" />
                </a>
              </div>
            </div>
          </div>
        </vue-flip>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import VueFlip from "vue-flip";
export default {
  components: {
    Carousel3d,
    Slide,
    "vue-flip": VueFlip
  }
};
</script>

<style lang="scss" scoped>
#portfolio-wrap {
  background-color: #f8f8f8;
  padding: 80px 0;
}
h2 {
  color: #242424;
  font-weight: 400;
}
h3,
p {
  color: #fff;
}
h3 {
  margin: 25px 0px 2px 0px;
}
p {
  padding: 0px 8px 4px 10px;
  font-size: 16px;
  margin-bottom: 0px;
}
.carousel-3d-slide.right-1 #back,
.carousel-3d-slide.right-2 #back,
.carousel-3d-slide.left-1 #back,
.carousel-3d-slide.left-2 #back,
.carousel-3d-slide.right-1 img,
.carousel-3d-slide.right-2 img,
.carousel-3d-slide.left-1 img,
.carousel-3d-slide.left-2 img {
  opacity: 0.5;
  transform: opacity 200ms ease-in-out;
  .carousel-3d-slide.right-1 #back:hover,
  .carousel-3d-slide.right-2 #back:hover,
  .carousel-3d-slide.left-1 #back:hover,
  .carousel-3d-slide.left-2 #back:hover,
  .carousel-3d-slide.right-1 img:hover,
  .carousel-3d-slide.right-2 img:hover,
  .carousel-3d-slide.left-1 img:hover,
  .carousel-3d-slide.left-2 img:hover {
    opacity: 1;
  }
}
.carousel-3d-slide.current {
  opacity: 1 !important;
}
#portfolio-wrap #back:hover {
  opacity: 1;
}
#portfolio-wrap img:hover {
  opacity: 1;
}
#portfolio-wrap div h2 {
  padding-top: 50px;
}
#portfolio-wrap div p {
  padding-top: 8px;
  margin-left: 6px;
  margin-right: 6px;
}
.whiteText,
.sm .whiteText {
  color: white;
  text-align: center;
}
.blackText,
.sm .blackText {
  color: white;
  text-align: center;
}
#portfolio-wrap img {
  width: 100%;
  height: 100%;
}
div #fullImg {
  width: 362px;
  height: 272px;
  cursor: pointer;
}
.carousel-3d-slide {
  background-color: black;
  cursor: pointer;
}
.front img {
  width: 100%;
  height: 100%;
}
.sm {
  text-align: center;
}
.sm a {
  display: inline-flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
  transition: 0.4s;
  border-radius: 50%;
  padding: 20px;
  margin: auto;
}
.sm a:hover {
  background: white;
  color: black;
}
</style>