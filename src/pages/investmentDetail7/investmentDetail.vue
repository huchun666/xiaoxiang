<template>
  <div class="about-us-container">
    <div class="about-us-title">
      <img src="../../assets/images/swiper7.jpg" alt class="about-us-bg-img" />
      <div class="about-us-title-box">
        <div class="about-us-title-box-top">
          <img class="main-logo" src="../../assets/icons/icon-logo-white.png" alt />
          <img
            class="icon-meau"
            src="../../assets/icons/icon-meau-white.png"
            alt
            @click="handleSwitch"
          />
          <transition name="fade">
            <w-alert v-if="isShowAlert" @hiddenMeau="handleSwitch"></w-alert>
          </transition>
        </div>
        <div class="about-us-title-box-bottom">
          <div class="about-us-title-box-bottom-top">投资组合</div>
          <div class="about-us-title-box-bottom-middle">爱乐达</div>
          <div class="about-us-title-box-bottom-bottom">公司主要为飞机提供部件制造</div>
        </div>
      </div>
    </div>
    <div class="about-us-anchor-div">
      <ul class="about-us-anchor">
        <li @click="goAnchor(1)">
          <div class="about-us-anchor-div1">
            <div :class="{'li-active': activeIndex === 1}" class="about-us-anchor-div-maodian"><span></span></div>
          </div>
        </li>
        <li @click="goAnchor(2)">
          <div class="about-us-anchor-div1">
            <div :class="{'li-active': activeIndex === 2}" class="about-us-anchor-div-maodian"><span></span></div>
            <span class="about-us-anchor-div-text" v-show="activeIndex === 2">简介</span>
          </div>
        </li>
        <li @click="goAnchor(3)">
          <div class="about-us-anchor-div1">
            <div :class="{'li-active': activeIndex === 3}" class="about-us-anchor-div-maodian"><span></span></div>
            <span class="about-us-anchor-div-text" v-show="activeIndex === 3">合作</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="about-us-container-content">
      <div class="investment-after-box">
        <div class="about-us-content-text" id="navigate1">
          <div class="about-us-content-text-top">
            <img src="../../assets/images/investmentDetail/type7/5.png" alt="">
            <div class="about-us-content-text-top-webside">www.cdald.com</div>
          </div>
          <div class="about-us-content-text-bottom">
            <div class="about-us-content-text-bottom-text">国内首家具有飞机零部件热处理生产线的民营企业，是波音、空客在国内第一家民营企业一级供应商，也是中国商飞和现役主力军机的供应商。2017年8月22日创业板上市，股票代码SZ300696。</div>
            <div class="about-us-content-text-bottom-img">
              <img src="../../assets/images/investmentDetail/type7/6.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="investment-after" id="navigate2">
          <div class="investment-after-title">主要客户</div>
          <div class="investment-after-imgs">
            <img src="../../assets/images/investmentDetail/type7/1.jpg" alt />
            <img src="../../assets/images/investmentDetail/type7/2.jpg" alt />
            <img src="../../assets/images/investmentDetail/type7/3.jpg" alt />
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
        <div class="administration-team-item" @click="handleDetail(5)">
          <img src="../../assets/images/swiper5.jpg" alt="">
          <div class="administration-team-item-float">感图科技</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(6)">
          <img src="../../assets/images/swiper6.jpg" alt="">
          <div class="administration-team-item-float">联空网络</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(8)">
          <img src="../../assets/images/swiper8.jpg" alt="">
          <div class="administration-team-item-float">太和水生态</div>
        </div>
        <div class="administration-team-item" @click="handleDetail(9)">
          <img src="../../assets/images/swiper9.jpg" alt="">
          <div class="administration-team-item-float">芯原微电子</div>
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
      scrollLeftPX: 0
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

      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      let navigate1 = $("#navigate1").offset().top;
      if (scrollTop < navigate1) {
        this.activeIndex = 1;
      }
      if (scrollTop > navigate1) {
        this.activeIndex = 2;
      }
      if (scrollTop + windowHeight >= scrollHeight - 5) {
        this.activeIndex = 3;
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
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>

<style scoped lang='scss'>
@import "./investmentDetail.scss";
</style>