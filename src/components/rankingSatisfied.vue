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
          this.config = {
            data: res.data.data,
            rowNum: 5,
            waitTime: 2000,
            unit: "星",
            showValue: true,
            carousel: "single",
          };
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
