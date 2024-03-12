<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="index"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const store = useStore();
const router = useRouter();
const route = useRoute();
const tags = store.state.tabsList;

const changeMenu = (val) => {
  router.push({
    name: val.name
  });
};

const handleClose = (tag, index) => {
  let length = tags.length - 1;
  store.commit('closeTab', tag);
  if (tag.name !== route.name) {
    return;
  }
  if (index == length) {
    router.push({
      name: tags[index - 1].name
    });
  } else {
    router.push({
      name: tags[index].name
    });
  }
};
</script>

<style lang="scss" scoped>
.tags {
  width: 100%;
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
