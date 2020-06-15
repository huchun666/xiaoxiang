<template>
    <div class='w-page'>
        <w-title></w-title>
        <div class="content">
            <slot></slot>
        </div>
        <w-footer></w-footer>
    </div>
</template>

<script>
export default {
    name: 'w-page',
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
// .content {
//     height: calc(100vh - 258px);
//     margin-top: 96px;
// }
.w-title, .w-footer {
    position: static;
}
</style>