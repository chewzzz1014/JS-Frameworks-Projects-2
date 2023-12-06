<template>
    <form action="" class="container mb-3 mt-5">
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
                <!-- <div class="mb-3">
                    <label for="" class="form-label">
                        Link URL
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        v-model="linkUrl"
                    >
                </div> -->
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

<script setup>
import {ref, inject, computed, watch} from 'vue'
import {useRouter} from 'vue-router'

const bus = inject('$bus')
const pages = inject('$pages')
const router = useRouter()

let pageTitle = ref('')
let content = ref('')
let linkText = ref('')
let published = ref(true)

function submitForm() {
    if (!pageTitle || !content || !linkText) {
        alert('Please fill in the form')
        return
    }

    let newPage = {
        pageTitle,
        content,
        link: {
            text: linkText
        },
        published
    }

    pages.addPage(newPage)
    bus.$emit('page-created', newPage)
    router.push({path: '/pages'})
}

// computed
const isFormInvalid = computed(() => !pageTitle || !content || !link.text)

// watcher
watch(pageTitle, (newTitle, oldTitle) => {
    if (linkText === oldTitle) {
        linkText = newTitle
    }
})
</script>
<style>

</style>