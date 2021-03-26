<template>
  <dv-scroll-ranking-board :config="config" />
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "日常养护",
            value: 55,
          },
          {
            name: "交通事故",
            value: 120,
          },
          {
            name: "路面",
            value: 78,
          },
          {
            name: "桥通",
            value: 66,
          },
          {
            name: "计日工",
            value: 80,
          },
        ],
        rowNum: 5,
        unit: "%",
        showValue: true,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.dv-scroll-ranking-board {
 /deep/ .row-item {
    .ranking-info {
      font-size: 14px;
      color: #9aacd8 !important;
      .rank {
        font-size: 14px;
        color: #9aacd8 !important;
      }
    }
    .ranking-column {
      border-bottom: 2px solid #1b2954;
      .inside-column {
        background: #403dbf;
        border-radius: 3px;
      }
    }
  }
}
</style>
