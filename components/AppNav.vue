<template>
  <header>
    <div class="nav-wrapper">
      <div class="icon">
        <div class="view" style="z-index:1;justify-self:flex-start;">
          <div class="plane main">
            <div class="circle" style="background-color: #fff;"></div>
            <div class="circle" style="background-color: #fff;"></div>
            <div class="circle" style="background-color: #fff;"></div>
            <div class="circle" style="background-color: #fff;"></div>
            <div class="circle" style="background-color: #fff;"></div>
            <div class="circle" style="background-color: #fff;"></div>
          </div>
        </div>
        <img src="~/assets/img/logo.svg" style="justify-self:flex-end;" alt />
      </div>
      <!-- <div class="burger">
        <Burger />
      </div>-->
    </div>
  </header>
</template>

<script>
import Burger from "~/components/UI/BurgerMenu.vue";
export default {
  components: {
    Burger
  }
};
</script>

<style lang="scss" scoped>
// .circle {
//   box-shadow: 0 0 40px rgba(white, 1), inset 0 0 60px rgba(white, 1);
// }
// .icon:hover .circle {
//   box-shadow: 0 0 40px rgba(black, 1), inset 0 0 60px rgba(black, 1);
// }
.circle {
  transition: box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 2px rgba(black, 1), inset 0 0 3px rgba(black, 1);
}
header {
  width: 100%;
  padding: 20px 0;
  position: fixed;
  top: 45px;
  z-index: 12;
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
  position: relative;
}
</style>