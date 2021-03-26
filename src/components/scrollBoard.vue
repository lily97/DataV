<template>
  <dv-scroll-board :config="config" />
</template>

<script>
export default {
  name: "ScrollBoard",
  data() {
    return {
      config: {
        // header: ['时间', '病害信息', '数量', '标段'],
        data: [
          ["关于科技型企业申请补贴的政策？"],
          ["关于科技型企业申请补贴大是大非的政策？"],
          ["关于科技型企业申请sad哈师大好好的哈说补贴的政策？"],
          ["关于科技请补贴的政策？"],
          ["关于科技型企业申请说的补贴的政策？"],
          ["关于科技型企业申请补贴的政策？"],
          ["关于科技型企业申请补贴的政策？"],
          ["关于科技型企业申请补贴的政策？"],
        ],
        index: true,
        columnWidth: [50, 300],
        align: ["center"],
        rowNum: 7,
        headerBGC: "#1981f6",
        headerHeight: 45,
        // oddRowBGC: 'rgba(22, 30, 48,1)',
        oddRowBGC: "#000000",
        evenRowBGC: "rgba(22, 30, 48,1)",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.dv-scroll-board {
  /deep/ .rows {
    .row-item {
      .ceil {
        color: #9aacd8;
        .index {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
