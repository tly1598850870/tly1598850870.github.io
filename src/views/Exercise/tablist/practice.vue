<template>
    <div>
        <p>套卷练习</p>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit("changeshow",this.$route.query.name)
    },
}
</script>