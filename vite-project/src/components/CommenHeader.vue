<template>
  <el-header>
    <div class="l-content">
      <el-button
        size="small"
        @click="handleCollapse"
      >
        <el-icon :size="20"><Menu /></el-icon>
      </el-button>
      <el-breadcrumb
        class="current-menu"
        separator="/"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-if="current"
          :to="{ path: current.path }"
        >
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            class="user"
            :src="getImgSrc('user')"
            alt=""
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu style="width: 100px height: 200px">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    let store = useStore();
    const getImgSrc = (user) => {
      return new URL(`../assets/images/${user}.jpg`, import.meta.url).href;
    };
    const handleCollapse = () => {
      store.commit('updateIsCollapse');
    };
    const current = computed(() => {
      return store.state.currentMenu;
    });
    return {
      getImgSrc,
      handleCollapse,
      current
    };
  }
};
</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #333;
}
.r-content {
  width: 100px;
  & > el-dropdown {
    & > .el-dropdown-link {
      width: 100px;
    }
  }
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    display: flex;
    color: #fff;
    width: auto;
    align-items: center;
  }
}
.current-menu {
  & :deep .el-breadcrumb__inner {
    color: #fff;
    cursor: pointer !important;
  }
}
</style>
