<template>
    <div class='w-title'>
        <img class="main-logo" src="../../assets/images/main-logo.png" alt="" @click="handleGoHome">
        <img class="icon-meau" src="../../assets/icons/icon-meau.png" alt="" @click="handleSwitch">
        <transition name="fade">
            <w-alert v-if="isShowAlert" @hiddenMeau="handleSwitch"></w-alert>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'w-title',
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
        },
        handleGoHome() {
            if (this.$route.name !== 'home') {
                this.$router.push({name: 'home'})
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped lang='scss'>
.w-title {
    height: 96px;
    border-bottom: 1px solid #E4E4E4;
    display: flex;
    justify-content: space-between;
    padding: 0 82px 0 120px;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 202px);
    .main-logo {
        cursor: pointer;
        height: 100%;
        width: 280px;
    }
    .icon-meau {
        width: 96px;
        height: 96px;
        cursor: pointer;
    }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>