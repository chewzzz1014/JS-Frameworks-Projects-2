<template>
  <h1>{{msg}}</h1>
  <p v-bind="objectOfAttrs">Using text interpolation: {{ redMsg }}</p>
  <p>Using v-html directive: <span v-html="redMsg"></span></p>
  <button @click="count++">Current: {{count}}</button>
</template>

<script setup>
import {ref} from 'vue'

const msg = ref('helloe')
const redMsg = ref('<span style="color: red">This should be red.</span>')
const count = ref(0)

// multiple attributes
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

</script>

<style>
</style>
