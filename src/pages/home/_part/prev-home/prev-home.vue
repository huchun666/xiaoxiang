<template>
  <div class="home-box">
    <w-title></w-title>
    <div class="home-content">
      <img class="bg-logo-img" src="../../../../assets/images/bg-logo.png" alt />
      <div class="home-content-box">
        <div class="home-container">
          <div class="home-container-box">
            <div class="home-title">小橡创投始于2018</div>
            <div class="home-sub-title">小橡成长，大象无形</div>
            <div class="home-img-box">
              <div class="animation-box1" @mouseover="handleHover" @mouseout="handleOut">
                <div class="animation-box1-modal">聚焦中国市场战略新兴产业的创新技术投资</div>
                <transition name="fade">
                  <div class="hover-content" v-if="isShow1">
                    聚焦中国市场战略新兴产业的创新技术投资
                  </div>
                </transition>
              </div>
              <transition name="fade">
                <div class="hover-image1" v-if="isShow1">
                    <img src="../../../../assets/images/home1.jpg" alt="">
                </div>
              </transition>
              <div class="animation-box3" @mouseover="handleHover3" @mouseout="handleOut3">
                <div class="animation-box1-modal">致力于赋能助力成就创新创业企业加速成长</div>
                <transition name="fade">
                  <div class="hover-content" v-if="isShow3">
                    致力于赋能助力成就创新创业企业加速成长
                  </div>
                </transition>
              </div>
              <transition name="fade">
                <div class="hover-image1" v-if="isShow3">
                    <img src="../../../../assets/images/home3.jpg" alt="">
                </div>
              </transition>
              <div class="animation-box2" @mouseover="handleHover2" @mouseout="handleOut2">
                <div class="animation-box1-modal">致力于发掘投资具有独特生命力的创业企业</div>
                <transition name="fade">
                  <div class="hover-content" v-if="isShow2">
                    致力于发掘投资具有独特生命力的创业企业
                  </div>
                </transition>
              </div>
              <transition name="fade">
                <div class="hover-image1" v-if="isShow2">
                    <img src="../../../../assets/images/home2.jpg" alt="">
                </div>
              </transition>
            </div>
          </div>
        </div>
        <img src="../../../../assets/icons/icon-next-page-icon.png" alt class="next-page-img"/>
      </div>
    </div>
  </div>
</template>

<script>
import {windowAddMouseWheel} from '../../../../utils/index'
export default {
  name: 'prev-home',
  data() {
    return {
      isShow1: false,
      isShow3: false,
      isShow2: false,
    };
  },
  created() {
		
	},
  methods: {
    handleNextPage() {
      this.$emit('hidden')
    },
    handleHover() {
      this.isShow1 = true;
    },
    handleOut() {
      this.isShow1 = false;
    },
    handleHover3() {
      this.isShow3 = true;
    },
    handleOut3() {
      this.isShow3 = false;
    },
    handleHover2() {
      this.isShow2 = true;
    },
    handleOut2() {
      this.isShow2 = false;
    },
  },
  mounted() {
    windowAddMouseWheel(this.handleNextPage, 'next');
  }
};
</script>

<style scoped lang='scss'>
@import "./prev-home.scss";
</style>