<template>
  <section
    class="wrap"
    id="landing"
    ref="wrap"
    style="min-height:100vh;overflow:hidden;position:relative;"
  >
    <div v-if="showSolar" id="moon" class="moon-orbit">
      <div class="moon"></div>
    </div>
      <div id="earth" ref="earth" class="planet">
        <div class="surface"></div>
        <div class="sunlight"></div>
      </div>

    <!-- STARS BACKGROUND -->
    <div class="background-wrapper" style="z-index:1">
      <div class="stars" style="z-index"></div>
      <div class="twinkling"></div>
      <!-- <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>-->
    </div>

    <!-- CONTENT -->
    <div class="row" id="contentContainer" ref="contentContainer" style="z-index:10">
      <div id="title">
        <svg
          id="logo"
          width="1011"
          height="100"
          viewBox="0 0 1011 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M6.95999 89V2.60001H78.96C82.96 2.60001 86.36 4 89.16 6.8C91.96 9.6 93.36 13 93.36 17V74.6C93.36 78.6 91.96 82 89.16 84.8C86.36 87.6 82.96 89 78.96 89H6.95999ZM21.36 79.28H78.96C80.24 79.28 81.32 78.84 82.2 77.96C83.16 77 83.64 75.88 83.64 74.6V17C83.64 15.72 83.16 14.64 82.2 13.76C81.32 12.8 80.24 12.32 78.96 12.32H21.36C20.08 12.32 18.96 12.8 18 13.76C17.12 14.64 16.68 15.72 16.68 17V74.6C16.68 75.88 17.12 77 18 77.96C18.96 78.84 20.08 79.28 21.36 79.28Z"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M107.038 89V17C107.038 13 108.438 9.6 111.238 6.8C114.038 4 117.438 2.60001 121.438 2.60001H179.038C183.038 2.60001 186.438 4 189.238 6.8C192.038 9.6 193.438 13 193.438 17V89H183.718V57.44H116.758V89H107.038ZM116.758 47.72H183.718V17C183.718 15.72 183.238 14.64 182.278 13.76C181.398 12.8 180.318 12.32 179.038 12.32H121.438C120.158 12.32 119.038 12.8 118.078 13.76C117.198 14.64 116.758 15.72 116.758 17V47.72Z"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M254.631 89L204.591 2.60001H215.991L260.271 79.52L304.431 2.60001H315.831L265.911 89H254.631Z"
              stroke="white"
              stroke-width="5"
            />
            <path d="M326.982 89V2.60001H336.822V89H326.982Z" stroke="white" stroke-width="5" />
            <path
              d="M353.366 89V2.60001H425.366C429.366 2.60001 432.766 4 435.566 6.8C438.366 9.6 439.766 13 439.766 17V74.6C439.766 78.6 438.366 82 435.566 84.8C432.766 87.6 429.366 89 425.366 89H353.366ZM367.766 79.28H425.366C426.646 79.28 427.726 78.84 428.606 77.96C429.566 77 430.046 75.88 430.046 74.6V17C430.046 15.72 429.566 14.64 428.606 13.76C427.726 12.8 426.646 12.32 425.366 12.32H367.766C366.486 12.32 365.366 12.8 364.406 13.76C363.526 14.64 363.086 15.72 363.086 17V74.6C363.086 75.88 363.526 77 364.406 77.96C365.366 78.84 366.486 79.28 367.766 79.28Z"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M518.955 89V2.60001H587.235C591.235 2.60001 594.635 4 597.435 6.8C600.235 9.6 601.635 13 601.635 17V35.36C601.635 36.48 601.475 37.6 601.155 38.72C600.915 39.76 600.555 40.76 600.075 41.72C601.835 44.36 603.155 46.64 604.035 48.56C604.915 50.48 605.355 52.44 605.355 54.44V74.6C605.355 78.6 603.955 82 601.155 84.8C598.355 87.6 594.955 89 590.955 89H518.955ZM533.355 79.28H590.955C592.235 79.28 593.315 78.84 594.195 77.96C595.155 77 595.635 75.88 595.635 74.6V54.44C595.635 53.16 595.155 52.08 594.195 51.2C593.315 50.24 592.235 49.76 590.955 49.76H533.355C532.075 49.76 530.955 50.24 529.995 51.2C529.115 52.08 528.675 53.16 528.675 54.44V74.6C528.675 75.88 529.115 77 529.995 77.96C530.955 78.84 532.075 79.28 533.355 79.28ZM533.355 40.04H587.235C588.515 40.04 589.595 39.6 590.475 38.72C591.355 37.76 591.795 36.64 591.795 35.36V17C591.795 15.72 591.355 14.64 590.475 13.76C589.595 12.8 588.515 12.32 587.235 12.32H533.355C532.075 12.32 530.955 12.8 529.995 13.76C529.115 14.64 528.675 15.72 528.675 17V35.36C528.675 36.64 529.115 37.76 529.995 38.72C530.955 39.6 532.075 40.04 533.355 40.04Z"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M618.319 89V2.72H690.319C694.319 2.72 697.719 4.16 700.519 7.04C703.319 9.84001 704.719 13.2 704.719 17.12V42.44C704.719 46.36 703.319 49.76 700.519 52.64C697.719 55.44 694.319 56.84 690.319 56.84H677.119L704.239 88.88V89H691.399L664.399 56.84L628.039 56.72V89H618.319ZM632.719 47H690.319C691.599 47 692.679 46.56 693.559 45.68C694.439 44.8 694.879 43.72 694.879 42.44V17.12C694.879 15.84 694.439 14.76 693.559 13.88C692.679 12.92 691.599 12.44 690.319 12.44H632.719C631.439 12.44 630.319 12.92 629.359 13.88C628.479 14.76 628.039 15.84 628.039 17.12V42.44C628.039 43.72 628.479 44.8 629.359 45.68C630.319 46.56 631.439 47 632.719 47Z"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M717.702 89V17C717.702 13 719.102 9.6 721.902 6.8C724.702 4 728.102 2.60001 732.102 2.60001H789.702C793.702 2.60001 797.102 4 799.902 6.8C802.702 9.6 804.102 13 804.102 17V89H794.382V57.44H727.422V89H717.702ZM727.422 47.72H794.382V17C794.382 15.72 793.902 14.64 792.942 13.76C792.062 12.8 790.982 12.32 789.702 12.32H732.102C730.822 12.32 729.702 12.8 728.742 13.76C727.862 14.64 727.422 15.72 727.422 17V47.72Z"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M832.175 89C828.175 89 824.775 87.6 821.975 84.8C819.175 82 817.775 78.6 817.775 74.6V17C817.775 13 819.175 9.6 821.975 6.8C824.775 4 828.175 2.60001 832.175 2.60001H889.775C893.775 2.60001 897.175 4 899.975 6.8C902.775 9.6 904.175 13 904.175 17V20.48H894.455V17C894.455 15.72 893.975 14.64 893.015 13.76C892.135 12.8 891.055 12.32 889.775 12.32H832.175C830.895 12.32 829.775 12.8 828.815 13.76C827.935 14.64 827.495 15.72 827.495 17V74.6C827.495 75.88 827.935 77 828.815 77.96C829.775 78.84 830.895 79.28 832.175 79.28H889.775C891.055 79.28 892.135 78.84 893.015 77.96C893.975 77 894.455 75.88 894.455 74.6V53.24H873.095V43.4H904.175V74.6C904.175 78.6 902.775 82 899.975 84.8C897.175 87.6 893.775 89 889.775 89H832.175Z"
              stroke="white"
              stroke-width="5"
            />
            <path
              d="M931.784 89C927.784 89 924.384 87.6 921.584 84.8C918.784 82 917.384 78.6 917.384 74.6V17C917.384 13 918.784 9.6 921.584 6.8C924.384 4 927.784 2.60001 931.784 2.60001H989.384C993.384 2.60001 996.784 4 999.584 6.8C1002.38 9.6 1003.78 13 1003.78 17V20.48H994.064V17C994.064 15.72 993.584 14.64 992.624 13.76C991.744 12.8 990.664 12.32 989.384 12.32H931.784C930.504 12.32 929.384 12.8 928.424 13.76C927.544 14.64 927.104 15.72 927.104 17V74.6C927.104 75.88 927.544 77 928.424 77.96C929.384 78.84 930.504 79.28 931.784 79.28H989.384C990.664 79.28 991.744 78.84 992.624 77.96C993.584 77 994.064 75.88 994.064 74.6V53.24H972.704V43.4H1003.78V74.6C1003.78 78.6 1002.38 82 999.584 84.8C996.784 87.6 993.384 89 989.384 89H931.784Z"
              stroke="white"
              stroke-width="5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0.459991"
              y="0.100006"
              width="1009.82"
              height="99.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
        <div v-if="!showSubtitle" class="sub-title" style="opacity:0;">FRONT-END DEVELOPER</div>
        <transition name="fade">
          <div style="z-index:11;" v-if="showSubtitle" class="sub-title">FRONT-END DEVELOPER</div>
        </transition>
        <div id="astro">
          <img ref="astronaut" src="~/assets/img/image-astronaut.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from "three";
