<template>
    <nav
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, key) in pages" class="nav-items" :key="key">
                    <a 
                        :href="page.link.url"
                        class="nav-link"
                        :class="{active: activePage === key}"
                        aria-current="page"
                        :title="`This link goes to ${page.link.text} page`"
                        @click.prevent="$emit('navLinkChange', key)"
                    >{{ page.link.text }}</a>
            </li>
        </ul>
            <form class="d-flex">
                <button
                    class="btn btn-primary"
                    @click.prevent="toggleTheme"
                >
                    Toggle
            </button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['pages', 'activePage'],
    data() {
        return {
            theme: 'dark',
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
        },
    }
}
</script>

<style>

</style>