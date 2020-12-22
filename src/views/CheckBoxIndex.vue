<template>
  <div>
    <!-- Page -->
    <y-page-header title="CheckBox" content="复选框"></y-page-header>
    <y-divider></y-divider>
    <y-page-header title="Default" content="常规未选中"></y-page-header>
    <div class="container">
      <y-checkbox></y-checkbox>
      <y-checkbox type="info"></y-checkbox>
      <y-checkbox type="success"></y-checkbox>
      <y-checkbox type="warning"></y-checkbox>
      <y-checkbox type="danger"></y-checkbox>
    </div>
    <y-page-header title="Checked" content="常规选中"></y-page-header>
    <div class="container">
      <y-checkbox checked></y-checkbox>
      <y-checkbox type="info" checked></y-checkbox>
      <y-checkbox type="success" checked></y-checkbox>
      <y-checkbox type="warning" checked></y-checkbox>
      <y-checkbox type="danger" checked></y-checkbox>
    </div>
    <y-page-header title="Default with Content" content="带content且未选中"></y-page-header>
    <div class="container">
      <y-checkbox label="默认复选框"></y-checkbox>
      <y-checkbox type="info" label="信息复选框"></y-checkbox>
      <y-checkbox type="success" label="成功复选框"></y-checkbox>
      <y-checkbox type="warning" label="警告复选框"></y-checkbox>
      <y-checkbox type="danger" label="危险复选框"></y-checkbox>
    </div>
    <y-page-header title="Checked with Content" content="带content选中"></y-page-header>
    <div class="container">
      <y-checkbox checked label="默认复选框"></y-checkbox>
      <y-checkbox type="info" checked label="信息复选框"></y-checkbox>
      <y-checkbox type="success" checked label="成功复选框"></y-checkbox>
      <y-checkbox type="warning" checked label="警告复选框"></y-checkbox>
      <y-checkbox type="danger" checked label="危险复选框"></y-checkbox>
    </div>
    <y-page-header title="Disabled" content="未选中禁用"></y-page-header>
    <div class="container">
      <y-checkbox disabled></y-checkbox>
      <y-checkbox disabled type="info"></y-checkbox>
      <y-checkbox disabled type="success"></y-checkbox>
      <y-checkbox disabled type="warning"></y-checkbox>
      <y-checkbox disabled type="danger"></y-checkbox>
    </div>
    <y-page-header title="Checked Disabled" content="选中禁用"></y-page-header>
    <div class="container">
      <y-checkbox disabled checked></y-checkbox>
      <y-checkbox disabled checked type="info"></y-checkbox>
      <y-checkbox disabled checked type="success"></y-checkbox>
      <y-checkbox disabled checked type="warning"></y-checkbox>
      <y-checkbox disabled checked type="danger"></y-checkbox>
    </div>
    <div class="container">
      <y-checkbox disabled checked label="默认复选框"></y-checkbox>
      <y-checkbox disabled type="info" checked label="信息复选框"></y-checkbox>
      <y-checkbox disabled type="success" checked label="成功复选框"></y-checkbox>
      <y-checkbox disabled type="warning" checked label="警告复选框"></y-checkbox>
      <y-checkbox disabled type="danger" checked label="危险复选框"></y-checkbox>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import YPageHeader from "@/components/page-header/YPageHeader.vue";
import YDivider from "@/components/divider/Divider.vue";
import YCheckbox from "@/components/checkbox/CheckBox.vue";

@Component({
  components: {
    YPageHeader: YPageHeader,
    YDivider: YDivider,
    YCheckbox: YCheckbox,
  },
})
export default class CheckBoxIndex extends Vue {
  // component
}
</script>
<style>
.container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}
.y-checkbox + .y-checkbox {
  margin-left: 10px;
}
</style>
