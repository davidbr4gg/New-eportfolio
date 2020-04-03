<template>
  <div style="max-height:100vh;overflow-y:scroll;overflow-x:none;">
    <AppNav />
    <Landing />
    <div class="placeholder"></div>
    <AboutMe />
    <Stack />
    <Portfolio />
    <Contact />
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