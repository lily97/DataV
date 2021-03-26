<template>
  <video
    src="../assets/mp4/test.mp4"
    :autoplay="true"
    controls="controls"
    loop="loop"
  ></video>
</template>

<script>
export default {
  data() {
    return {
      src1:
        "https://vd4.bdstatic.com/mda-kkjw724xrgeuruaw/sc/mda-kkjw724xrgeuruaw.mp4",
      src2: "../assets/mp4/test.mp4",
      controls: true,
    };
  },
  mounted() {},
  methods: {},
  beforeDestroy() {},
};
</script>

<style lang="less">
video {
  width: 100%;
  height: 100%;
}
</style>
