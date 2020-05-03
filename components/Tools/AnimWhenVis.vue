<template>
  <div>
    <transition :name="name" :appear="appear">
      <div
        v-if="isVisible"
        :style="{ animationDuration: `${duration}ms`, transitionDuration: `${duration}ms`,
        animationDelay: `${delay}ms` }"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
let isPassiveSupported = false;
try {
  const options = Object.defineProperty({}, "passive", {
    get: () => (isPassiveSupported = true)
  });
  window.addEventListener("test", null, options);
} catch (err) {}
export default {
  props: {
    name: { type: String, default: "fadeUp" },
    appear: { type: Boolean, default: true },
    offsetTop: { type: Number, default: 0 },
    duration: { type: Number, default: 1500 },
    showPhone: { default: true },
    delay: { default: 300 }
  },
  data: () => ({
    isVisible: false
  }),
  methods: {
    inViewport() {
      const rect = this.$el.getBoundingClientRect();

      // IF CLIENT SIZE IS LESS THAN 768px, DONT ANIMATE
      if (!this.showPhone && document.documentElement.clientWidth < 768) {
        return (this.isVisible = true);
      }
      return (
        rect.top <= window.innerHeight - this.offsetTop &&
        rect.left <= window.innerWidth
      );
    },
    detectVisibility() {
      this.isVisible = this.inViewport();
    }
  },
  mounted() {
    this.$nextTick(this.detectVisibility);
    window.addEventListener(
      "scroll",
      this.detectVisibility,
      isPassiveSupported ? { passive: true } : false
    );
    window.addEventListener(
      "resize",
      this.detectVisibility,
      isPassiveSupported ? { passive: true } : false
    );
    window.addEventListener(
      "orientationchange",
      this.detectVisibility,
      isPassiveSupported ? { passive: true } : false
    );
  },
  destroyed() {
    window.removeEventListener("scroll", this.detectVisibility);
    window.removeEventListener("resize", this.detectVisibility);
    window.removeEventListener("orientationchange", this.detectVisibility);
  }
};
</script>

<style lang="scss" scoped>
.fadeUp-enter-active,
.fade-enter-active,
.fadeUp-leave-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fadeUp-enter,
.fadeUp-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>