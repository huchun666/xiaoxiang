<template>
  <div class=''>
    <w-page>
      <div class="investment-box">
        <img src="../../assets/images/bg-logo.png" alt="" class="investment-bg-logo">
        <div class="investment-container">
          <div class="investment-title">
            <div class="investment-title-top">投资组合</div>
            <div class="investment-title-bottom">Investment Case</div>
          </div>
          <div class="investment-img-box">
            <div class="investment-img-li-box">
              <div class="investment-img-li" @click="handleDetail(1)">
                <img src="../../assets/images/investment/i1.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i1-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i2.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i2-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i3.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i3-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
            </div>
            <div class="investment-img-li-box">
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i4.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i4-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i5.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i5-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i6.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i6-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
            </div>
            <div class="investment-img-li-box">
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i7.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i7-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i8.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i8-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
              <div class="investment-img-li">
                <img src="../../assets/images/investment/i9.png" alt="" class="investment-img">
                <img src="../../assets/images/investment/i9-active.png" alt="" class="investment-img-active">
                <div class="look-case">
                  <img src="../../assets/images/investment/look-case.png" alt="" class="look-case-img">
                  <span class="look-case-text">查看案例</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </w-page>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    handleDetail(type) {
      console.log(type)
      this.$router.push({name: 'investmentDetail'})
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang='scss'>
@import './investment.scss';
</style>