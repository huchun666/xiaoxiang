<template>
  <div class="about-us-container">
    <div class="about-us-title">
      <img src="../../assets/images/swiper5.jpg" alt class="about-us-bg-img" />
      <div class="about-us-title-box">
        <div class="about-us-title-box-top" :class="{'about-us-title-box-top-active': isShowTop}">
          <img class="main-logo" src="../../assets/icons/icon-logo-white.png" alt @click="handleGoHome" v-show="!isShowTop"/>
          <img class="main-logo" src="../../assets/images/main-logo.png" alt @click="handleGoHome" v-show="isShowTop"/>
          <div class="icon-meau-parent2" @click="handleSwitch" v-show="!isShowTop">
            <span>菜单</span>
            <img
              class="icon-meau"
              src="../../assets/icons/icon-meau-white.png"
              alt
            />
          </div>
          <div class="icon-meau-parent" @click="handleSwitch" v-show="isShowTop">
            <span>菜单</span>
            <img
              class="icon-meau"
              src="../../assets/icons/icon-meau.png"
              alt
            />
          </div>
          <transition name="fade">
            <w-alert v-if="isShowAlert" @hiddenMeau="handleSwitch"></w-alert>
          </transition>
        </div>
        <div class="about-us-title-box-bottom">
          <div class="about-us-title-box-bottom-top">投资组合</div>
          <div class="about-us-title-box-bottom-middle">感图科技</div>
          <div class="about-us-title-box-bottom-bottom">感图科技是软硬件一体的 AI 产线缺陷智能识别解决方案的提供商</div>
        </div>
      </div>
    </div>
    <div class="about-us-anchor-div">
      <ul class="about-us-anchor">
        <li @click="goAnchor(1)">
          <div class="about-us-anchor-div1">
            <div :class="{'li-active': activeIndex === 1}" class="about-us-anchor-div-maodian"><span></span></div>
            <span class="about-us-anchor-div-text" v-show="activeIndex === 1">简介</span>
          </div>
        </li>
        <li @click="goAnchor(2)">
          <div class="about-us-anchor-div1">
            <div :class="{'li-active': activeIndex === 2}" class="about-us-anchor-div-maodian"><span></span></div>
            <span class="about-us-anchor-div-text" v-show="activeIndex === 2">合作</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="about-us-container-content">
      <div class="investment-after-box">
        <div class="about-us-content-text" id="navigate1">
          <div class="about-us-content-text-top">
            <img src="../../assets/images/investmentDetail/type5/8.png" alt="">
            <div class="about-us-content-text-top-webside">
              <a target="_blank" href="http://www.gantuai.com">www.gantuai.com</a>
            </div>
          </div>
          <div class="about-us-content-text-bottom">
            <div class="about-us-content-text-bottom-text">感图科技以基于深度学习的计算机视觉技术和大数据技术为核心，其软硬件一体的AI产线缺陷智能识别解决方案已应用在SMT、汽车零部件等产线上，同时正通过自有技术打通数据闭环收集各类产线数据，构建产线知识库，未来将挖掘产线数据价值，辅助管理及优化决策。</div>
          </div>
        </div>
        <div class="investment-after" id="navigate2">
          <div class="investment-after-title">投资方</div>
          <div class="investment-after-imgs">
            <img src="../../assets/images/investmentDetail/type5/1.jpg" alt />
            <img src="../../assets/images/investmentDetail/type5/2.jpg" alt />
            <img src="../../assets/images/investmentDetail/type5/3.jpg" alt />
            <img src="../../assets/images/investmentDetail/type5/4.jpg" alt />
            <img src="../../assets/images/investmentDetail/type5/5.jpg" alt />
            <img src="../../assets/images/investmentDetail/type5/6.jpg" alt />
            <img src="../../assets/images/investmentDetail/type5/7.jpg" alt />
          </div>
          <div class="back-investment">
            <span @click="handleBackInvestment">回到投资组合</span>
          </div>
        </div>
      </div>
    </div>
    <div class="administration-team" id="navigate3">
      <div class="icon-prev-box" @click="handleprevSwiper">
        <img src="../../assets/icons/icon-prev-white.png" alt="" class="administration-team-left-img">
      </div>
      <div class="administration-team-item-box">
        <div class="administration-team-item" @click="handleDetail('')">
          <img src="../../assets/images/swiper1.jpg" alt="">
          <div class="administration-team-item-float">东芯半导体</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(2)">
          <img src="../../assets/images/swiper2.jpg" alt="">
          <div class="administration-team-item-float">思泉新材</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(3)">
          <img src="../../assets/images/swiper3.jpg" alt="">
          <div class="administration-team-item-float">什马出行</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(4)">
          <img src="../../assets/images/swiper4.jpg" alt="">
          <div class="administration-team-item-float">猛犸电动</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(6)">
          <img src="../../assets/images/swiper6.jpg" alt="">
          <div class="administration-team-item-float">联空网络</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(7)">
          <img src="../../assets/images/swiper7.jpg" alt="">
          <div class="administration-team-item-float">爱乐达</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(8)">
          <img src="../../assets/images/swiper8.jpg" alt="">
          <div class="administration-team-item-float">太和水</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(9)">
          <img src="../../assets/images/swiper9.jpg" alt="">
          <div class="administration-team-item-float">芯原</div>
        </div>
      </div>
      <div class="icon-next-box" @click="handleNextSwiper">
        <img src="../../assets/icons/icon-next-white.png" alt="" class="administration-team-right-img">
      </div>
    </div>
    <w-footer></w-footer>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      isShowAlert: false,
      activeIndex: 1,
      scrollLeftPX: 0,
      isShowTop: false
    };
  },
  created() {},
  methods: {
    handleSwitch() {
      this.isShowAlert = !this.isShowAlert;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 0) {
        this.isShowTop = true;
      }else {
        this.isShowTop = false;
      }
      let navigate1 = $("#navigate1").offset().top;
      if (scrollTop < navigate1) {
        this.activeIndex = 1;
      }
      if (scrollTop > navigate1) {
        this.activeIndex = 2;
      }
    },
    goAnchor(type) {
      $('html, body').animate({scrollTop: $('#navigate' + type).offset().top}, 1000)
    },
    handleBackInvestment() {
      this.$router.push({name: 'investment'});
    },
    handleprevSwiper() {
      let documentItem = $('.administration-team-item-box')
      if (documentItem.scrollLeft() === 0) {
        this.scrollLeftPX = 0;
        return
      }
      this.scrollLeftPX -= 960;
      $('.administration-team-item-box').animate({scrollLeft: this.scrollLeftPX}, 1000)
    },
    handleNextSwiper() {
      let documentItem = $('.administration-team-item-box')
      if (documentItem.scrollLeft() + documentItem[0].offsetWidth > documentItem[0].scrollWidth - 5) {
        this.scrollLeftPX = documentItem.scrollLeft();
        return
      }
      this.scrollLeftPX += 960;
      $('.administration-team-item-box').animate({scrollLeft: this.scrollLeftPX}, 1000)
    },
    handleDetail(type) {
      this.$router.push({name: 'investmentDetail'+type})
    },
    handleGoHome() {
      if (this.$route.name !== 'home') {
          this.$router.push({name: 'home'})
      }
    }
  },
  mounted() {
    $('html, body').animate({scrollTop: 0}, 500);
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>

<style scoped lang='scss'>
@import "./investmentDetail.scss";
</style>