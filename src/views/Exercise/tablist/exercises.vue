<template>
    <div>
        <p>错题练习</p>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit("changeshow",this.$route.query.name)
    },
}
</script>