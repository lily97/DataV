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
    // $this.$nextTick(() => {
    this.initChart();
    // });
  },
  methods: {
    initChart() {
      var myChart = echarts.init(this.$refs.echar);
      var option = {
        tooltip: {
          trigger: "item",
        },
        // textStyle: {
        //   fontSize: 14,
        //   color: "#ffffff",
        // },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "60%"],
            itemStyle: {
              normal: {
                label: {
                  textStyle: {
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bolder",
                  },
                },
              },
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

