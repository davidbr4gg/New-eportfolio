<template>
  <div id="app-wrap" style="overflow-x:none;">
    <AppNav @clicked="navigate" />
    <Landing />
    <div id="app-about">
      <AboutMe />
    </div>
    <div id="app-tech">
      <Stack />
    </div>
    <div id="app-portfolio-wrap">
      <Portfolio />
    </div>
    <div id="app-contact">
      <Contact />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Landing from "~/components/Home/Landing.vue";
import AppNav from "~/components/AppNav.vue";
import AboutMe from "~/components/Home/AboutMe.vue";
import Portfolio from "~/components/Home/Portfolio.vue";
import Stack from "~/components/Home/Stack.vue";
import Contact from "~/components/Home/Contact.vue";
import AppFooter from "~/components/Home/Footer.vue";
export default {
  components: {
    Landing,
    AppNav,
    Portfolio,
    AboutMe,
    Stack,
    Contact,
    AppFooter
  },
  methods: {
    navigate(payload) {
      this.showIt(payload);
    },
    showIt(el_id) {
      console.log(el_id);
      var el = document.getElementById(`app-${el_id}`);
      console.log(el);
      el.scrollIntoView(true, { behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.placeholder {
  height: 100px;
  background-color: green;
  z-index: -1;
}
</style>