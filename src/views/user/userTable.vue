<template>
  <transition name="fade">
    <div>
      <a-spin tip="Loading..." :spinning="$store.state.isLoading">
        <a-table
          :row-selection="{
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange,
            columnWidth: 100,
          }"
          :columns="columns"
          :data-source="userList"
          rowKey="key"
        >
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="opt" slot-scope="text, record">
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link" @click="getDetail(record.ip)">More</a>
          </span>
        </a-table>
      </a-spin>
    </div>
  </transition>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Divider } from "ant-design-vue";
import { getUserList } from "@/api/user/user";
import { RouteConfig } from "vue-router";
//registerHooks.js
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({
  components: {
    ADivider: Divider,
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log("组件内守卫");
  //   console.log(this); // 进入组件之前未被实例化，无法访问this
  // }
})
export default class NAME extends Vue {
  // component
  private columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      scopedSlots: { customRender: "name" },
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      scopedSlots: { customRender: "age" },
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      scopedSlots: { customRender: "address" },
    },
    {
      title: "IP",
      dataIndex: "ip",
      key: "ip",
      scopedSlots: { customRender: "ip" },
    },
    {
      title: "最后上线时间",
      dataIndex: "date",
      key: "date",
      scopedSlots: { customRender: "date" },
    },
    {
      title: "操作",
      dataIndex: "opt",
      key: "opt",
      scopedSlots: { customRender: "opt" },
    },
  ];
  private userList = [];
  selectedRowKeys = [];
  async created() {
    await getUserList()
      .then((res: unknown) => {
        // console.log(res);
        this.userList = (res as any).tableData;
        console.log("111111");
      })
      .catch((err) => {
        console.error(err);
      });

    // 测试async/await
    this.asyncFunc([12, 22, 3], "arrs1", "test");
  }

  asyncFunc(arg1: Array<number>, ...args: string[]) {
    console.log(arg1);
    console.info(args[1]);
    console.info("qwe".padStart(6));
    return new Promise<void>((resolve, reject) => {
      // todo
      const condition = true;
      if (condition) {
        // globalThis
        // console.info(globalThis);
        resolve();
      } else {
        reject();
      }
    });
  }

  onSelectChange(selectedRowKeys: never[]) {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.selectedRowKeys = selectedRowKeys;
  }
  getDetail(val: unknown): void {
    this.$router.push({ path: `/getUserDetail/${val}` });
    // this.$router.push({ name: "UserDetail", query: { ip: val } });
    // this.$router.push({ path: "/getUserDetail", query: { ip: val } });
  }
  beforeRouteEnter(to: RouteConfig, from: RouteConfig, next: Function): void {
    console.log("组件内守卫，进入路由前");
    console.log(this); // 进入组件之前未被实例化，无法访问this
    next((vm: object) => {
      // 异步打印出vm实例
      console.log(vm);
    });
  }
  beforeRouteLeave(to: RouteConfig, from: RouteConfig, next: Function): void {
    console.log("组件内守卫，离开路由");
    console.log(this); // 可以直接使用this
    next();
  }
  beforeRouteUpdate(to: RouteConfig, from: RouteConfig, next: Function): void {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  }
}
</script>
<style>
@import url("");
</style>
