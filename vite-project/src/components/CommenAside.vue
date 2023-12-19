<template>
    <el-aside width="$store.state.isCollapse? '180px':'64px'">
        <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
        :collapse="!$store.state.isCollapse">
        <h3 v-html="$store.state.isCollapse?'后台管理':'后台'"></h3>
            <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
                <component class="icons" :is="item.icon"></component>
                <span>{{item.label}}</span>
            </el-menu-item>
            <el-sub-menu class="other" :index="item.label" v-for="item in hasChildren()" :key="item.path">
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex" :index="subItem.path" @click="clickMenu(subItem)">
                        <component class="icons" :is="subItem.icon"></component>
                        <span>{{subItem.label}}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-aside>
  </template>
  
  <script>
  import {useRouter} from 'vue-router'
  export default {
    setup(){
        const router=useRouter()
        const list = [
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: 'UserManage/UserManage',
            },
            {
                path: '/other',
                name: 'other',
                label: '其他',
                icon: 'location',
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'setting',
                        url: 'Other/PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'setting',
                        url: 'Other/PageTwo'
                    },
                ],
            }
        ];
        const noChildren = () => {
            return list.filter(item => !item.children);
        };
        
        const hasChildren = () => {
            return list.filter(item => item.children);
        };
        const clickMenu=(item)=>{
            router.push({
                name:item.name,
            })
        }
        return {
            list,
            noChildren,
            hasChildren,
            clickMenu,
        };
    }
  }
  </script>
  
<style lang="less" scoped>
.icons{
    width:16px;
    height:16px;
}
.el-aside{
    overflow: hidden;
}
.el-menu{
    height: auto;
    border:none;
    h3{
        line-height: 48px;
        text-align: center;
        color: #fff;
        height: auto;
    }
}

.el-sub-menu :deep(.el-sub-menu__icon-arrow) {
    transform: rotate(-90deg) !important;
    width: auto;
}

.el-sub-menu.is-opened> :deep(.el-sub-menu__title .el-sub-menu__icon-arrow) {
    transform: rotate(0deg) !important;
}
</style>