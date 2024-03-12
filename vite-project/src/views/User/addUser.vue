<template>
  <div>
    <el-dialog v-model="dialogSwitch">
      <template #header>
        <span>新增用户</span>
      </template>
      <el-form>
        <el-row>
          <el-col :span="10">
            <el-form-item>
              <div class="flex w-full">
                <span class="w-12">姓名</span>
                <el-input></el-input>
              </div>
            </el-form-item>
          </el-col>
          <el-col
            :offset="2"
            :span="10"
          >
            <el-form-item>
              <div class="flex w-full">
                <span class="w-12">年龄</span>
                <el-input></el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item>
              <div class="flex w-full">
                <span class="w-12">性别</span>
                <el-input></el-input>
              </div>
            </el-form-item>
          </el-col>
          <el-col
            :offset="2"
            :span="10"
          >
            <el-form-item>
              <div class="flex w-full">
                <span class="w-24">出生日期</span>
                <el-input></el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item>
              <div class="flex w-full">
                <span class="w-12">地址</span>
                <el-input></el-input>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <div class="flex w-full justify-center">
          <el-button @click="close">取消</el-button>
          <el-button type="primary">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineExpose } from 'vue';

const dialogSwitch = ref(false);

const close = () => {
  dialogSwitch.value = false;
};

const open = () => {
  dialogSwitch.value = true;
};

defineExpose({
  open
});
</script>
