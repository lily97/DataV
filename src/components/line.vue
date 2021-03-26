<template>
  <div style="width: 100%; height: 100%" ref="echar"></div>
</template>

<script>
// import echarts from "echarts";
import * as echarts from "echarts";

require("echarts/theme/macarons"); // echarts theme
export default {
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var myChart = echarts.init(this.$refs.echar);
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
          top:'6%'
        //   containLabel: true, //防止坐标轴溢出
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
      myChart.setOption(option);
    },
  },
};
</script>

