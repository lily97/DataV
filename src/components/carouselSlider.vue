<template>
  <el-carousel height="100px" indicator-position="none" arrow="never">
    <el-carousel-item
      class="slider"
      v-for="(item, index) in swiper"
      :key="index"
    >
      <div class="each" v-for="(eve, i) in item" :key="i">
        <div class="img"></div>
        <div class="desc">
          <div class="num">{{ eve.value }}</div>
          <div class="name">{{ eve.name }}</div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      swiper: [
        [
          { name: "涉企部门数量", value: "1" },
          { name: "涉企部门数量", value: "2" },
          { name: "涉企部门数量", value: "3" },
          { name: "涉企部门数量", value: "4" },
        ],
        [
          { name: "涉企部门数量", value: "5" },
          { name: "涉企部门数量", value: "6" },
          { name: "涉企部门数量", value: "7" },
          { name: "涉企部门数量", value: "8" },
        ],
        [
          { name: "涉企部门数量", value: "9" },
          { name: "涉企部门数量", value: "10" },
          { name: "涉企部门数量", value: "11" },
          { name: "涉企部门数量", value: "12" },
        ],
        [
          { name: "涉企部门数量", value: "13" },
          { name: "涉企部门数量", value: "14" },
        ],
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
.slider {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .each {
    width: 20%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    .img {
      width: 70px;
      height: 70px;
      background: url("../assets/img/slider-1.png") no-repeat center;
    }
    // .img1 {
    //   background: url(../assets/img/slider-1.png") no-repeat center;
    // }
    // .img2 {
    //   background: url(../assets/img/slider-2.png") no-repeat center;
    // }
    // .img3 {
    //   background: url(../assets/img/slider-3.png") no-repeat center;
    // }
    // .img4 {
    //   background: url(../assets/img/slider-4.png") no-repeat center;
    // }
    //  .img5{
    //   background: url(../assets/img/slider-5.png") no-repeat center;
    // }
    //  .img6{
    //   background: url(../assets/img/slider-6.png") no-repeat center;
    // }
    //  .img7{
    //   background: url(../assets/img/slider-7.png") no-repeat center;
    // }
    .desc {
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: space-between;
      .num {
        font-size: 34px;
        font-weight: bold;
        color: #3b82e6;
      }
      .name {
        font-size: 16px;
        font-weight: 400;
        color: #c7d2ec;
      }
    }
  }
}
</style>
