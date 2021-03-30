<template>
  <div style="width: 100%; height: 100%" ref="echar"></div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { getAppealNum } from "@/api/index";

export default {
  props: ["type"],
  data() {
    return { xData: "", yData: "", timer: null };
  },

  watch: {
    type() {
      this.getAppealNum();
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getAppealNum();
    });
    this.timer = setInterval(this.getAppealNum, 600000);
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
    getAppealNum() {
      //typeId  1 日 2 近七日 3 月
      getAppealNum({ typeId: this.type })
        .then((res) => {
          this.xData = res.data.data.x;
          this.yData = res.data.data.y;
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
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              type: "shadow",
              backgroundColor: "rgba(51, 152, 219, 1)",
            },
          },
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: "#8F9EC7",
            },
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#8F9EC7",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#343C4E",
            },
          },
        },
        grid: {
          left: "5%",
          bottom: "10%",
          right: "2%",
          top: "6%",
        },
        series: [
          {
            data: this.yData,
            type: "line",
            smooth: true,
            symbol: "none",
            itemStyle: {
              color: "#026167",
            },
            areaStyle: {
              color: {
                type: "line",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0.2,
                    color: "rgba(25,40,40,0.9)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(2,55,60,0.5)",
                  },
                  {
                    offset: 1,
                    color: "#026167",
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>

