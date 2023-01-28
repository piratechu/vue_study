<template>
  <!--把引入的components 放入此處-->
    <!-- <el-container>
    <el-aside width="200px"><LeftMenu></LeftMenu></el-aside>
    <el-container>
      <el-header>
        <HeadMenu activeIndex="1"></HeadMenu>
      </el-header>
      <el-main>
        <HelloWorld msg="Element Plus Demo" ref="content"></HelloWorld>
        <el-button type="success" @click="showRef">點我顯示呼叫 ref</el-button>
      </el-main>
      <el-footer>HomeVuew.vue : vue3.0 + element plus</el-footer>
    </el-container>
  </el-container> -->
  <HelloWorld />
  </template>

<script>
// @ is an alias to /src
// import HeadMenu from "@/components/HeadMenu.vue";
// import LeftMenu from "@/components/LeftMenu.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld
  }
};
</script>
