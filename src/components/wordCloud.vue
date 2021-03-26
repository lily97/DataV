<template>
  <div style="width: 100%; height: 100%" ref="echar"></div>
</template>


<script type="text/javascript" src="../static/echarts.min.js"></script>
<script type="text/javascript" src="../static/echarts-wordcloud.js"></script>

<script>
// import echarts from "echarts";
import * as echarts from "echarts";
// require("../static/echarts.min.js");
require("echarts-wordcloud");
export default {
  data() {
    return {
      value: [
        {
          name: "花鸟市场",
          value: 1446,
        },
        {
          name: "汽车",
          value: 928,
        },
        {
          name: "视频",
          value: 906,
        },
        {
          name: "电视",
          value: 825,
        },
        {
          name: "画像",
          value: 800,
        },
        {
          name: "动漫",
          value: 486,
        },
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var myChart = echarts.init(this.$refs.echar);
      var option = {
        title: {
          text: "词云", //标题
          show:false,
          x: "center",
          textStyle: {
            fontSize: 23,
          },
        },
        // backgroundColor: "#F7F7F7",
        tooltip: {
          show: true,
        },
        series: [
          {
            name: "热点分析", //数据提示窗标题
            type: "wordCloud",
            sizeRange: [6, 66], //画布范围，如果设置太大会出现少词（溢出屏幕）
            rotationRange: [0, 0], //数据翻转范围
            //shape: 'circle',
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14,
            },
            textStyle: {
              color: function () {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 255),
                    Math.round(Math.random() * 255),
                    Math.round(Math.random() * 255),
                  ].join(",") +
                  ")"
                );
              },
              normal: {
                color: "#ffffff",
              },
              emphasis: {
                shadowBlur: 10,
                // shadowColor: "#333",
              },
            },
            data: this.value,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less">
// #rose-chart {
//   width: 30%;
//   height: 100%;
//   background-color: rgba(6, 30, 93, 0.5);
//   border-top: 2px solid rgba(1, 153, 209, 0.5);
//   box-sizing: border-box;

//   .rose-chart-title {
//     height: 50px;
//     font-weight: bold;
//     text-indent: 20px;
//     font-size: 20px;
//     display: flex;
//     align-items: center;
//   }

//   .dv-charts-container {
//     height: calc(~"100% - 50px");
//   }
// }
</style>
