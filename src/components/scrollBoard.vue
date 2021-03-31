<template>
  <dv-scroll-board :config="config" />
</template>

<script>
import { getAppeaList } from "@/api/index";

export default {
  props: ["type"],

  data() {
    return {
      config: {},
    };
  },

  watch: {
    type() {
      this.getAppeaList();
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getAppeaList();
    });
    this.timer = setInterval(this.getAppeaList, 600000);
  },

  beforeDestroy() {
    // 离开页面之前清除定时器
    clearInterval(this.timer);
  },

  methods: {
    getAppeaList() {
      getAppeaList({ state: this.type, page: 1, pageSize: 20 })
        .then((res) => {
          let arr = [];
          res.data.data.list.forEach((item) => {
            arr.push([item.appealTitle]);
          });
          this.config = {
            data: arr,
            index: true,
            columnWidth: [50, 300],
            align: ["center"],
            rowNum: 7,
            headerBGC: "#1981f6",
            headerHeight: 45,
            // oddRowBGC: 'rgba(22, 30, 48,1)',
            oddRowBGC: "#000000",
            evenRowBGC: "rgba(22, 30, 48,1)",
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
