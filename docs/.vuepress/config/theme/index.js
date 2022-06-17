const sidebar = require('../sidebar')
const nav = require('../nav')
module.exports = {
    logo: 'https://avatars.githubusercontent.com/u/76398800?s=200&v=4',
    search: true,
    subSidebar: 'auto',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    lastUpdated: '上一次更新时间',
    nextLinks: true,
    prevLinks: true,
    nav,
    sidebar,
    valineConfig: {
        appId: 'wdUJPQzzV4oRBL3H0c3cDk0d-gzGzoHsz',
        appKey: 'C6yITP4sli6BJrOkhFjum6J9',
    }
}