export default {
  data() {
    return {
      img: "~/image-astronaut.png",
      mouse: { x: 100, y: 100 },
      astropos: { x: 100, y: 100 },
      dir: "right",
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      showSubtitle: false,
      showSolar: false
    };
  },
  methods: {
    calc() {
      const logo = document.querySelectorAll("#logo path");
      for (let i = 0; i < logo.length; ++i) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
      }
    },
    hoverAstronaut() {
      var astro = document.getElementById("astro");
      this.$refs.wrap.addEventListener("mousemove", this.getMouse);
      astro.style.position = "absolute"; //css
      setInterval(this.followMouse, 50);
    },
    getMouse(e) {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY;
      if (this.mouse.y > this.viewPortHeight - 300)
        this.mouse.y = this.viewPortHeight - 300;
      //Checking directional change
      if (this.mouse.x > this.astropos.x + 75) {
        this.dir = "right";
      } else {
        this.dir = "left";
      }
    },
    followMouse() {
      var distX = this.mouse.x - this.astropos.x - 75;
      var distY = this.mouse.y - this.astropos.y;

      //Easing motion
      //Progressive reduction of distance
      if (this.mouse.y > this.viewPortHeight) {
        this.astropos.x += distX / 50;
        if (this.astropos.y <= this.viewPortHeight) {
          this.astropos.y = this.viewPortHeight;
        }
      }
      this.astropos.x += distX / 130;
      this.astropos.y += distY / 70;

      astro.style.left = this.astropos.x + "px";
      astro.style.top = this.astropos.y + "px";

      //Apply css class
      if (this.dir == "right") {
        astro.setAttribute("class", "right");
      } else {
        astro.setAttribute("class", "left");
      }
    }
  },
  computed: {
    viewPortHeight() {
      const vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      return vh;
    }
  },
  mounted() {
    this.calc();
    this.hoverAstronaut();
    // this.init();
    // this.animate();
    setTimeout(() => {
      this.showSubtitle = true;
    }, 3350);
    setTimeout(() => {
      this.$refs.earth.style.transform = 'translate(-50%, -80%) scale(1)';
    }, 4000);
    setTimeout(() => {
      this.showSolar = true;
    }, 5500);
  }
};
</script>

