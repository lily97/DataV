<template>
  <div id="data-view">
    <dv-full-screen-container>
      <!-- 顶部 -->
      <div class="top"></div>

      <!-- 中间部分 -->
      <div class="middle">
        <!-- 宣传内容+诉求分类占比 -->
        <div class="middle-left">
          <div class="middle-left-top">
            <div class="title"></div>
            <div class="video">
              <VideoPlayer />
            </div>
          </div>
          <div class="middle-left-bottom">
            <div class="title"></div>
            <div class="pie">
              <CharPie />
            </div>
          </div>
        </div>
        <!-- 轮播+地图 -->
        <div class="middle-center">
          <div class="middle-center-top">
            <CarouselSlider />
          </div>
          <div class="middle-center-bottom">
            <CharMap />
          </div>
        </div>
        <!-- 诉求热词+企业诉求列表 -->
        <div class="middle-right">
          <div class="middle-right-top">
            <div class="title"></div>
            <div class="word">
              <WordCloud />
            </div>
          </div>
          <div class="middle-right-bottom">
            <div class="title">
              <div class="title-left"></div>
              <div class="title-right">
                <div
                  class="ing"
                  :class="check4 == 2 ? 'checked' : ''"
                  @click="check4 = 2"
                >
                  处理中
                </div>
                <div
                  class="end"
                  :class="check4 == 1 ? 'checked' : ''"
                  @click="check4 = 1"
                >
                  已办结
                </div>
              </div>
            </div>
            <div class="list">
              <ScrollBoard v-bind:type="check4" />
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <!-- 诉求数量趋势 -->
        <div class="bottom-left">
          <div class="title">
            <div class="title-left"></div>
            <div class="title-center">
              <div
                class="day"
                :class="check1 == 1 ? 'checked' : ''"
                @click="check1 = 1"
              >
                日
              </div>
              <div
                class="in7days"
                :class="check1 == 2 ? 'checked' : ''"
                @click="check1 = 2"
              >
                近七天
              </div>
              <div
                class="month"
                :class="check1 == 3 ? 'checked' : ''"
                @click="check1 = 3"
              >
                月
              </div>
            </div>
          </div>
          <div class="content">
            <CharLine v-bind:type="check1" />
          </div>
        </div>
        <!-- 诉求办结率排行 -->
        <div class="bottom-center">
          <div class="title">
            <div class="title-left"></div>
            <div class="title-center">
              <div
                class="city"
                :class="check2 == 2 ? 'checked' : ''"
                @click="check2 = 2"
              >
                市
              </div>
              <div
                class="county"
                :class="check2 == 3 ? 'checked' : ''"
                @click="check2 = 3"
              >
                县
              </div>
            </div>
            <a class="title-right" href="/pageCommerce/rankDetail.html?type=1">
              <div>更多</div>
              <div class="jiantou"></div>
            </a>
          </div>
          <div class="content">
            <RankingEnd v-bind:type="check2" />
          </div>
        </div>
        <!-- 诉求满意度排行 -->
        <div class="bottom-right">
          <div class="title">
            <div class="title-left"></div>
            <div class="title-center">
              <div
                class="city"
                :class="check3 == 2 ? 'checked' : ''"
                @click="check3 = 2"
              >
                市
              </div>
              <div
                class="county"
                :class="check3 == 3 ? 'checked' : ''"
                @click="check3 = 3"
              >
                县
              </div>
            </div>
            <a class="title-right" href="/pageCommerce/rankDetail.html?type=2">
              <div>更多</div>
              <div class="jiantou"></div>
            </a>
          </div>
          <div class="content">
            <RankingSatisfied v-bind:type="check3" />
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import GaoMap from "@/components/gaoMap";
import CharMap from "@/components/charMap";
import CharPie from "@/components/charPie";
import CharLine from "@/components/charLine";
import RankingEnd from "@/components/rankingEnd";
import RankingSatisfied from "@/components/rankingSatisfied";
import ScrollBoard from "@/components/scrollBoard";
import WordCloud from "@/components/wordCloud";
import CarouselSlider from "@/components/carouselSlider";
import VideoPlayer from "@/components/videoPlayer";

export default {
  name: "DataView",
  components: {
    GaoMap,
    CharMap,
    CharPie,
    CharLine,
    RankingEnd,
    RankingSatisfied,
    ScrollBoard,
    WordCloud,
    CarouselSlider,
    VideoPlayer,
  },
  data() {
    return {
      check1: 2, //数量趋势
      check2: 2, // 办结率 市：2，县：3
      check3: 2, // 满意度 市：2，县：3
      check4: 2, // 诉求列表 处理中：2  已办结：1
    };
  },

  mounted() {},

  methods: {},
};
</script>


