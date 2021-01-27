<template>
  <div id="app">
    <a-layout id="trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <a-logo :collapsed="collapsed"></a-logo>
        <a-nav></a-nav>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="layout-header">
          <a-icon class="trigger" :type="menuType" @click="isCollapsed()" />
        </a-layout-header>
        <a-layout-content class="layout-content">
          <!-- <a-breadcrumb></a-breadcrumb> -->
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { Layout, Icon } from "ant-design-vue";
import { Vue, Component, Watch } from "vue-property-decorator";

// 自定义组件
import Nav from "./components/nav/Nav.vue";
import Breadcrumb from "./components/breadcrumb/Breadcrumb.vue";
import Logo from "./components/logo/Logo.vue";

@Component({
  components: {
    AIcon: Icon,
    ALayout: Layout,
    ALayoutHeader: Layout.Header, //子组件也要注册，这个地方对新手来说太坑了
    ALayoutSider: Layout.Sider,
    ALayoutContent: Layout.Content,
    ALayoutFooter: Layout.Footer,
    ANav: Nav,
    ABreadcrumb: Breadcrumb,
    ALogo: Logo
  },
})
export default class Index extends Vue {
  private collapsed = false;
  isCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  @Watch("collapsed")
  onChange(): void {
    console.log("collapsed...");
  }
  // 在vue-cli4.0中的vue-class-component写法中，get xxx() 相当于计算属性
  get menuType(): string {
    return this.collapsed ? "menu-unfold" : "menu-fold";
  }
  // methods
  getMenus(): void {
    // 相当于methods中的方法
  }
  // mounted
  mounted() {
    // console.log("生命周期钩子");
  }
}
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
#trigger {
  width: 100%;
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    margin: 16px;
  }
  .layout-header {
    background: #fff;
    padding: 0;
  }
  .layout-content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.right-item {
  &:hover span > a {
    color: #ffffff;
  }
  .link {
    color: rgba(255, 255, 255, 0.65);
    &:hover {
      color: #ffffff;
    }
  }
}
.right-item.ant-menu-item-selected span > a {
  color: #ffffff;
}
</style>
