<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu
  default-active="1-4-1"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
  @select="handleSelect"
  :collapse="isCollapse"
>
  <el-sub-menu index="1">
    <template #title>
      <i class="el-icon-location"></i>
      <span>导航一</span>
    </template>
    <el-menu-item-group>
      <template #title>分组一</template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-sub-menu index="1-4">
      <template #title>选项4</template>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <template #title>导航二</template>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <template #title>导航三</template>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <template #title>导航四</template>
  </el-menu-item>
</el-menu>
</template>

<script>
  export default {
    name: 'LeftMenu',
    data() {
      return {
        isCollapse: false,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect(key, keyPath){
        console.log(key, keyPath)
      }
    },
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>