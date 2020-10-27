<template>
    <div>
        <p>评测记录</p>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit("changeshow",this.$route.query.name)
    },
}
</script>