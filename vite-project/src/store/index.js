import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isCollapse: true,
      currentMenu: null,
      tabsList: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 'home'
        }
      ]
    };
  },
  mutations: {
    updateIsCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if (val.name === 'home') {
        state.currentMenu = null;
      } else {
        state.currentMenu = val;
        let result = state.tabsList.findIndex((item) => item.name === val.name);
        result === -1 ? state.tabsList.push(val) : '';
      }
    },
    closeTab(state, val) {
      let res = state.tabsList.findIndex((item) => item.name === val.name);
      state.tabsList.splice(res, 1);
    }
  }
});
