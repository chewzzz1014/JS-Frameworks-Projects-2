const pagesKey = 'pages'

let pageJson = localStorage.getItem(pagesKey)
let pagesStore = JSON.parse(pageJson)

export default {
    getAllPages() {
        return pagesStore
    },

    getSinglePage(index) {
        return pagesStore[index]
    },
    editPage(index, page) {
        pagesStore[index] = page

        localStorage.setItem(pagesKey, JSON.stringify(pagesStore))
    },
}
