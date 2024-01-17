<template>
  <el-row
    class="home"
    :gutter="20"
  >
    <el-col
      :span="8"
      style="margin-top: 20px"
    >
      <el-card shadow="hover">
        <div class="user">
          <img
            src="../../assets/images/user.jpg"
            alt=""
          />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间：
            <span>2024-1-13</span>
          </p>
          <p>
            上次登录的地点：
            <span>广东深圳</span>
          </p>
        </div>
      </el-card>
      <el-card
        shadow="hover"
        style="margin-top: 20px"
        height="450px"
      >
        <el-table :data="tableData">
          <el-table-column
            v-for="(value, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="value"
          />
        </el-table>
      </el-card>
    </el-col>
    <el-col
      :span="16"
      style="margin-top: 20px"
    ></el-col>
  </el-row>
</template>
<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const tableLabel = {
  name: '课程',
  todayBuy: '今日购买',
  monthBuy: '本月购买',
  totalBuy: '总购买'
}
const tableData = ref([])
const getTableList = async () => {
  await axios.get('/home/getData').then((res) => {
    tableData.value = res.data.data.tableData
  })
}

onMounted(() => {
  getTableList()
})
</script>
<style lang="scss" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }

  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      margin: 0;

      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
</style>
