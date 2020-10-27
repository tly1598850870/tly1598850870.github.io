<template>
    <div>
       <p>考点练习</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.$store.commit("changeshow",this.$route.query.name)
    },
}
</script>