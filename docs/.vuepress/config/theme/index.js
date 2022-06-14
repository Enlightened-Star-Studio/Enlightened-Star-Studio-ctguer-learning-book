const sidebar = require('../sidebar')
const nav = require('../nav')
module.exports = {
    search: true,
    subSidebar: 'auto',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '参与编辑',
        // 以下为可选的编辑链接选项
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    },
    // 最后更新时间
    lastUpdated: "上一次更新时间",
    // 最大深度
    sidebarDepth: 2,
    nextLinks: true,
    prevLinks: true,
    nav,
    // sidebar: [
    //   {
    //     title: '欢迎使用',
    //     collapsable: true,
    //     children: [
    //       { title: '介绍', path: '/welcome/before_learning' },
    //       { title: '如何添加文档', path: '/welcome/how_to_use' },
    //       {
    //         title: '测试',
    //         path: '/welcome/test/test1',
    //         children: [
    //           { title: '测试1',path: '/welcome/test/test1' },
    //         ]
    //       },
    //     ]
    //   },
    //   {
    //     title: 'MySQL学习',
    //     collapsable: true,
    //     children: [
    //       { title: 'SQL1', path: '/sql/sql1' },
    //       { title: 'SQL2', path: '/sql/sql2' }
    //     ]
    //   },
    //   {
    //     title: 'Java学习',
    //     collapsable: true,
    //     children: [
    //       { title: 'Java1', path: '/java/java1' },
    //     ]
    //   },
    //   {
    //     title: 'SpringBoot学习',
    //     collapsable: true,
    //     children: [
    //       { title: '开始', path: '/springboot/start_up' },
    //       { title: '介绍', path: '/springboot/intro' },
    //     ]
    //   }
    // ]
    sidebar,
}
