<template>
  <h1>{{msg}}</h1>
  <p v-bind="objectOfAttrs">Using text interpolation: {{ redMsg }}</p>
  <p>Using v-html directive: <span v-html="redMsg"></span></p>
  <button @click="count++">Current: {{count}}</button>

  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <div
    class="static"
    :class="{active: isActive, 'text-danger': hasError}"
  ></div>
</template>

<script setup>
import {ref, computed, reactive} from 'vue'

const msg = ref('helloe')
const redMsg = ref('<span style="color: red">This should be red.</span>')
const count = ref(0)
const isActive = ref(true)
const hasError = ref(false)

// multiple attributes
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
// computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

</script>

<style>
</style>
