<template>
  <div class='about-us-container'>
    <div class="about-us-title">
      <img src="../../assets/images/about-us-bg.jpg" alt="" class="about-us-bg-img">
      <div class="about-us-title-box">
        <div class="about-us-title-box-top">
          <img class="main-logo" src="../../assets/icons/icon-logo-white.png" alt="">
          <img class="icon-meau" src="../../assets/icons/icon-meau-white.png" alt="" @click="handleSwitch">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowAlert: false
    }
  },
  created() {

  },
  methods: {
    handleSwitch() {
      this.isShowAlert = !this.isShowAlert;
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang='scss'>
@import './aboutUs.scss';
</style>