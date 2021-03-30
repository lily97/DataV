<template>
  <video :src="url" :autoplay="true" controls="controls" loop="loop"></video>
</template>

<script>
import { getVideo } from "@/api/index";

export default {
  data() {
    return {
      src1:
        "https://vd4.bdstatic.com/mda-kkjw724xrgeuruaw/sc/mda-kkjw724xrgeuruaw.mp4",
      src2: "../assets/mp4/test.mp4",
      controls: true,
      url: "",
    };
  },
  mounted() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      getVideo({})
        .then((res) => {
          console.log(res, "video");
          this.url = res.data.data.url;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="less">
video {
  width: 100%;
  height: 100%;
}
</style>
