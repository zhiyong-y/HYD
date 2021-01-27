<template>
  <!-- <div>参数为：{{ this.$route.params.ip }}</div> -->
  <div>参数为：{{ this.$route.query.ip }}</div>
  <!-- <div>参数为：{{ ip }}</div> -->
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class NAME extends Vue {
  @Prop() ip!: string;
}
</script>
<style>
@import url("");
</style>
