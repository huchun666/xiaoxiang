<template>
    <div class='w-alert'>
        <div class="alert-header">
            <img src="../../assets/images/main-logo.png" alt="" class="main-logo-image" @click="handleGoHome">
            <img src="../../assets/icons/icon-close.png" alt="" class="main-close-image" @click="handleHiddenAlert">
        </div>
        <div class="alert-content">
            <img src="../../assets/images/bg-logo.png" alt="" class="bg-logo-image">
            <div class="alert-box">
                <div class="alert-box-left">
                    <div class="alert-box-left-top">小橡成长，大象无形</div>
                    <div class="alert-box-left-bottom">
                        <div class="alert-box-left-bottom-text1">Copyright @ 2018 Acorn Partners. All rights reserved</div>
                        <div class="alert-box-left-bottom-text2">备案/许可证编号：沪ICP备18015327号</div>
                        <div class="alert-box-left-bottom-text3">021-20273663</div>
                    </div>
                </div>
                <div class="alert-box-right">
                    <div class="alert-box-right-box">
                        <div class="alert-tab-box" v-for="(item, index) in tabList" :key="index" @click="handleSelectTab(index)">
                            <div class="alert-tab-text" :class="{'alert-tab-text-active': activeIndex === index}">{{item}}</div>
                            <div class="alert-tab-line" :class="{'alert-tab-line-active': activeIndex === index}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'w-alert',
    data() {
       return {
           tabList: [
               '首页',
               '关于我们',
               '核心团队',
               '投资组合',
               '合作伙伴',
           ],
           activeIndex: 0
       }
    },
    created() {
        let routeName = this.$route.name;
        if (routeName === 'home') {
            this.activeIndex = 0;
        }else if (routeName === 'aboutUs') {
            this.activeIndex = 1;
        }else if (routeName === 'coreTeam') {
            this.activeIndex = 2;
        }else if (routeName === 'investment') {
            this.activeIndex = 3;
        }else if (routeName === 'cooperation') {
            this.activeIndex = 4;
        }else if (routeName === 'investmentDetail') {
            this.activeIndex = 3;
        }
    },
    methods: {
        handleSelectTab(index) {
            if (this.activeIndex !== index) {
                this.activeIndex = index;
                if (index === 0) {
                    this.$router.push({
                        name: 'home'
                    })
                }else if(index === 1) {
                    this.$router.push({
                        name: 'aboutUs'
                    })
                }else if(index === 2) {
                    this.$router.push({
                        name: 'coreTeam'
                    })
                }else if(index === 3) {
                    this.$router.push({
                        name: 'investment'
                    })
                }else if(index === 4) {
                    this.$router.push({
                        name: 'cooperation'
                    })
                }
                this.$emit('hiddenMeau')
            }
        },
        handleHiddenAlert() {
            this.$emit('hiddenMeau')
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
@import './w-alert.scss';
</style>