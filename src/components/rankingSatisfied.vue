<template>
  <dv-scroll-ranking-board :config="config" />
</template>

<script>
import { getAppealRanking } from "@/api/index";

export default {
  props: ["type"],

  data() {
    return {
      config: {
        data: [
          // {
          //   name: "日常养护",
          //   value: 55,
          // },
          // {
          //   name: "交通事故",
          //   value: 120,
          // },
          // {
          //   name: "路面",
          //   value: 78,
          // },
          // {
          //   name: "桥通",
          //   value: 66,
          // },
          // {
          //   name: "计日工",
          //   value: 32,
          // },
          // {
          //   name: "计日工111",
          //   value: 19,
          // },
          // {
          //   name: "计日工222",
          //   value: 54,
          // },
        ],
        rowNum: 5,
        waitTime: 2000,
        unit: "星",
        showValue: true,
        carousel: "single",
      },
    };
  },

  watch: {
    type() {
      this.getAppealRanking();
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getAppealRanking();
    });
    this.timer = setInterval(this.getAppealRanking, 600000);
  },

  beforeDestroy() {
    // 离开页面之前清除定时器
    clearInterval(this.timer);
  },

  methods: {
    getAppealRanking() {
      getAppealRanking({
        page: 1,
        pageSize: 20,
        typeId: 2,
        levelType: this.type,
        order: true,
      })
        .then((res) => {
          console.log(res, "5555555555");
          this.config = { data: res.data.data };
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
        background: #4d82df;
        border-radius: 3px;
      }
    }
  }
}
</style>
