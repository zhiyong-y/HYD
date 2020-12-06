<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item href="">
        <a-icon type="home" />
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <a-icon type="user" />
        <span>Application List</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item> Application </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import { Breadcrumb, Icon } from "ant-design-vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    AIcon: Icon,
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item
  },
  props: {}
})
export default class Nav extends Vue {
  name = "123";
}
</script>
