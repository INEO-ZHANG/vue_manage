<template>
    <div class="common-layout">
      <el-container class="el-container lay-container">
        <commen-aside/>
        <el-container class="r-container">
          <commen-header/>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  

<script>
import { defineComponent } from 'vue'
import CommenHeader from '../components/CommenHeader.vue';
import CommenAside from '../components/CommenAside.vue';

export default defineComponent({
  components:{
    CommenHeader,
    CommenAside,
  },
});
</script>

<style lang="less" scoped>
.r-container{
  flex-wrap: wrap;
}
.common-layout{
  height: 100%;
  & > .el-container{
    height: 100%;
    & > .el-aside{
      height: 100%;
      background-color: #545c64;
      & > .el-menu{
        height: 100%;
        background-color: #545c64;
      }
    }
  }

}
.el-container{
  height: 100%;
  align-content: flex-start;
}


</style>