<template>
    <div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.$store.commit("changecontentarrows",false)
        console.log(true);
    },
    destroyed(){
        this.$store.commit("changecontentarrows",true)
        console.log(false);
    }
}
</script>