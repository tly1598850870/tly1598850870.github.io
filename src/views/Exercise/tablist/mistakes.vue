<template>
    <div>
        <p>仿真模考</p>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit("changeshow",this.$route.query.name)
    },
}
</script>