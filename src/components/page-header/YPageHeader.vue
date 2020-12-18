<template>
  <div class="y-page-header">
    <div class="y-page-header__left">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="y-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class YPageHeader extends Vue {
  @Prop({ type: String, default: "Title" }) private title!: string;
  @Prop({ type: String, default: "content" }) private content!: string;
}
</script>
<style lang="scss">
@import url("YPageHeader.css");
</style>
