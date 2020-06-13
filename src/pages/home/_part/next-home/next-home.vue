<template>
  <div class="next-home">
    <w-page>
      <div class="next-home-container">
        <div class="next-home-title">
          <div class="next-home-title1">投资组合</div>
          <div class="next-home-title2">Investment Case</div>
        </div>
        <div class="next-home-swiper">
          <div class="next-home-swiper-left">
            <div>
              <div class="next-home-swiper-left-title">{{activeIndex | swiperTitleFilter}}</div>
              <div class="next-home-swiper-left-sub-title">{{activeIndex | swiperSubTitleFilter}}</div>
              <div class="next-home-swiper-more">
                <img
                  src="../../../../assets/icons/icon-know-more.png"
                  alt
                  class="icon-know-more-img"
                />
                <span>了解更多</span>
              </div>
            </div>
            <div class="active-index">{{'0' + activeIndex}}</div>
          </div>
          <div class="next-home-swiper-right">
            <el-carousel
              :autoplay="false"
              arrow="never"
              indicator-position="none"
              class="swiper-container"
              @change="handleChangeSwiper"
              ref="carousel"
            >
              <el-carousel-item>
                <img src="../../../../assets/images/swiper1.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper2.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper3.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper4.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper5.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper6.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper7.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper8.jpg" alt class="swiper-img" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../../../assets/images/swiper9.jpg" alt class="swiper-img" />
              </el-carousel-item>
            </el-carousel>
            <div class="line-text">小橡成长，大象无形</div>
          </div>
        </div>
        <div class="change-index-box">
          <ul class="change-index-left-ul">
            <li
              class="change-index-left-li"
              v-for="item in 9"
              :key="item"
              :class="{'change-index-left-li-active': item === activeIndex}"
              @click="handleActiveIndex(item)"
            >
              <div class="change-index-left-dev"></div>
            </li>
          </ul>
          <div class="change-index-img">
            <img
              src="../../../../assets/icons/icon-prev.png"
              alt
              class="icon-prev"
              @click="handlePrev"
            />
            <img
              src="../../../../assets/icons/icon-next.png"
              alt
              class="icon-next"
              @click="handleNext"
            />
          </div>
        </div>
      </div>
    </w-page>
  </div>
</template>

<script>
import { windowAddMouseWheel } from "../../../../utils/index";
export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  created() {},
  methods: {
    handlePrevPage() {
      this.$emit("show");
    },
    handleChangeSwiper(index) {
      this.activeIndex = index + 1;
    },
    handlePrev() {
      this.$refs.carousel.prev();
    },
    handleNext() {
      this.$refs.carousel.next();
    },
    handleActiveIndex(index) {
      this.$refs.carousel.setActiveItem(index - 1);
    }
  },
  mounted() {
    windowAddMouseWheel(this.handlePrevPage, "prev");
  },
  filters: {
    swiperTitleFilter(index) {
      var text = "";
      switch (index) {
        case 1:
          text = "东芯半导体";
          break;
        case 2:
          text = "思泉新材";
          break;
        case 3:
          text = "什马出行";
          break;
        case 4:
          text = "猛犸电动";
          break;
        case 5:
          text = "感图科技";
          break;
        case 6:
          text = "联空网络";
          break;
        case 7:
          text = "爱乐达";
          break;
        case 8:
          text = "太和水生态";
          break;
        case 9:
          text = "芯原微电子";
          break;
      }
      return text;
    },
    swiperSubTitleFilter(index) {
      var text = "";
      switch (index) {
        case 1:
          text = "目前国内唯一可以同时提供NAND";
          break;
        case 2:
          text = "思泉新材是一家专注于功能性高分子材料研发、生产、销售的国家高新技术企业";
          break;
        case 3:
          text = "聚焦新能源汽车流通领域的产业互联网平台";
          break;
        case 4:
          text = "猛犸电动是智慧出行解决方案的提供商";
          break;
        case 5:
          text = "基于深度学习的计算机视觉技术和大数据技术为核心，其软硬件一体的AI产线缺陷智能识别解决方案";
          break;
        case 6:
          text = "通过一站式就医聚合支付SaaS平台，再造移动互联时代的线上线下就医流程";
          break;
        case 7:
          text = "公司主要为飞机提供部件制造";
          break;
        case 8:
          text = "从事水体生态修复与水污染治理的高新技术企业";
          break;
        case 9:
          text = "亚太地区领先的芯片设计和集成电路生产服务企业";
          break;
      }
      return text;
    },
  }
};
</script>

<style lang='scss'>
@import "./next-home.scss";
</style>