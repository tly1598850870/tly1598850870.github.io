<template>
    <div>
        <p>习题收藏</p>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.commit("changeshow",this.$route.query.name)
        this.$store.commit("changeleftarrows",true)
        console.log(this.$store.state.leftarrows);
    },
}
</script>