<template>
  <div class="home-contaniners">
    <transition name="next-page">
      <prevHome v-if="isShowPrevPage" @hidden='handleNextPage'/>
    </transition>
    <transition name="prev-page">
      <nextHome v-if="!isShowPrevPage" @show='handlePrevPage'/>
    </transition>
  </div>
</template>

<script>
import prevHome from './_part/prev-home/prev-home';
import nextHome from './_part/next-home/next-home';
export default {
  components: {
    prevHome,
    nextHome
  },
  data() {
    return {
      isShowPrevPage: true
    };
  },
  created() {
		
	},
  methods: {
    handleNextPage() {
      this.isShowPrevPage = false
    },
    handlePrevPage() {
      this.isShowPrevPage = true
    },
  },
  mounted() {
  }
};
</script>

<style scoped lang='scss'>
@import "./home.scss";
</style>