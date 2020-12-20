<template>
  <div>
    <!-- Page -->
    <y-page-header
      title="Button 按钮"
      content="这是一个按钮demo"
    ></y-page-header>
    <y-divider position="center" direction="horizontal"></y-divider>
    <y-page-header title="Default" content="常规按钮"></y-page-header>
    <div class="container">
      <y-button type="primary" @click="handler">默认按钮</y-button>
      <y-button type="info">信息按钮</y-button>
      <y-button type="success">成功按钮</y-button>
      <y-button type="danger">危险按钮</y-button>
      <y-button type="warning">警告按钮</y-button>
    </div>
    <div class="container">
      <y-button ghost type="primary">默认按钮</y-button>
      <y-button ghost type="info">信息按钮</y-button>
      <y-button ghost type="success">成功按钮</y-button>
      <y-button ghost type="danger">危险按钮</y-button>
      <y-button ghost type="warning">警告按钮</y-button>
    </div>
    <y-page-header title="Icon" content="带icon按钮"></y-page-header>
    <div class="container">
      <y-button type="primary" icon="iconfont iconService">默认按钮</y-button>
      <y-button type="info" icon="iconfont iconService">信息按钮</y-button>
      <y-button type="success" icon="iconfont iconService">成功按钮</y-button>
      <y-button type="danger" icon="iconfont iconService">危险按钮</y-button>
      <y-button type="warning" icon="iconfont iconService">警告按钮</y-button>
    </div>
    <div class="container">
      <y-button ghost type="primary" icon="iconfont iconService"
        >默认按钮</y-button
      >
      <y-button ghost type="info" icon="iconfont iconService"
        >信息按钮</y-button
      >
      <y-button ghost type="success" icon="iconfont iconService"
        >成功按钮</y-button
      >
      <y-button ghost type="danger" icon="iconfont iconService"
        >危险按钮</y-button
      >
      <y-button ghost type="warning" icon="iconfont iconService"
        >警告按钮</y-button
      >
    </div>
    <y-page-header title="Icon" content="纯icon按钮"></y-page-header>
    <div class="container">
      <y-button type="primary" icon="iconfont iconService"></y-button>
      <y-button type="info" icon="iconfont iconService"></y-button>
      <y-button type="success" icon="iconfont iconService"></y-button>
      <y-button type="danger" icon="iconfont iconService"></y-button>
      <y-button type="warning" icon="iconfont iconService"></y-button>
    </div>
    <div class="container">
      <y-button type="primary" size="small" icon="iconfont iconService"></y-button>
      <y-button type="info" size="small" icon="iconfont iconService"></y-button>
      <y-button type="success" size="small" icon="iconfont iconService"></y-button>
      <y-button type="danger" size="small" icon="iconfont iconService"></y-button>
      <y-button type="warning" size="small" icon="iconfont iconService"></y-button>
    </div>
    <div class="container">
      <y-button type="primary" circle icon="iconfont iconService"></y-button>
      <y-button type="info" circle icon="iconfont iconService"></y-button>
      <y-button type="success" circle icon="iconfont iconService"></y-button>
      <y-button type="danger" circle icon="iconfont iconService"></y-button>
      <y-button type="warning" circle icon="iconfont iconService"></y-button>
    </div>
    <div class="container">
      <y-button type="primary" size="small" circle icon="iconfont iconService"></y-button>
      <y-button type="info" size="small" circle icon="iconfont iconService"></y-button>
      <y-button type="success" size="small" circle icon="iconfont iconService"></y-button>
      <y-button type="danger" size="small" circle icon="iconfont iconService"></y-button>
      <y-button type="warning" size="small" circle icon="iconfont iconService"></y-button>
    </div>
    <y-page-header title="Disabled" content="禁用按钮"></y-page-header>
    <div class="container">
      <y-button disabled icon="iconfont iconService">默认按钮</y-button>
      <y-button disabled icon="iconfont iconService"></y-button>
      <y-button disabled circle icon="iconfont iconService"></y-button>
    </div>
    <y-page-header title="Ghost"></y-page-header>
    <div class="container">
      <y-button ghost type="primary" icon="iconfont iconService"
        >默认按钮</y-button
      >
      <y-button ghost type="info" icon="iconfont iconService"
        >信息按钮</y-button
      >
      <y-button ghost type="success" icon="iconfont iconService"
        >成功按钮</y-button
      >
      <y-button ghost type="danger" icon="iconfont iconService"
        >危险按钮</y-button
      >
      <y-button ghost type="warning" icon="iconfont iconService"
        >警告按钮</y-button
      >
    </div>
    <div class="container">
      <y-button ghost round type="primary" icon="iconfont iconService"
        >默认按钮</y-button
      >
      <y-button ghost round type="info" icon="iconfont iconService"
        >信息按钮</y-button
      >
      <y-button ghost round type="success" icon="iconfont iconService"
        >成功按钮</y-button
      >
      <y-button ghost round type="danger" icon="iconfont iconService"
        >危险按钮</y-button
      >
      <y-button ghost round type="warning" icon="iconfont iconService"
        >警告按钮</y-button
      >
    </div>
    <div class="container">
      <y-button circle ghost><a-icon type="home"></a-icon></y-button>
      <y-button size="medium" circle ghost>
        <a-icon type="home"></a-icon>
      </y-button>
      <y-button size="small" circle ghost>
        <a-icon type="home"></a-icon>
      </y-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Icon } from "ant-design-vue";
import { Vue, Component } from "vue-property-decorator";
import YPageHeader from "@/components/page-header/YPageHeader.vue";
import YDivider from "@/components/divider/Divider.vue";
import YButton from "@/components/button/Button.vue";

@Component({
  components: {
    YPageHeader: YPageHeader,
    YDivider: YDivider,
    YButton: YButton,
    AIcon: Icon
  }
})
export default class ButtonIndex extends Vue {
  // component
  handler(e: unknown) {
    console.log(e);
  }
}
</script>
<style lang="scss">
.container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}
.y-button + .y-button {
  margin-left: 10px;
}
</style>
