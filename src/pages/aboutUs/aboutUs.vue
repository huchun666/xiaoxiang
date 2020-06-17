<template>
  <div class="about-us-container">
    <div class="about-us-title">
      <img src="../../assets/images/about-us-bg.jpg" alt class="about-us-bg-img" />
      <img src="../../assets/images/black_modal.png" alt="" class="black-modal-img">
      <div class="about-us-title-box">
        <div class="about-us-title-box-top" :class="{'about-us-title-box-top-active': isShowTop}">
          <img class="main-logo" src="../../assets/icons/icon-logo-white.png" alt @click="handleGoHome" v-show="!isShowTop"/>
          <img class="main-logo" src="../../assets/images/main-logo.png" alt @click="handleGoHome" v-show="isShowTop"/>
          <img
            class="icon-meau"
            src="../../assets/icons/icon-meau-white.png"
            alt
            @click="handleSwitch"
            v-show="!isShowTop"
          />
          <img
            class="icon-meau"
            src="../../assets/icons/icon-meau.png"
            alt
            @click="handleSwitch"
            v-show="isShowTop"
          />
          <transition name="fade">
            <w-alert v-if="isShowAlert" @hiddenMeau="handleSwitch"></w-alert>
          </transition>
        </div>
        <div class="about-us-title-box-bottom">
          <div class="about-us-title-box-bottom-left">关于我们</div>
          <div class="about-us-title-box-bottom-right">小橡成长大象无形</div>
        </div>
      </div>
    </div>
    <div class="about-us-anchor-div">
      <ul class="about-us-anchor">
        <li :class="{'li-active': activeIndex === 1}" @click="goAnchor(1)">投资方向</li>
        <li :class="{'li-active': activeIndex === 2}" @click="goAnchor(2)">投后赋能</li>
        <li :class="{'li-active': activeIndex === 3}" @click="goAnchor(3)">联系我们</li>
      </ul>
    </div>
    <div class="about-us-container-content">
      <div class="investment-after-box">
        <div class="about-us-content-text" id="navigate1">
          <div class="about-us-content-text-top">为数智时代的中国产业升级赋能</div>
          <div class="about-us-content-text-bottom">AICT=AI+IC+IT=数字化、网联化、智能化、服务化</div>
        </div>
        <div class="investment-after" id="navigate2">
          <div class="investment-after-title">投后赋能</div>
          <div class="investment-after-imgs">
            <img src="../../assets/images/about1.jpg" alt />
            <img src="../../assets/images/about3.jpg" alt />
            <img src="../../assets/images/about2.jpg" alt />
          </div>
        </div>
        <div class="administration-team" id="navigate3">
          <div class="administration-team-top">
            <img src="../../assets/images/administration-team2.png" alt />
            <div class="administration-team-text">
              <div class="administration-team-text-top">小橡管理创始人团队</div>
              <div
                class="administration-team-text-bottom"
              >既是管理公司的创始人，也是深入创业一线的投资作业人。既是管理公司的创始人，也是深入创业一线的投资作业人。</div>
            </div>
          </div>
          <div class="administration-team-top">
            <img src="../../assets/images/administration-team1.png" alt />
            <div class="administration-team-text">
              <div class="administration-team-text-top">顾问专家团队</div>
              <div
                class="administration-team-text-bottom"
              >为重大项目的投资决策提供外部意见、为小橡管理发展及投后项目增值赋能。特质：会计师事务所、律师事务所、投行领域等资深合伙人。新兴战略产业领域千人专家、大学与科研机构知名专家。创业成功企业家、社会知名人士等。</div>
            </div>
          </div>
        </div>
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
    handleGoHome() {
      if (this.$route.name !== 'home') {
          this.$router.push({name: 'home'})
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>

<style scoped lang='scss'>
@import "./aboutUs.scss";
</style>