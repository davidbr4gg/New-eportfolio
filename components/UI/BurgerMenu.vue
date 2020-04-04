<template>
  <div class="menu" ref="menu">
    <button ref="nav-tgl" @click="show" class="nav-tgl" type="button" aria-label="toggle menu">
      <span aria-hidden="true" style="z-index:99;"></span>
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
    </button>

    <nav class="nav"></nav>
    <div class="link-wrap" style="z-index:1000;">
      <ul :style="`transform:${rotate}`">
        <a @click="show();$emit('clicked','about')">
          <li>Who Am I</li>
        </a>
        <a @click="show();$emit('clicked','tech')">
          <li>My Technical Skills</li>
        </a>
        <a @click="show();$emit('clicked','portfolio-wrap')">
          <li>Some Of My Works</li>
        </a>
        <a @click="show();$emit('clicked','contact')">
          <li>My Resume</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotate: "rotateX(90deg);"
    };
  },
  methods: {
    show() {
      let menu = this.$refs.menu;
      if (menu.className.indexOf("active") == -1) {
        this.$emit("active");
        menu.classList.add("active");
        setTimeout(() => {
          this.rotate = "rotateX(0deg);";
        }, 100);
      } else {
        this.$emit("inactive");
        this.rotate = "rotateX(90deg);";
        menu.classList.remove("active");
      }
    },
    scroll() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(window);
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
ul {
  pointer-events: none;
  color: white;
  position: relative;
  margin-top: -50px;
  opacity: 0;
  li {
    font-family: "Playfair Display", "Times New Roman", Times, serif !important;
    font-size: 60px;
    list-style: none;
    line-height: 60px;
    padding: 12px 0;
    text-align: center;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      color: rgba(#fff, 0.75) !important;
      text-decoration: none;
    }
  }
}
.md-theme-default a:not(.md-button) {
  color: inherit !important;
}
a:hover {
  text-decoration: none;
}
.link-wrap {
  position: absolute;
  display: none;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.view {
}

.nav-tgl {
  display: inline-block;
  cursor: pointer;
  position: fixed;
  transform: translateX(-100%);
  z-index: 1001;
  width: 66px;
  height: 66px;
  border: none;
  padding: 0;
  background: none;
  display: flex;
  // justify-content: center;
  align-items: center;
  line-height: 0.6;
  // text-align: center;

  // making the dividers
  > span {
    // the second divider
    position: relative;
    display: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 34px;
    border-radius: 1px;
    background: #293335;
    background: black;
    // vertical-align: middle;
    align-self: center;

    // the first & the third dividers
    &:before,
    &:after {
      display: inline-block;
      position: absolute;
      content: "";
      height: 4px;
      border-radius: 1px;
      background: #293335;
      background: black;
      // for the hover state
      transition: all 200ms;
    }
    &:before {
      top: -11px;
      left: 50%;

      transform: translateX(-50%);
      width: 34px;
    }
    &:after {
      top: 11px;
      // left: 6px;
      transform: translateX(-50%);
      left: 50%;
      width: 22px;
      width: 34px;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover > span:after,
  &:hover > span:before {
    width: 34px;
    transition: all 0.3s ease;
    background-color: black;
  }
  &:hover {
    span {
      transition: all 0.3s ease;
      background: black;
    }
  }
  &:hover .circle {
    transition: all 1s ease;
    box-shadow: 0 0 40px rgba(white, 1), inset 0 0 60px rgba(white, 1);
  }
}

// for the nav background
.nav:before {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  content: "";
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  transition: all 300ms ease-in-out;
  z-index: 99;

  clip-path: circle(30px at calc(100% - 65px) 65px);
  visibility: hidden;
}

.menu.active {
  .circle {
    box-shadow: 0 0 40px rgba(white, 1), inset 0 0 60px rgba(white, 1);
  }
  .nav:before {
    visibility: visible;

    clip-path: circle(100%);
  }
  .link-wrap {
    display: flex;
  }
  ul {
    pointer-events: auto;
    display: flex;
    padding: 0;
    margin: 0;
    flex-direction: column;
    justify-content: space-around;
    height: 80vh;
    width: 100%;
    opacity: 1;
    transform: rotateX(0deg);
    transition: transform 500ms ease-in-out;
  }

  .nav-tgl > span {
    height: 0;
    &:after,
    &:before {
      top: 0px;
      left: 0;
      width: 34px;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
  }
}
@media screen and (max-width: 1028px) {
  ul {
    margin-top: 0px;
    li {
      font-size: 40px !important;
    }
  }
}
</style>