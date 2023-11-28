<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        v-model="pageTitle"
                    >
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea 
                        type="text"
                        class="form-control"
                        rows="5"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        v-model="linkText"
                    >
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link URL
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        v-model="linkUrl"
                    >
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input 
                            type="checkbox" 
                            class="form-check-input"
                            v-model="published"
                        >
                        <label 
                            for="gridCheck1"
                            class="form-check-label"
                        >
                            Published
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <button 
                    class="btn btn-primary"
                    @click.prevent="submitForm"
                    :disabled="isFormInvalid"
                >
                    Create Page
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CreatePage',
    computed: {
        isFormInvalid() {
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
        },
    },
    data() {
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: true,
        }
    },
    methods: {
        submitForm() {
            if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                alert('Please fill in the form')
                return
            }

            this.$emit('pageCreated', {
                pageTitle: this.pageTitle,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            })
            this.clearForm()
        },
        clearForm() {
            this.pageTitle = ''
            this.content = ''
            this.linkText = ''
            this.linkUrl = ''
            this.published = true
        },
    },
    watch: {
        // to watch changes on state (new and old value)
        pageTitle(newTitle, oldTitle) {
            if (this.linkText === oldTitle) {
                this.linkText = newTitle
            }
        },
    }
}
</script>

<style>

</style>