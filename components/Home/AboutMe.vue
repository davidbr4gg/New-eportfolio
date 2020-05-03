<template>
  <div id="about">
    <div class="content-wrapper">
      <!-- <h2>DAVID BRAGG</h2> -->
      <!-- <div class="container"> -->
      <div
        class="row justify-content-center"
        style="padding:180px 40px 0 40px;max-width:1200px;margin:0 auto;"
      >
        <div class="col-xs-12 col-sm-5 col-sm-offset-1 title-col">
          <Anim>
            <h2>I'm a highly motivated software engineer with a strong passion for website development.</h2>
          </Anim>
        </div>
        <div class="col-xs-12 col-sm-5 description">
          <Anim>
            <p>Currently employed as a front-end developer for BOOStudio, I design and develop dynamic and responsive user interfaces for multiple Fortune 500 companies with large and complex systems.</p>
            <p>Continuously working towards improving my knowledge and skills to develop technologies that contribute to the betterment of society.</p>
          </Anim>
        </div>
      </div>
      <Cloud />
    </div>
  </div>
</template>

<script>
import Cloud from "~/components/UI/CloudParallax.vue";
export default {
  data() {
    return {};
  },
  computed: {
    vw() {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
    }
  },
  mounted() {
    if (this.vw < 728) {
    }
  },
  components: {
    Cloud
  }
};
</script>

<style lang="scss" scoped>
#about {
  // min-height: 100vh;
  background: linear-gradient(to bottom, #000 0%, #3e99d1 92%, #fff 100%);
  background-image: linear-gradient(
    rgb(0, 0, 0) 0%,
    rgb(62, 153, 209) 92%,
    rgb(255, 255, 255) 100%
  );
  // margin-bottom:-80px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    height: 100px;
    background-color: black;
    z-index: 1;
  }
}
#about:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 170px;
  content: "";
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.82) 50%,
    white 100%
  );
}
.description {
  padding-top: 10px;
}
.content-wrapper {
  width: 100%;
  padding-top: 0px;
  margin: 0 auto;
}
.title-col h2 {
  text-align: left;
}
h2,
h3,
p {
  color: white;
}
p {
  line-height: 28px;
}
h2 {
  margin-bottom: 30px;
  font-size: 42px;
  font-weight: normal;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>