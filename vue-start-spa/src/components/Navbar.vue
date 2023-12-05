<template>
    <nav
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <NavbarLink
                    v-for="(page, key) in publishedPages"
                    :key="key"
                    :index="key"
                    class="nav-items"
                    :page="page"
                    :isActive="activePage === key"
                    @activated="$emit('activated')"
                >
                </NavbarLink>
                <li>
                    <router-link
                        to="/create"
                        class="nav-link"
                        aria-current="page"
                        >Create Page
                    </router-link>
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
import NavbarLink from './NavbarLink.vue'

export default {
    components: {
        NavbarLink
    },
    props: ['pages', 'activePage'],
    computed: {
        publishedPages() {
            return this.pages.filter(x => x.published)
        },
    },
    data() {
        return {
            theme: 'dark',
        }
    },
    created() {
        this.getThemeSetting()
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            this.setThemeSetting()
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme')
            if (theme) this.theme = theme 
        },
        setThemeSetting() {
            localStorage.setItem('theme', this.theme)
        },
    }
}
</script>

<style>

</style>