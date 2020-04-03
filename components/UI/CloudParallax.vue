<template>
  <div class="cloud-container">
    <ul id="scene" style="position:relative;">
      <li class="layer" data-depth="0.3">
        <img src="~/assets/img/cloud4.png" />
      </li>
    </ul>
  </div>
</template>

<script>
import Parallax from "parallax-js";
export default {
  mounted() {
    var scene = document.getElementById("scene");
    var parallax = new Parallax(scene);
  }
};
</script>

<style lang="scss" scoped>
ul li.layer {
  position: absolute;
  bottom: 0;
  height: 1300px;
}
li img {
  position: absolute;
  bottom: -600px;
  left: -50px;
  width: 110%;
  height: 3000px;
  // max-height:400px;
}
* {
  box-sizing: border-box;
  margin: -20px;
  padding: 0;
}

.cloud-container {
  background-attachment: fixed;
  // background-image: "~/assets/img/cloud4.png";
  background-size: cover;
  background-repeat: no-repeat;
  // height: 100vh;
  overflow: hidden;
  text-align: center;
  width: 120%;
  // margin: 0px auto -70px auto;
}
.mixBlnd {
  // background-blend-mode: screen;
}
</style>