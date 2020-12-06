<template>
  <div class="logo">
    <img alt="Vue logo" src="@/assets/logo.png" v-if="!collapsed" />
    <img alt="Vue logo" src="@/assets/collapsed-logo.png" v-if="collapsed" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Nav extends Vue {
  // @Prop(Boolean)
  // private collapsed!: string | boolean;
  @Prop({ type: Boolean, default: false })
  private collapsed!: boolean;
}
</script>
