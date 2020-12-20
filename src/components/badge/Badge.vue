<template>
  <div class="y-badge">
    <slot></slot>
    <!-- 过渡动画?? -->
    <transition>
      <sup
        class="y-badge-content"
        v-text="value"
        :class="['y-badge--' + type, valueLength, icon]"
      ></sup>
    </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Badge extends Vue {
  @Prop({ type: [String, Number], default: "" }) value?: string;
  @Prop({ type: String, default: "" }) icon!: string;
  @Prop({ type: String, default: "default" }) type?: string;

  get valueLength() {
    console.log(this.value);
    if (typeof this.value === "string") {
      if (this.value !== "") {
        return this.value.length > 1 ? "y-badge-long" : "y-badge-normal";
      } else {
        return this.icon === "" ? "y-badge-empty" : "";
      }
    } else if (typeof this.value === "number") {
      return this.value > 9 ? "y-badge-long" : "y-badge-normal";
    } else {
      return "y-badge-normal";
    }
  }
}
</script>
<style scoped>
@import url("badge.css");
</style>
