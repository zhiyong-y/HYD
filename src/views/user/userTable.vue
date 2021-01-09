<template>
  <div>
    <a-spin tip="Loading..." :spinning="$store.state.isLoading">
      <a-table
        :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
          columnWidth: 100
        }"
        :columns="columns"
        :data-source="userList"
        rowKey="key"
      >
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </a-spin>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getUserList } from "@/api/user/user";
@Component({})
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
  ];
  private userList = [];
  selectedRowKeys = [];
  created() {
    getUserList()
      .then((res: unknown) => {
        console.log(res);
        this.userList = (res as any).tableData;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  onSelectChange(selectedRowKeys: never[]) {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.selectedRowKeys = selectedRowKeys;
  }
}
</script>
<style>
@import url("");
</style>
