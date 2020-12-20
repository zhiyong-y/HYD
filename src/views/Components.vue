<template>
  <div>
    <!-- 按钮Demo -->
    <button-index></button-index>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ButtonIndex from "@/views/ButtonIndex.vue";

@Component({
  components: {
    ButtonIndex: ButtonIndex
  }
})
export default class NAME extends Vue {}
</script>
<style lang="scss"></style>
