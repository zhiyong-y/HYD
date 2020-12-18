<template>
  <div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['INDEX']">
      <template v-for="item in menus">
        <a-menu-item
          class="right-item"
          v-if="item.subMenu.length === 0"
          :key="item.rightName"
        >
          <a-icon :type="item.rightIcon" />
          <span>
            <router-link :to="item.rightUrl" class="link">
              {{ item.rightName }}
            </router-link>
          </span>
        </a-menu-item>
        <!-- 如果存在子菜单 -->
        <a-sub-menu v-else :key="item.rightName" class="right-item">
          <span slot="title">
            <a-icon :type="item.rightIcon" />
            <span>
              <router-link :to="item.rightUrl" class="link">
                {{ item.rightName }}
              </router-link>
            </span>
          </span>
          <template v-for="subItem in item.subMenu">
            <a-menu-item class="right-item" :key="subItem.rightName">
              <a-icon
                v-if="subItem.rightIcon != null"
                :type="subItem.rightIcon.trim()"
              />
              <span>
                <router-link :to="subItem.rightUrl" class="link">
                  {{ subItem.rightName }}
                </router-link>
              </span>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
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
  menus: object = [];
  created() {
    // 需要改造，通过vuex获取
    getMenu()
      .then(res => {
        // 初次使用ts，暂时先用这个蹩脚且不合适的方式屏蔽掉警告
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.menus = (res as any).result.list;
        console.log(this.menus);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>
