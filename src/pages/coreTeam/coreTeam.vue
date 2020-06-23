<template>
  <div class='core-team'>
    <div class="about-us-title">
      <img src="../../assets/images/core-team-bg.png" alt class="about-us-bg-img" />
      <img src="../../assets/images/black_modal.png" alt="" class="black-modal-img">
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
          <div class="about-us-title-box-bottom-left">核心团队</div>
          <div class="about-us-title-box-bottom-right">小橡成长大象无形</div>
        </div>
      </div>
    </div>
    <div class="core-team-content">
      <div class="our-team">
        <div class="our-team-left">我们的团队</div>
        <div class="our-team-right">TEAM DEMONSTRATION</div>
      </div>
      <div class="manager-person">
        <img src="../../assets/images/core-team2.png" alt="">
        <div class="manager-person-box">
          <div class="manager-person-title">
            <span class="manager-person-name">石兴梅</span>
            <span class="manager-person-nick">创始管理合伙人</span>
          </div>
          <div class="manager-person-sub-title">“执大象，天下往，投小橡成大象”</div>
          <ul class="manager-person-list">
            <li>先后任职同济大学经济与管理学院教师、复旦金仕达及SUNGARD中国区副总裁；兼任上海交通大学创业导师、上海市科委与江苏省双创专家并连续14年任职浦东新区政协委员</li>
            <li>自2010年起参与筹备申能集团上海诚毅投资管理有限公司，作为国家发改委首批战略新兴产业创投基金，曾投资了爱乐达、芯原微电子、EVCARD、太和水等硬科技龙头企业</li>
            <li>2018年起创立小橡创投，专注于投资AI技术+IC技术 + IT技术</li>
          </ul>
        </div>
      </div>
      <div class="manager-person">
        <div class="manager-person-box">
          <div class="manager-person-title">
            <span class="manager-person-name">喻菁华</span>
            <span class="manager-person-nick">创始管理合伙人</span>
          </div>
          <div class="manager-person-sub-title">“欣赏敢为天下先，看准赛道全力奔跑的硬核团队，一起干！”</div>
          <ul class="manager-person-list">
            <li>上海巿政府引进高级金融人才、上海市政府公派中长期出国访问学者，曾任深圳发展银行上海分行副行长，上海闵行上银村镇银行董事行长，辽宁振兴银行董事行长</li>
            <li>科技金融服务的探索者与先行者，曾开创“汽车供应链金融模式”；服务上海张江等十几家科技园区中小微科技企业，开展“银园合作“、“投贷联动”、“债权+期权“，科技企业兼并重组，担任“创业导师”等，获得上海市政府金融创新多项成果奖</li>
            <li>2019年加入小橡创投，专注战略新兴产业，对互联网+供应链金额有深刻理解</li>
          </ul>
        </div>
        <img src="../../assets/images/core-team3.png" alt="" class="middle-img">
      </div>
      <div class="manager-person">
        <img src="../../assets/images/core-team1.png" alt="">
        <div class="manager-person-box">
          <div class="manager-person-title">
            <span class="manager-person-name">凌超</span>
            <span class="manager-person-nick">创始合伙人</span>
          </div>
          <div class="manager-person-sub-title">“做时间的朋友陪伴成长”</div>
          <ul class="manager-person-list">
            <li>先后获得复旦大学产业经济学硕士、美国亚利桑那州立大学金融学硕士、清华大学EMBA，现担任“接力中国青年精英协会”理事、上海市徐汇区工商联执委、上海江苏商会副会长、复旦大学华商研究中心常务副理事长</li>
            <li>10+年投资经验，投资领域涉及能源矿产、节能环保、新材料、移动互联网等战略新兴产业，20年上市公司财务管理经验</li>
            <li>投资设立小橡创投、可可资本、东熙投资等并参股10余支基金</li>
          </ul>
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
@import './coreTeam.scss';
</style>