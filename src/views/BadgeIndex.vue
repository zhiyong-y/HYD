<template>
  <div>
    <y-page-header title="Badge" content="标志"></y-page-header>
    <y-divider position="center" direction="horizontal"></y-divider>
    <div class="container">
      <y-badge value="hot" class="item" type="info">
        <y-button ghost>Badge</y-button>
      </y-badge>
      <y-badge value="12" class="item" type="success">
        <y-button ghost>Badge</y-button>
      </y-badge>
      <y-badge value="4" class="item" type="warning">
        <y-button ghost>Badge</y-button>
      </y-badge>
      <y-badge value="99+" class="item" type="danger">
        <y-button ghost>Badge</y-button>
      </y-badge>
    </div>
    <div class="container">
      <y-badge value="hot" class="item" type="info">
        <y-button ghost type="info" icon="iconfont iconService"></y-button>
      </y-badge>
      <y-badge value="12" class="item" type="success">
        <y-button ghost type="success" icon="iconfont iconService"></y-button>
      </y-badge>
      <y-badge value="4" class="item" type="warning">
        <y-button ghost type="warning" icon="iconfont iconService"></y-button>
      </y-badge>
      <y-badge value="99+" class="item" type="danger">
        <y-button ghost type="danger" icon="iconfont iconService"></y-button>
      </y-badge>
    </div>
    <div class="container">
      <y-badge class="item" type="info">
        <y-button ghost type="info" icon="iconfont iconService"></y-button>
      </y-badge>
      <y-badge class="item" type="success">
        <y-button ghost type="success" icon="iconfont iconService"></y-button>
      </y-badge>
      <y-badge class="item" type="warning">
        <y-button ghost type="warning" icon="iconfont iconService"></y-button>
      </y-badge>
      <y-badge class="item" type="danger">
        <y-button ghost type="danger" icon="iconfont iconService"></y-button>
      </y-badge>
    </div>
    <div class="container">
      <y-badge class="item" icon="iconfont iconMore" type="info"></y-badge>
      <y-badge class="item" icon="iconfont iconSpecial" type="success"></y-badge>
      <y-badge class="item" icon="iconfont iconCorrect" type="warning"></y-badge>
      <y-badge class="item" icon="iconfont iconIncorrect" type="danger"></y-badge>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import YPageHeader from "@/components/page-header/YPageHeader.vue";
import YDivider from "@/components/divider/Divider.vue";
import YBadge from "@/components/badge/Badge.vue";
import YButton from "@/components/button/Button.vue";

@Component({
  components: {
    YPageHeader: YPageHeader,
    YDivider: YDivider,
    YBadge: YBadge,
    YButton: YButton,
  },
})
export default class BadgeIndex extends Vue {
  // component
}
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}
.y-badge + .y-badge {
  margin-left: 20px;
}
</style>
