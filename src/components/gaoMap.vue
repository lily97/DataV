<template>
  <el-amap id="container" class="map-container"> </el-amap>
</template>
<script>
let map = null;
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.initMaps();
    this.initProvinces("河南");
  },
  methods: {
    // 地图初始化
    initMaps() {
      map = new AMap.Map("container", {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoomEnable: true, // 是否缩放
        dragEnable: true, // 是否拖动
        expandZoomRange: true, // 扩大zoom级别
        zooms: [3, 20], // 比例范围
        zoom: 14, // 缩放比例
        viewMode: "3D", // 3D地图
        pitchEnable: true, // 3D地图是否可以俯仰角度
        pitch: 45, // 俯仰角度
        // center: [113.4027, 34.4748], // 地图默认显示的坐标(东经/北纬)
        mapStyle: "amap://styles/darkblue", // 地图主题颜色
        features: ["bg", "road", "building"], // 地图显示元素, "point"
      });

      // var disProvince = new AMap.DistrictLayer.Province({
      //   zIndex: 12,
      //   adcode: ["130000"],
      //   depth: 2,
      //   styles: {
      //     fill: function (properties) {
      //       var adcode = properties.adcode;
      //       return getColorByAdcode(adcode);
      //     },
      //     "province-stroke": "cornflowerblue",
      //     "city-stroke": "white", //中国地级市边界
      //     "county-stroke": "rgba(255,255,255,0.5)", //中国区县边界
      //   },
      // });
      // map.add(disProvince);
      // 地图点击事件
      map.on("click", function (e) {
        console.log(e);
      });

      // 初始化工具条
      map.plugin(["AMap.ToolBar"], function () {
        map.addControl(new AMap.ToolBar());
      });
    },

    // 只要一个省份
    initProvinces(city) {
      //区域遮盖
      var that = this;
      if (that.polygon) {
        that.map.remove(that.polygon);
      }
      AMap.plugin("AMap.DistrictSearch", function () {
        new AMap.DistrictSearch({
          extensions: "all",
          subdistrict: 0,
        }).search(city, function (status, result) {
          // 外多边形坐标数组和内多边形坐标数组
          var outer = [
            new AMap.LngLat(-360, 90, true),
            new AMap.LngLat(-360, -90, true),
            new AMap.LngLat(360, -90, true),
            new AMap.LngLat(360, 90, true),
          ];
          var holes = result.districtList[0].boundaries;
          var pathArray = [outer];
          pathArray.push.apply(pathArray, holes);
          that.polygon = new AMap.Polygon({
            pathL: pathArray,
            strokeColor: "red", //城市边界颜色
            strokeWeight: 3,
            fillColor: "#5149ce", // 遮罩背景色黑色
            fillOpacity: 1,
          });
          that.polygon.setPath(pathArray);
          map.add(that.polygon);
        });
      });
    },
  },
};
</script>
<style lang="less">
el-amap {
  width: 100%;
  height: 100%;
}
.screen-centerTop {
  width: 100%;
  height: 100%;
  .map {
    width: auto;
    height: 250px;
    margin: -2px 10px 0 10px;
    padding: 20px 10px 10px 10px;
    .nr {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
