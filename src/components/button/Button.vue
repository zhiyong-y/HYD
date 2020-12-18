<template>
  <!-- 根据props生成的类型通过 -- 连接 -->
  <button
    @click="handlerClick"
    class="y-button"
    :disabled="disabled"
    :class="[
      type && !ghost ? 'y-button--' + type : '',
      size ? 'y-button--' + size : '',
      {
        'is-ghost': ghost,
        'is-circle': circle,
        'is-round': round,
        'is-disabled': disabled,
        'no-label': $slots.default === undefined,
      },
      type && ghost ? 'y-button-ghost--' + type : '',
    ]"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {
  @Prop({ type: Boolean }) ghost!: boolean;
  @Prop({ type: String }) type?: string;
  @Prop({ type: String, default: "default" }) size!: string;
  @Prop({ type: Boolean }) circle!: boolean;
  @Prop({ type: Boolean }) round!: boolean;
  @Prop({ type: Boolean }) disabled!: boolean;
  @Prop({ type: String, default: "" }) icon!: string;

  handlerClick() {
    this.$emit("click", event);
  }
}
</script>
<style>
@import url("button.css");
</style>