<style lang="scss" scoped>
.moon {
  min-height: 44px;
  min-width: 44px;
  transition: all 2s ease;
	
}
#earth {
  width: 470px;
}
#earth.planet {
  position: absolute;
  top: 80%;
  left: 50%;
  transition: all 1s ease;
  transform: translate(-50%, -80%) scale(0);
}

#canvas {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
canvas {
  width: 650px;
  height: 650px;
  border-radius: 100%;
}
.view {
  z-index: 9;
  top: 20%;
  right: 20%;
}
.sub-title {
  font-size: 50px;
  padding-left: 14px;
  font-weight: 500;
  letter-spacing: 15px;
  padding-top: 15px;
  font-family: "Orbitron", Times New Roman, Times, serif;
}
.name {
  font-size: 85px;
  font-weight: 600;
}
#astro {
  z-index: 30;
  img {
    max-height: 300px;
    width: 100%;
    max-width: 200px;
  }
}
.left {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.right {
  -moz-transform: scaleX(1);
  -o-transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

.row {
  width: 100%;
  /* max-width: 1200px; */
  position: relative;
  height: 100vh;
  margin: 0 auto;
}
.wrap {
  height: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #000000 0%, #000000 100%);
}
#title {
  color: white;
  z-index: 40;
  font-size: 50px;
  letter-spacing: 10px;
  height: 190px;
  margin: 225px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}
.stars,
.twinkling,
.clouds {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.stars {
  background: #000
    url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
    center;
  z-index: 0;
}

.twinkling {
  background: transparent
    url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat
    top center;
  z-index: 1;

  -moz-animation: move-twink-back 200s linear infinite;
  -ms-animation: move-twink-back 200s linear infinite;
  -o-animation: move-twink-back 200s linear infinite;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}
#logo path:nth-child(1) {
  stroke-dasharray: 593.1px;
  stroke-dashoffset: 593.1px;
  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(2) {
  stroke-dasharray: 597.1px;
  stroke-dashoffset: 597.1px;
  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(3) {
  stroke-dasharray: 411px;
  stroke-dashoffset: 411px;
  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(4) {
  stroke-dasharray: 192.4px;
  stroke-dashoffset: 192.4px;
  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(5) {
  stroke-dasharray: 593.1px;
  stroke-dashoffset: 593.1px;

  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(6) {
  stroke-dasharray: 689.9px;
  stroke-dashoffset: 689.9px;

  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(7) {
  stroke-dasharray: 612.3px;
  stroke-dashoffset: 612.3px;

  animation: line-anim 2.8s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(8) {
  stroke-dasharray: 597.1px;
  stroke-dashoffset: 597.1px;

  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(9) {
  stroke-dasharray: 597.2px;
  stroke-dashoffset: 597.2px;

  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo path:nth-child(10) {
  stroke-dasharray: 597.1px;
  stroke-dashoffset: 597.1px;

  animation: line-anim 3s ease forwards 0.5s 2 alternate;
}
#logo {
  // fill:black;
  animation: fill 0.3s ease forwards 3.3s;
}
rect {
  fill: white;
}
mask {
  animation: fill 0.3s ease forwards 3.3s;
  fill: black;
}
@keyframes line-anim {
  95% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes fill {
  from {
    fill: transparent;
  }
  to {
    fill: white;
  }
}
</style>
