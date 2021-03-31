<template>
  <video
    height="250"
    :src="url"
    controls="controls"
    autoplay="autoplay"
    loop="loop"
    preload="preload"
  ></video>
</template>

<script>
import { getVideo } from "@/api/index";

export default {
  data() {
    return {
      url: "",
      timer: null,
    };
  },
  mounted() {
    this.getVideo();
    this.timer = setInterval(this.getVideo, 600000);
  },

  beforeDestroy() {
    // 离开页面之前清除定时器
    clearInterval(this.timer);
  },

  methods: {
    getVideo() {
      getVideo({})
        .then((res) => {
          this.url = res.data.data.url;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less">
video {
  width: 100%;
  height: 100%;
}
</style>
