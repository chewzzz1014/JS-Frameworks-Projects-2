<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default {
    props: ['index'], // router's params
    created() {
        this.page = this.$pages.getSinglePage(this.index)
    },
    data() {
        return {
            page: null,
        }
    },
    watch: {
        index(newIdx, oldIdx) {
            this.page = this.$pages.getSinglePage(newIdx)
        }
    },
}
</script>

<style scoped>
.emphasize {
    color: blue;
}
</style>