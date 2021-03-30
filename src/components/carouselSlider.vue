<template>
  <div class="content">
    <!-- 涉企部门 -->
    <div class="each1">
      <div class="img1"></div>
      <div class="desc">
        <div class="one">
          <div class="num">{{ departList.departCount }}</div>
          <div class="name">涉企部门数量</div>
        </div>
        <div class="one">
          <div class="num">{{ departList.provinceDepartCount }}</div>
          <div class="name">省直部门及驻豫单位数量</div>
        </div>
        <div class="one">
          <div class="num">{{ departList.cityDepartCount }}</div>
          <div class="name">市单位数量</div>
        </div>
        <div class="one">
          <div class="num">{{ departList.countyDepartCount }}</div>
          <div class="name">县区单位数量</div>
        </div>
      </div>
    </div>

    <!-- 认证数量 -->
    <div class="each2">
      <div class="img2"></div>
      <div class="desc">
        <div class="one">
          <div class="num">{{ departList.usersCount }}</div>
          <div class="name">注册用户数量</div>
        </div>
        <div class="one">
          <div class="num">{{ departList.companyCount }}</div>
          <div class="name">已认证用户数量</div>
        </div>
        <div class="one">
          <div class="num">{{ departList.enterpriseCount }}</div>
          <div class="name">认证民企数量</div>
        </div>
        <div class="one">
          <div class="num">{{ departList.personalCount }}</div>
          <div class="name">认证非公人士数量</div>
        </div>
      </div>
    </div>

    <!-- 诉求分类情况 -->
    <div class="each3">
      <div class="img3"></div>
      <div class="desc">
        <div class="one">
          <div class="num">{{ departList.appealCount }}</div>
          <div class="name">诉求总量</div>
        </div>
        <div class="one" v-for="(item, index) in appelaList" :key="index">
          <div class="num">{{ item.value }}</div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- 诉求处理率 -->
    <div class="each4">
      <div class="img4"></div>
      <div class="desc">
        <div class="one" v-for="(item, index) in dealList" :key="index">
          <div class="num">{{ item.value }}</div>
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDepartList, getAppealCount, getAppealTimeCount } from "@/api/index";

export default {
  data() {
    return {
      departList: [],
      appelaList: [],
      dealList: [],
      timer: null,
      isFirts1: true,
      isFirts2: true,
      isFirts3: true,
      isFirts4: true,
    };
  },
  mounted() {
    this.getDepartList();
    this.timer = setInterval(this.gogos, 3000);
  },
  methods: {
    gogos() {
      // 涉企部门
      $(".each1 .desc").css({
        marginTop: 0,
      });

      $(".each1 .desc").animate(
        {
          marginTop: "-" + 180,
        },
        2000
      );
      if (!this.isFirts1) {
        $(".each1 .one").eq(0).appendTo($(".each1 .desc")); //复制第一个到最后一个
      }
      this.isFirts1 = false;

      // 认证数量
      $(".each2 .desc").css({
        marginTop: 0,
      });

      $(".each2 .desc").animate(
        {
          marginTop: "-" + 180,
        },
        2000
      );
      if (!this.isFirts2) {
        $(".each2 .one").eq(0).appendTo($(".each2 .desc")); //复制第一个到最后一个
      }
      this.isFirts2 = false;

      // 诉求分类情况
      $(".each3 .desc").css({
        marginTop: 0,
      });

      $(".each3 .desc").animate(
        {
          marginTop: "-" + 180,
        },
        2000
      );
      if (!this.isFirts3) {
        $(".each3 .one").eq(0).appendTo($(".each3 .desc")); //复制第一个到最后一个
      }
      this.isFirts3 = false;

      // 诉求处理率
      $(".each4 .desc").css({
        marginTop: 0,
      });

      $(".each4 .desc").animate(
        {
          marginTop: "-" + 180,
        },
        2000
      );
      if (!this.isFirts4) {
        $(".each4 .one").eq(0).appendTo($(".each4 .desc")); //复制第一个到最后一个
      }
      this.isFirts4 = false;
    },

    getDepartList() {
      // 涉企部门
      getDepartList({})
        .then((res) => {
          this.departList = res.data.data;
          console.log(res, "0000000");
        })
        .catch((error) => {
          console.log(error);
        });

      // 诉求分类情况
      getAppealCount({})
        .then((res) => {
          this.appelaList = res.data.data;
          console.log(res, "1111111111");
        })
        .catch((error) => {
          console.log(error);
        });

      // 诉求处理情况
      getAppealTimeCount({})
        .then((res) => {
          this.dealList = res.data.data;
          console.log(res, "22222222222");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less">
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .each1,
  .each2,
  .each3,
  .each4 {
    width: 23%;
    height: 100%;
    display: flex;
    overflow: hidden;
    text-align: center;
    align-items: center;
    // justify-content: space-between;
    .img1 {
      width: 100px;
      height: 70px;
      background: url("../assets/img/slider-1.png") no-repeat center;
    }
    .img2 {
      width: 70px;
      height: 70px;
      background: url("../assets/img/slider-2.png") no-repeat center;
    }
    .img3 {
      width: 70px;
      height: 70px;
      background: url("../assets/img/slider-3.png") no-repeat center;
    }
    .img4 {
      width: 70px;
      height: 70px;
      background: url("../assets/img/slider-4.png") no-repeat center;
    }
    .desc {
      height: 60%;
      margin-left: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: space-between;
      .one {
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
}
</style>


