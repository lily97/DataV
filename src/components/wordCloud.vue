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
import { getWordList } from "@/api/index";
export default {
  data() {
    return {
      wordList: [],
    };
  },
  mounted() {
    this.getWordList();
  },
  methods: {
    getWordList() {
      getWordList({})
        .then((res) => {
          console.log(res, "111111111111111");
          res.data.data.forEach((item) => {
            this.wordList.push({
              name: item.dic.word,
              value: Math.round(Math.random() * 20 + 50),
            });
          });
          this.initChart();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    initChart() {
      var myChart = echarts.init(this.$refs.echar);
      var option = {
        title: {
          text: "词云", //标题
          show: false,
          x: "center",
          textStyle: {
            fontSize: 23,
          },
        },
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "热点分析", //数据提示窗标题
            type: "wordCloud",
            sizeRange: [15, 40], //画布范围，如果设置太大会出现少词（溢出屏幕）
            rotationRange: [0, 0], //数据翻转范围
            shape: "pentagon",
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
            data: this.wordList,
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
