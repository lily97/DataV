<template>
  <div style="width: 100%; height: 100%" ref="echar"></div>
</template>

<script>
import * as echarts from "echarts";
// import mapJson from "../assets/mapJson/henan.json";
import { getMapInfo } from "@/api/index";
let dataInfo = [],
  max = 0,
  min = 0;
export default {
  data() {
    return {
      mapJson: "https://geo.datav.aliyun.com/areas_v2/bound/410000_full.json", // 河南省
      //   mapJson: "../assets/mapJson/henan.json",
      name: "小明00",
      index: -1,
      timer1: null,
      timer2: null,
    };
  },
  mounted() {
    this.getMapInfo();
    // this.timer1 = setInterval(this.getMapInfo, 3000);
  },

  // beforeDestroy() {
  //   // 离开页面之前销毁实例
  //   if (this.chart) {
  //     this.chart.dispose();
  //     this.chart = null;
  //   }
  //   // 离开页面之前清除定时器
  //   clearInterval(this.timer1);
  //   clearInterval(this.timer2);
  // },

  methods: {
    // 调用接口请求数据
    getMapInfo() {
      getMapInfo({})
        .then((res) => {
          dataInfo = res.data.data;
          min = dataInfo[0].value;
          dataInfo.forEach((item) => {
            if (item.value > max) {
              max = item.value;
            }
            if (item.value < min) {
              min = item.value;
            }
          });
          this.initChart();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // 实例化地图
    initChart() {
      this.chart = echarts.init(this.$refs.echar);
      this.chart.showLoading();

      $.getJSON(this.mapJson, (geoJson) => {
        this.chart.hideLoading();
        echarts.registerMap("henan", geoJson);
        var option = {
          tooltip: {
            trigger: "item",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderColor: "#B58C3D",
            padding: [
              20, // 上
              20, // 右
              20, // 下
              20, // 左
            ],
            textStyle: {
              color: "#ffffff",
            },
            // formatter: (params) => {
            //   var str =
            //     '<div class="tooltip"><div>' +
            //     params.name +
            //     "</div><div>企业数量：" +
            //     params.value +
            //     "</div></div>";
            //   return str;
            // },
            formatter: "{b0}<br /> 企业数量  :{c0}",
          },

          // 视觉映射组件
          visualMap: {
            min: min,
            max: max,
            text: ["高", "低"], //两端的文本
            realtime: false,
            calculable: true,
            itemWidth: 12, //图形的宽度，即长条的宽度。
            itemHeight: 110, //图形的高度，即长条的高度。
            align: "auto", //指定组件中手柄和文字的摆放位置.可选值为：‘auto’ 自动决定。‘left’ 手柄和label在右。‘right’ 手柄和label在左。‘top’ 手柄和label在下。‘bottom’ 手柄和label在上。
            left: "90%", //组件离容器左侧的距离,‘left’, ‘center’, ‘right’,‘20%’
            top: "70% ", //组件离容器上侧的距离,‘top’, ‘middle’, ‘bottom’,‘20%’
            orient: "vertical", //图例排列方向
            inRange: {
              color: ["#c5d9f7", "#aac5e9", "#799dd0", "#5781be", "#3d6db1"],
            },
            textStyle: {
              color: "#ffffff",
            },
          },
          // 表层真实数据部分 每一块的颜色范围由映射组件控制
          series: [
            {
              type: "map",
              roam: true,
              aspectScale: 1.4,
              zoom: 1.1,
              roam: false,
              map: "henan",
              label: {
                // 每块的区域名字
                show: false,
                textStyle: {
                  color: "#ffffff",
                },
                emphasis: {
                  // 鼠标悬浮
                  show: false,
                  textStyle: {
                    color: "#ffffff",
                  },
                },
              },
              itemStyle: {
                normal: {
                  borderColor: "#2ab8ff",
                  borderWidth: 1,
                  areaColor: "#12235c",
                },
                emphasis: {
                  areaColor: "#629D94",
                  borderWidth: 0,
                },
              },
              //热力图数据   不同区域 不同的底色
              data: dataInfo,
              // 自定义名称映射
              nameMap: {
                郑州市: "郑州市",
                安阳市: "安阳市",
                周口市: "周口市",
                鹤壁市: "鹤壁市",
                濮阳市: "濮阳市",
                济源市: "济源市",
                驻马店市: "驻马店市",
                洛阳市: "洛阳市",
                开封市: "开封市",
                商丘市: "商丘市",
                新乡市: "新乡市",
                许昌市: "许昌市",
                三门峡市: "三门峡市",
                南阳市: "南阳市",
                信阳市: "信阳市",
                平顶山市: "平顶山市",
                焦作市: "焦作市",
                漯河市: "漯河市",
              },
            },
          ],

          // 底层的阴影部分
          geo: {
            map: "henan",
            aspectScale: 1.4, //长宽比
            zoom: 1.1,
            roam: false,
            itemStyle: {
              normal: {
                areaColor: "#013C62",
                shadowColor: "#305386", // 厚度的颜色
                shadowOffsetX: -5, // 阴影层左右移动
                shadowOffsetY: 15, // 阴影层上下移动
                label: {
                  show: false,
                },
              },
              emphasis: {
                show: false,
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "green",
                label: {
                  show: false,
                },
              },
            },
          },
        };
        this.chart.setOption(option);
      });

      this.timer2 = setInterval(() => {
        // 隐藏提示框
        this.chart.dispatchAction({
          type: "hideTip",
          seriesIndex: 0,
          dataIndex: this.index,
        });
        // 显示提示框
        this.chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: this.index + 1,
        });
        // 取消高亮指定的数据图形
        this.chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: this.index,
        });
        // 高亮指定的数据图形
        this.chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: this.index + 1,
        });
        this.index++;
        if (this.index > 17) {
          this.index = -1;
        }
      }, 2000);

      //鼠标移入静止播放
      this.chart.on("mousemove", (e) => {
        clearInterval(this.timer2);
        this.chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
        });
        this.chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex,
        });
        this.chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: e.dataIndex,
        });
      });

      // 鼠标移出
      this.chart.on("mouseout", (e) => {
        // 清除定时器
        clearInterval(this.timer2);
        //鼠标移出后先把上次的高亮取消
        this.chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: e.dataIndex,
        });

        // 重新生成定时器
        this.timer2 = setInterval(() => {
          // 隐藏提示框
          this.chart.dispatchAction({
            type: "hideTip",
            seriesIndex: 0,
            dataIndex: this.index,
          });
          // 显示提示框
          this.chart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: this.index + 1,
          });
          // 取消高亮指定的数据图形
          this.chart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: this.index,
          });
          // 高亮指定的数据图形
          this.chart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: this.index + 1,
          });
          this.index++;
          if (this.index > 17) {
            this.index = -1;
          }
        }, 2000);
      });
    },
  },
};
</script>
<style lang="less"  >
.tooltip {
  width: 125px;
  height: 63px;
  background-color: #000000 !important;
  border: 1px solid #b58c3d;
  opacity: 0.5 !important;
  padding: 15px 0 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

