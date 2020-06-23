<template>
  <div class=''>
    <div class="about-us-title">
      <img src="../../assets/images/cooperation-bg-logo.jpg" alt class="about-us-bg-img" />
      <div class="about-us-title-box">
        <div class="about-us-title-box-top" :class="{'about-us-title-box-top-active': isShowTop}">
          <img class="main-logo" src="../../assets/icons/icon-logo-white.png" alt @click="handleGoHome" v-show="!isShowTop"/>
          <img class="main-logo" src="../../assets/images/main-logo.png" alt @click="handleGoHome" v-show="isShowTop"/>
          <img
            class="icon-meau"
            src="../../assets/icons/icon-meau-white.png"
            alt
            @click="handleSwitch" v-show="!isShowTop"
          />
          <img
            class="icon-meau"
            src="../../assets/icons/icon-meau.png"
            alt
            @click="handleSwitch" v-show="isShowTop"
          />
          <transition name="fade">
            <w-alert v-if="isShowAlert" @hiddenMeau="handleSwitch"></w-alert>
          </transition>
        </div>
        <div class="about-us-title-box-bottom">
          <div class="about-us-title-box-bottom-left">合作伙伴</div>
        </div>
      </div>
    </div>
    <div class="cooperation-content">
      <div class="cooperation-title">
        <div class="cooperation-title-box">
          <span class="cooperation-title-left">战略合作伙伴</span>
          <span class="cooperation-title-right">STRATEGIC COOPERATION</span>
        </div>
      </div>
      <div class="cooperation-img-list">
        <div class="cooperation-img-list-box">
          <div class="cooperation-img-list-box-container1">
            <img src="../../assets/images/cooperation1.jpg" alt="">
            <img src="../../assets/images/cooperation2.jpg" alt="">
          </div>
        </div>
        <div class="cooperation-img-list-box">
          <div class="cooperation-img-list-box-container">
            <img src="../../assets/images/cooperation3.jpg" alt="">
            <img src="../../assets/images/cooperation4.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="cooperation-and">
        <div class="cooperation-and-box">
          <div class="cooperation-and-img">
            <img src="../../assets/images/cooperation8.jpg" alt="">
          </div>
          <div class="cooperation-and-text">
            2016年，上海交通大学成功入围首批国家双创示范基地。为加快创新型人才培养，学校借鉴国内外成熟创新平台建设经验，将原国家级实验教学示范中心——工程训练中心改建为学生创新中心，并于2016年3月正式揭牌。学生创新中心拥有领先的实验室资源：无人机、机器人、智能制造、3D打印中心、切割中心等多个实验室与服务中心。
            <br>2019年12月，上海交通大学与小橡创投签署战略合作协议。根据协议：双方将在创新创业创投、人才培养与交流、战略新兴产业领域校企合作等方面展开更为广泛而深入的合作。 
          </div>
        </div>
      </div>
      <div class="cooperation-and">
        <div class="cooperation-and-box">
          <div class="cooperation-and-img">
            <img src="../../assets/images/cooperation7.jpg" alt="">
          </div>
          <div class="cooperation-and-text">
            中国电子信息产业发展研究院（简称“赛迪研究院”）是直属于工信部的科研事业单位，是国内工业和信息化领域的知名智库，立足制造强国、网络强国和军民融合发展战略，围绕两化深度融合，在研究咨询、评测认证、科技服务、高端装备制造等领域积累了丰富的产业资源和优秀的服务能力。
            <br>
            中国电子信息产业发展研究院苏州分院（简称“赛迪苏州分院”）将围绕苏州及吴中制造业转型提升、产业结构优化调整、发展方式创新等，为政府和企业提供全方位支撑服务，拟设立工业互联网应用创新中心、中国芯应用创新中心、机器人安全攻防创新中心、智能制造产业协同创新中心和苏州智慧产业研究中心。
          </div>
        </div>
      </div>
      <div class="cooperation-and">
        <div class="cooperation-and-box">
          <div class="cooperation-and-img">
            <img src="../../assets/images/cooperation6.jpg" alt="">
          </div>
          <div class="cooperation-and-text">
            作为上海地区最早平台化专注于双创的服务机构，科技50以“全球孵化-50加速-产业落地”为理念，重点打造“科技50创业大赛”、“科技50加速营”品牌活动和《创业圈》杂志媒体矩阵三大流量入口。
          </div>
        </div>
      </div>
      <div class="cooperation-and">
        <div class="cooperation-and-box">
          <div class="cooperation-and-img">
            <img src="../../assets/images/cooperation5.jpg" alt="">
          </div>
          <div class="cooperation-and-text">
            君合律师事务所  于1989年创立于北京，是中国最早的合伙制律师事务所之一。发展至今，君合已在海内外拥有十二个办公室和一支由超过240位合伙人和顾问、560多位受雇律师和法律翻译组成的逾800人的专业团队，是国际公认的、最优秀的中国大型综合律师事务所之一。
          </div>
        </div>
      </div>
    </div>
    <w-footer></w-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowAlert: false,
      isShowTop: false
    }
  },
  created() {

  },
  methods: {
    handleSwitch() {
      this.isShowAlert = !this.isShowAlert;
    },
    handleGoHome() {
      if (this.$route.name !== 'home') {
          this.$router.push({name: 'home'})
      }
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
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
}
</script>

<style scoped lang='scss'>
@import './cooperation.scss';
</style>