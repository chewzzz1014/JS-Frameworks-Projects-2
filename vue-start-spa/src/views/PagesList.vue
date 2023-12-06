<template>
  <div>
    <h4>Pages</h4>
    <div class="text-end">
        <router-link
            to="/pages/create"
            class="btn btn-primary btn-sm"
        >New Page
        </router-link>
    </div>
    <table class="table table-strip table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(page, idx) in $pages.getAllPages()"
                :key="idx"
            >
                <td>{{page.pageTitle}}</td>
                <td>{{page.link.text}}</td>
                <td>{{page.published ? 'Yes' : 'No'}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
// ref can be used for primitive and object; reactive cannot be used for primitive
import {ref, reactive, inject} from 'vue'

const data = reactive({counter: 0})
const $pages = inject('$pages')

function click() {
    data.counter++
}
</script>

<style>

</style>