<template>
  <div class="common-layout">
    <el-container class="el-container lay-container">
      <commen-aside class="el-aside" />
      <el-container class="r-container">
        <commen-header />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import CommenHeader from "../components/CommenHeader.vue";
import CommenAside from "../components/CommenAside.vue";
</script>

<style lang="scss" scoped>
.r-container {
  flex-wrap: wrap;
}
.common-layout {
  height: 100%;
  & > .el-container {
    height: 100%;
    & > .el-aside {
      height: 100%;
      background-color: #545c54;
    }
  }
}
.el-container {
  height: 100%;
  align-content: flex-start;
}
</style>
