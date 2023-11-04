<template>
  <div class="home">
    <h1>Home</h1>

    <h2>Refs</h2>
    <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="updatePersonOne">Update person one</button>

    <h2>Reactive</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">Update person two</button>

    <h2>Computed and watch/watchEffect</h2>
    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <div v-for="(name, key) in matchingNames" :key="key">
      {{ name }}
    </div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  setup() {
    const personOne = ref({name: 'chewzzz', age: 21})
    const personTwo = reactive({name: 'Moon', age: 30}) // reactive doesnt work with primitive value (can't update them)

    const updatePersonOne = () => {
      personOne.value.age = 30
    }

    const updatePersonTwo = () => {
      personTwo.age = 45
    }

    // for computed
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const search = ref('')
    const matchingNames = computed(() => {
      return names.value.filter(x => x.includes(search.value))
    })

    // watch and watchEffect
    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })
    const stopEffect = watchEffect(() => {
      // watch state - search also, but does not need to mention it explicitly
      // will automatically watch state used inside this
      // if no state is insides, then only run once at the beginning
      console.log('watchEffect function ran', search.value)
    })
    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return {personOne, personTwo, updatePersonOne, updatePersonTwo, names, search, matchingNames, handleClick}
  },
}
</script>

<style>

</style>
