<template>
  <div class="aaa">
    <!-- <a-tabs :default-active-key="activeKey" @change="callback">
      <a-tab-pane key="1" tab="Tab 1"></a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2"></a-tab-pane>
    </a-tabs> -->
    <transition name="slide">
      <router-view class=""></router-view>
      <!-- <router-view class="tab1-view" name="tab1"></router-view>
      <router-view class="tab2-view" name="tab2"></router-view> -->
    </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Tabs } from "ant-design-vue";

@Component({
  components: {
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
  },
})
export default class NAME extends Vue {
  activeKey = "1";
  // component
  callback(activeKey: string) {
    if (activeKey == "1") {
      this.$router.push({
        path: "/menusManage/tab1",
        query: {
          name: "tab1 Title",
        },
      });
    } else if (activeKey == "2") {
      this.$router.push({
        path: "/menusManage/tab2",
        query: {
          name: "tab2 Title",
        },
      });
    }
  }
}
</script>
<style>
@import url("");
</style>
