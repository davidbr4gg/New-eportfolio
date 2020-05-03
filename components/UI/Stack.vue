<template>
  <div id="stack">
    <div style="position:relative;">
      <Anim>
        <h2>This is my technology stack.</h2>
      </Anim>
      <span id="tech" style="position:absolute;top:-150px;"></span>
    </div>

    <div class="wrap-container">
      <div class="row justify-content-around" style="margin:0;">
        <Anim>
          <div class="language flex-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              alt
              id="html"
            />
            <span class="lang-txt">HTML</span>
          </div>
        </Anim>
        <Anim>
          <div class="language flex-center">
            <img src="~/assets/img/css.svg" id="css" alt />
            <!-- <svg id="css" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32">
            <path
              fill="#e54d26"
              d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
            />
            </svg>-->
            <span class="lang-txt">CSS</span>
          </div>
        </Anim>
        <Anim>
          <div class="language flex-center" style="margin-top:15px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="165" height="165">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z" />
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              />
            </svg>
            <span class="lang-txt">JavaScript</span>
          </div>
        </Anim>
        <Anim>
          <div class="language flex-center">
            <img src="../../assets/img/vue.png" id="vue" alt />
            <span class="lang-txt">VueJS</span>
          </div>
        </Anim>
        <Anim>
          <div class="language flex-center">
            <svg
              id="nuxt"
              width="185px"
              height="185px"
              viewBox="0 0 256 189"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <polygon
                  fill="#48B884"
                  points="109.7766 0.0009 -0.0004 188.2259 219.5526 188.2259"
                />
                <polygon fill="#3F7F70" points="72.8361 188.226 255.9991 188.226 164.4181 31.198" />
                <polygon fill="#36495D" points="72.8361 188.226 219.5521 188.226 146.1941 62.444" />
              </g>
            </svg>

            <span class="lang-txt">NuxtJS</span>
          </div>
        </Anim>
        <Anim>
          <div class="language flex-center">
            <img
              src="~/assets/img/react.png"
              alt
              id="react"
              style="padding: 20px 0;min-width:250px;height:auto;"
            />

            <span class="lang-txt">ReactJS</span>
          </div>
        </Anim>
        <Anim>
          <div class="language flex-center">
            <img
              id="node"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt
            />

            <span class="lang-txt">NodeJS</span>
          </div>
        </Anim>
        <Anim>
          <div class="language flex-center">
            <img src="~/assets/img/express.png" alt id="express" />

            <span class="lang-txt">ExpressJS</span>
          </div>
        </Anim>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span.lang-txt {
  font-size: 28px;
  position: absolute;
  bottom: 0px;
  transform: scale(0);
  opacity: 0;
  transition: all 300ms ease;
}
.language:hover {
  span.lang-txt {
    opacity: 1;
    bottom: -25px;
    transform: scale(1);
  }
  svg,
  img {
    filter: brightness(80%);
    // opacity:0.86;
  }
}
.language {
  flex-direction: column;
  height: 200px;
  width: 200px;
  position: relative;
  margin: 20px;
}
#js {
  height: 200px;
  width: 200px;
  padding: 0;
}
#html {
  width: 197px;
  height: 197px;
}
#vue {
  height: 190px;
  width: 210px;
  padding-top: 10px;
  padding-bottom: 25px;
}
#stack {
  padding-top: 70px;
  padding-bottom: 120px;
  z-index: 9999;
}
#express {
  padding-left: 0px;
  padding-right: 0px;
  width: 240px;
}

img {
  padding: 20px;
  height: 200px;
  width: 200px;
}
svg,
img {
  transition: all 300ms ease;
  filter: brightness(100%);
}
@media screen and (max-width: 728px) {
  span.lang-txt {
    bottom: -25px;
    transform: scale(1);
    opacity: 1;
  }
}
</style>