<template>
  <div v-if="isLoaded">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
    name: 'JobDetail',
    props: ['id'],
    data() {
        return {
            // id: this.$route.params.id
            job: {},
            isLoaded: false,
        }
    },
    mounted() {
        fetch(`http://localhost:3000/jobs/${this.id}`)
            .then(res => res.json())
            .then(data => {
                this.job = data
                this.isLoaded = true
            })
            .catch(err => console.log(err.message))
    },
}
</script>

<style>

</style>