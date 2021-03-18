<template>
  <div class="back">
    <div class="screen-centerTop">
      <!-- 地图 -->
      <div class="map">
        <div class="nr">
          <el-amap id="container" class="map-container"> </el-amap>
        </div>
      </div>
    </div>
  </div>
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
  },
  methods: {
    // 地图初始化
    initMaps() {
      let that = this;
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
        center: [113.4027, 34.4748], // 地图默认显示的坐标(东经/北纬)
        // mapStyle: "amap://styles/darkblue", // 地图主题颜色
        features: ["bg", "road", "building"], // 地图显示元素, "point"
      });
      // 地图点击事件
      map.on("click", function (e) {
        console.log(e);
      });

      // 初始化工具条
      map.plugin(["AMap.ToolBar"], function () {
        map.addControl(new AMap.ToolBar());
      });
    },
  },
};
</script>
<style lang="less">
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
