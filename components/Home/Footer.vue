<template>
  <div id="footer">
    <div class="wrap-container d-flex align-items-center flex-column">
      <a href="#" class="logo-wrapper">
        <img src="~/assets/img/logo.svg" alt="David Bragg Logo" />
        <span class="footer-logo-top-label">
          Top
          <font-awesome-icon icon="arrow-up" />
        </span>
      </a>
      <div class="links">
        <a href="https://github.com/davidbr4gg" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/david-bragg-5b23a1176/" target="_blank">LinkedIn</a>
        <a href="mailto:davidbr4gg@outlook.com" target="_blank">Email</a>
        <a href="/Resume.pdf">Resume</a>
      </div>
      <div class="copy-right" style="margin-top:5px;">Copyright © {{year}} David Bragg</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: 2020
    };
  },
  mounted() {
    let d = new Date();
    this.year = d.getFullYear();
  }
};
</script>

<style lang="scss" scoped>
* {
  color: #f3f3f3;
}
a:hover {
  text-decoration: none;
  color: #f3f3f3 !important;
}
.links a {
  position: relative;
}
.links a:hover:after {
  width: 100%;
  left: 0;
}
.links a:after {
  background-color: white;
  transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
  content: "";
  position: absolute;
  bottom: -3px;
  right: 0;
  left: auto;
  width: 0;
  height: 3px;
  z-index: 2;
  // border-radius: 20%;
}
.logo-wrapper:hover .footer-logo-top-label {
  opacity: 1;
  visibility: visible;
  transform: translateX(60px);
}

.footer-logo-top-label {
  font-family: League Spartan, Helvetica, Arial, sans-serif;
  position: absolute;
  top: 30px;
  right: 0;
  font-size: 0.875em;
  font-weight: bold;
  opacity: 0;
  visibility: hidden;
  transform: translateX(40px);
  transition: all 0.3s ease;
  pointer-events: none;
}
.links {
  display: flex;
  width: 100%;
  padding: 0 15px;
  max-width: 500px;
  justify-content: space-between;
  margin-bottom: 33px;
}
.links a {
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
  color: #f3f3f3;
  &:hover {
    text-decoration: none;
  }
}
.logo-wrapper {
  margin-bottom: 30px;
  position: relative;
}
#footer {
  background-color: #242424;
}
img {
  width: 70px;
  height: 70px;
  opacity: 0.93;
}
.wrap-container {
  padding: 8% 15px;
}
</style>