<template>
  <div class="project">
    <div class="flex-center project-top">
      <span class="title">{{title}}</span>
    </div>
    <div class="project-bot">
      <img :src="image" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: ['image','title']
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  line-height: 40px;
  color: white;
}
.project {
  position: relative;
  height: 280px;
  width: 320px;
  overflow: hidden;
  margin:0 6px 50px 6px;
  cursor: pointer;
  &:hover {
    .project-top {
      transform: translateY(0);
      opacity: 1;
    }
    .project-bot {
      transform: translateY(100%);
      opacity: 0;
    }
  }
}

.project-top {
  position: absolute;
  height: 280px;
  width: 320px;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 600ms ease;
}
.project-bot {
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  width: 320px;
  /* background-color: #f8f8f8; */
  background-color: #fff;
  opacity: 1;
  transition: all 600ms ease;
}
.project-bot img {
  width: 310px;
  height: 270px;
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>