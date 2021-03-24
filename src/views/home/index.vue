<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="top">
        <div class="top-left"></div>
        <div class="top-center"></div>
        <div class="top-right"></div>
      </div>
      <div class="middle">
        <div class="middle-left">
          <div class="middle-left-top"></div>
          <div class="middle-left-bottom"></div>
        </div>
        <div class="middle-center">
          <div class="middle-center-top"></div>
          <div class="middle-center-bottom"></div>
        </div>
        <div class="middle-right">
          <div class="middle-right-top"></div>
          <div class="middle-right-bottom"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-left"></div>
        <div class="bottom-center"></div>
        <div class="bottom-right"></div>
      </div>
    </dv-full-screen-container>
  </div>
</template>



<script>
import gaoMap from "@/components/gaoMap";

export default {
  name: "DataView",
  components: {
    gaoMap,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>


<style lang="less">
// @import "../../assets/scss/mixin.scss";

#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("/src/assets/img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .top {
    
  }
}
</style>
