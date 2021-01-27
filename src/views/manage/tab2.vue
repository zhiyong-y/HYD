<template>
  <div>
    <!-- Page -->
    tab2参数为：{{ this.$route.query.name }}
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class NAME extends Vue {
  // component
}
</script>
