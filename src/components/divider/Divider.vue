<template functional>
  <div
    :class="['y-divider', 'y-divider-' + props.direction]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div
      :class="['y-divider__text', 'is-' + props.position]"
      v-if="slots().default && props.direction !== 'vertical'"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class YDivider extends Vue {
  /**
   * Q：很好奇为什么注解不好用了????
   * A：是好用的，当前组件为函数式组件，无状态、无实例，无需script
   *
   * todolist：
   * 1. 增加垂直方向
   */
  @Prop({ type: String, default: "center" }) private position!: string;
  @Prop({ type: String, default: "horizontal" }) private direction!: string;
}
</script>
<style lang="scss">
@import url("Divider.css");
</style>
