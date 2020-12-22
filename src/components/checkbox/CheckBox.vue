<template>
  <label class="y-checkbox">
    <span class="y-checkbox__input">
      <span
        class="y-checkbox__inner"
        :class="[
          'y-checkbox--' + type,
          { 'is-disabled': disabled, 'is-checked': checked },
        ]"
      ></span>
      <!-- 需要完善 -->
      <input
        type="checkbox"
        v-model="model"
        :change="handlerChange"
        hidden
        aria-hidden="false"
      />
    </span>
    <span
      class="y-checkbox__content"
      :class="[
        'y-checkbox__content--' + type,
        { 'is-disabled': disabled, 'is-checked': checked },
      ]"
      v-text="label"
    ></span>
  </label>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Checkbox extends Vue {
  @Prop({ type: Boolean, default: false }) disabled?: boolean;
  @Prop({ type: String, default: "primary" }) type?: boolean;
  @Prop({ type: Boolean, default: false }) checked?: boolean;
  @Prop({ type: [Object, String], default: "" }) label?: object;
  @Prop({ type: [Object, String], default: "" }) value?: object;

  handlerChange() {
    console.info("handler...");
  }
  get model() {
    return {
      get(): object {
        return Checkbox.arguments.value;
      },

      set(val: boolean) {
        console.log(val);
      },
    };
  }
}
</script>
<style>
@import url("checkbox.css");
</style>
