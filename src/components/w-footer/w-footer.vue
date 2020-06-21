<template>
    <div class='w-footer'>
        <div class="footer-top">
            <div class="footer-top-left">小橡成长，大象无形</div>
        </div>
        <div class="footer-bottom">
            Copyright @ 2018 Acorn Partners. All rights reserved. <span class="footer-address">地址：中国（上海）自由贸易试验区祖冲之路295号5F</span><span class="contact-us">联系我们：021-20273663</span>   备案/许可证编号：沪ICP备18015327号
        </div>
    </div>
</template>

<script>
export default {
    name: 'w-footer',
    data() {
       return {

       }
    },
    created() {

    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style scoped lang='scss'>
.w-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 162px;
    border-top: 1px solid #E4E4E4;
    .footer-top {
        height: 100px;
        padding: 0 120px;
        color: #333333;
        display: flex;
        align-items: center;
        .footer-top-left {
            font-size: 18px;
        }
        .footer-top-right {
            font-size: 13px;
            span {
                font-weight: bold;
                margin-left: 20px;
                text-decoration: underline;
                color: blue;
            }
        }
    }
    .footer-bottom {
        height: 62px;
        line-height: 62px;
        text-align: center;
        color: #121214;
        font-size: 13px;
        background: #eee;
        opacity: 0.3;
        .footer-address {
            margin-left: 20px;
        }
        .contact-us {
            margin: 0 20px;
        }
    }
}
</style>