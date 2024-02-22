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
    >
      <div class="flex count-card-list">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          v-for="item in countData"
          :key="item.name"
        >
          <component
            class="icons"
            :is="item.icon"
            :style="{ background: item.color }"
          ></component>
          <div class="count-p">
            <p class="num">￥{{ item.value }}</p>
            <p class="num-remark">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
  getTableData,
  getCountData
} from '/CS/vue_manage/vite-project/src/api/api';
const tableLabel = {
  name: '课程',
  todayBuy: '今日购买',
  monthBuy: '本月购买',
  totalBuy: '总购买'
};
const tableData = ref([]);
const countData = ref<any[]>([]);
// const getTableList = async () => {
//   await axios
//     .get(
//       'https://mock.presstime.cn/mock/65d36e6ca07c65d1ba4511c4/api/home/getTableData'
//     )
//     .then((res) => {
//       console.log(res);
//       tableData.value = res.data.data.tableData;
//     });
// };

onMounted(async () => {
  tableData.value = await getTableData({});
  countData.value = await getCountData({});
  console.log(countData);
});
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
.flex {
  display: flex;
}
.count-card-list {
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 32%;
    height: 80px;
    margin-bottom: 20px;
    .count-p {
      margin-left: 10px;
    }
    .num {
      font-size: 24px;
      font-weight: 600;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    .num-remark {
      font-size: 15px;
      color: #999;
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }
  .icons {
    width: 60px;
    height: 60px;
    padding: 10px;
  }
}
</style>
