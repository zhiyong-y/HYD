<template>
  <div id="app">
    <a-layout id="trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <a-logo :collapsed="collapsed"></a-logo>
        <a-nav></a-nav>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          <a-breadcrumb></a-breadcrumb>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { Layout, Icon } from "ant-design-vue";
import { Vue, Component } from "vue-property-decorator";

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
  }
})
export default class Index extends Vue {
  collapsed = false;
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