<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("../../assets/img/bg.png");
    background-size: 100% 100%;
    padding: 20px !important;
  }

  // 顶部
  .top {
    width: 100%;
    height: 105px;
    background: url("../../assets/img/top.png") no-repeat center;
    background-size: contain;
  }

  // 中间
  .middle {
    width: 98%;
    display: flex;
    justify-content: space-between;
    // 左中部分
    .middle-left {
      width: 21%;
      // 宣传内容
      .middle-left-top {
        .title {
          height: 38px;
          background: url("../../assets/img/title-1.png") no-repeat center;
        }
        .video {
          height: 250px;
          margin-top: 15px;
        }
      }
      // 诉求分类占比
      .middle-left-bottom {
        margin-top: 20px;
        .title {
          height: 38px;
          background: url("../../assets/img/title-2.png") no-repeat center;
        }
        .pie {
          height: 300px;
          margin-top: 15px;
        }
      }
    }
    // 中中部分
    .middle-center {
      width: 56%;
      // 单位数量轮播
      .middle-center-top {
        width: 90%;
        height: 100px;
        padding-left: 10%;
        // margin: 0 auto;
      }
      // 地图
      .middle-center-bottom {
        height: 540px;
        margin-top: 35px;
      }
    }
    // 中右部分
    .middle-right {
      width: 21%;
      // 诉求热词
      .middle-right-top {
        .title {
          height: 38px;
          background: url("../../assets/img/title-7.png") no-repeat center;
        }
        .word {
          height: 250px;
          margin-top: 15px;
        }
      }
      // 企业诉求列表
      .middle-right-bottom {
        margin-top: 20px;
        .checked {
          width: 52px;
          height: 24px;
          color: #ffffff;
          background: #4d9f95;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          font-size: 12px;
          color: #4d9f95;
          .title-left {
            width: 100%;
            height: 38px;
            background: url("../../assets/img/title-6.png") no-repeat center;
          }
          .title-right {
            width: 30%;
            position: absolute;
            left: 65%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
          }
        }
        .list {
          height: 300px;
          margin-top: 15px;
        }
      }
    }
  }

  // 下部
  .bottom {
    width: 98%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .checked {
      width: 38px;
      height: 24px;
      background: #4d9f95;
      border-radius: 4px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    // 箭头
    .jiantou {
      width: 16px;
      background: url("../../assets/img/right.png") no-repeat center;
      margin-top: 1px;
    }

    // 诉求数量趋势
    .bottom-left {
      width: 32%;
      .title {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-left {
          width: 90%;
          height: 38px;
          background: url("../../assets/img/title-3.png") no-repeat center;
        }
        .title-center {
          width: 25%;
          font-size: 12px;
          color: #4d9f95;
          position: absolute;
          left: 73%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          .day {
          }
          .in7days {
          }
          .month {
          }
        }
        .title-right {
          width: 8%;
          font-size: 14px;
          color: #6f7b9b;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
        }
      }
      .content {
        height: 200px;
      }
    }
    // 诉求办结率排行
    .bottom-center {
      width: 32%;
      .title {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-left {
          width: 90%;
          height: 38px;
          background: url("../../assets/img/title-4.png") no-repeat center;
        }
        .title-center {
          width: 15%;
          font-size: 12px;
          color: #4d9f95;
          position: absolute;
          left: 70%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          .city {
          }
          .county {
          }
        }
        .title-right {
          width: 8%;
          font-size: 14px;
          color: #6f7b9b;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          .jiantou {
            margin-top: 1px;
          }
        }
      }
      .content {
        height: 200px;
      }
    }
    // 诉求满意度排行
    .bottom-right {
      width: 32%;
      .title {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-left {
          width: 90%;
          height: 38px;
          background: url("../../assets/img/title-5.png") no-repeat center;
        }
        .title-center {
          width: 15%;
          font-size: 12px;
          color: #4d9f95;
          position: absolute;
          left: 70%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          .city {
          }
          .county {
          }
        }
        .title-right {
          width: 8%;
          font-size: 14px;
          color: #6f7b9b;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          .jiantou {
            margin-top: 1px;
          }
        }
      }
      .content {
        height: 200px;
      }
    }
  }
}
</style>
