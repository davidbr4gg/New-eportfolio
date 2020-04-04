<template>
  <header :style="`transform:${translate}`">
    <div class="nav-wrapper">
      <div class="icon" style="cursor:pointer;" @click="totop">
        <div class="view" style="z-index:1;justify-self:flex-start;">
          <div class="plane main">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
        <img src="~/assets/img/logo.svg" style="justify-self:flex-end;" alt />
      </div>
      <div class="burger">
        <Burger @clicked="navigate" @active="active=true" @inactive="active=false" />
      </div>
    </div>
  </header>
</template>

<script>
import Burger from "~/components/UI/BurgerMenu.vue";
export default {
  data() {
    return {
      distance: null,
      scrolled: 0,
      translate: "translateY(0);",
      active: false
    };
  },
  components: {
    Burger
  },
  methods: {
    totop() {
      document
        .getElementById(`top`)
        .scrollIntoView(true, { behavior: "smooth" });
    },
    navigate(payload) {
      this.$emit("clicked", payload);
      // setTimeout(() => {
      //   this.top = 30;
      // }, 1300);
    },
    getChangePos() {}
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
    this.distance = document.getElementById("stack").offsetTop;
    window.onscroll = () => {
      this.scrolled = scrollY;
    };
  },
  watch: {
    scrolled(first, second) {
      if (this.vw < 1100) {
        if (first > second + 16 && this.active == false) {
          this.translate = "translateY(-120%);";
        } else if (first < second - 16) {
          this.translate = "translateY(0);";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.circle {
  transition: box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 2px rgba(black, 1), inset 0 0 3px rgba(black, 0.5);
}
header {
  width: 100%;
  padding: 65px 0 0 0;
  position: fixed;
  z-index: 12;
  transition: all 500ms ease-out;
}
.nav-wrapper {
  max-width: 1200px;
  width: 100%;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  height: 66px;
}
img {
  height: 50px;
  width: 50px;
  fill: black;
  z-index: 99999;
  // background-color: black;
  // -webkit-filter: invert(100%);
  filter: invert(100%);
  // border-radius: 70%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: all 300ms ease;
}
.icon {
  // border-radius: 50%;
  // background-color: white;
  width: 66px;
  height: 66px;
  display: flex;
  // justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
}
.burger {
  // position: relative;
}
@media screen and (max-width: 1028px) {
  header {
    padding-top: 25px !important;
  }
}
</style>