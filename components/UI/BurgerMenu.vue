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

    <nav class="nav">
      <ul>
        <li>El 1</li>
        <li>El 1</li>
        <li>El 1</li>
        <li>El 1</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      let menu = this.$refs.menu;
      if (menu.className.indexOf("active") == -1) {
        menu.classList.add("active");
      } else {
        menu.classList.remove("active");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.circle {
  transition:box-shadow 0.3s ease;
  background-color:rgba(255,255,255,0.5);
  box-shadow: 0 0 2px rgba(white, 1), inset 0 0 3px rgba(white, 1);
}
.nav {
  ul {
    display: none;
  }
}
.view {
}

.nav-tgl {
  display: inline-block;
  cursor: pointer;
  position: fixed;
  transform: translateX(-100%);
  z-index: 100;
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
</style>