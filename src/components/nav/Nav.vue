<template>
  <div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1" class="right-item">
        <a-icon type="user" />
        <span><router-link to="/a" class="link">Home</router-link></span>
      </a-menu-item>
      <a-menu-item key="2" class="right-item">
        <a-icon type="video-camera" />
        <span>
          <router-link to="/about" class="link">About</router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>Contact</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Icon, Menu } from "ant-design-vue";
import { Vue, Component } from "vue-property-decorator";
// 导入api
import { getMenu } from "../../api/api";

@Component({
  components: {
    AIcon: Icon,
    AMenu: Menu,
    ASubMenu: Menu.SubMenu,
    AMenuItem: Menu.Item
  }
})
export default class Nav extends Vue {
  created() {
    console.log("created...");
    getMenu()
      .then(res => {
        console.log(res);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any): void => {
        console.log(err);
      });
  }
}
</script>
