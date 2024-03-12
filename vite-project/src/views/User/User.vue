<template>
  <div class="table-header flex justify-between">
    <div>
      <el-button
        type="primary"
        @click="add"
      >
        新增
      </el-button>
    </div>
    <div>
      <el-form>
        <el-form-item>
          <div class="flex">
            <span class="w-20">请输入</span>
            <el-input :suffix-icon="Search"></el-input>
            <el-button
              class="ml-2"
              type="primary"
            >
              搜索
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="date"
        label="Date"
        width="150"
      />
      <el-table-column
        prop="state"
        label="State"
        width="120"
      />
      <el-table-column
        prop="name"
        label="Name"
        width="120"
      />
      <el-table-column
        prop="city"
        label="City"
        width="120"
      />
      <el-table-column
        prop="address"
        label="Address"
        width="600"
      />
      <el-table-column
        prop="zip"
        label="Zip"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="Operations"
        width="180"
      >
        <template #default="scope">
          <el-button
            type="plain"
            size="small"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="w-full flex justify-center">
      <el-pagination
        layout="prev, pager, next"
        :total="50"
      />
    </div>
  </div>
  <addUser ref="addUserRef"></addUser>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getUserData } from '../../api/api';
import { Search } from '@element-plus/icons-vue';
import addUser from './addUser.vue';

const tableData = ref<any[]>([{}]);
const addUserRef = ref<InstanceType<typeof addUser>>();

const add = () => {
  addUserRef.value?.open();
};

const getUserList = async () => {
  tableData.value = await getUserData();
};

onMounted(() => {
  getUserList();
});
</script>
