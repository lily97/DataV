<template>
  <div style="width: 100%; height: 100%" ref="echar"></div>
</template>

<script>
import * as echarts from "echarts";
import { getAppealAccounted } from "@/api/index";

require("echarts/theme/macarons"); // echarts theme
export default {
  data() {
    return {
      charInfo: "",
      timer: null,
    };
  },
  mounted() {
    this.getAppealAccounted();
    this.timer = setInterval(this.getAppealAccounted, 600000);
  },

  beforeDestroy() {
    // 离开页面之前销毁实例
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
    // 离开页面之前清除定时器
    clearInterval(this.timer);
  },

  methods: {
    getAppealAccounted() {
      getAppealAccounted({})
        .then((res) => {
          this.charInfo = res.data.data;
          this.initChart();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    initChart() {
      if (this.chart) {
        this.chart.dispose(); // 如果图例已经渲染 销毁他并重新渲染
      }
      this.chart = echarts.init(this.$refs.echar);
      var option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "60%"],
            color: ["#b58c3d", "#4d82df", "#a83c3a", "#629d94", "#403dbf",'#7CFEB1','#FC8452','#73C0DE'],
            label: {
              textStyle: {
                color: "#ffffff",
                fontSize: 14,
              },
            },
            data: this.charInfo,
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>

