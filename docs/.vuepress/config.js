module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '知识星球',
  description: '让知识能有所归~',
  // 主题和它的配置
  theme: 'reco',
  base: '/Enlightened-Star-Studio-ctguer-learning-book/',
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: true,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ],
  themeConfig: {
    search: true,
    subSidebar: 'auto',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    lastUpdated: '上一次更新时间',
    nextLinks: true,
    prevLinks: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '起步', link: '/welcome/before_learning' },
      { text: 'Github', link: 'http://www.baidu.com' },
    ],
    sidebar: [
      {
        title: '欢迎使用',
        collapsable: true,
        children: [
          { title: '介绍', path: '/welcome/before_learning' },
          { title: '如何添加文档', path: '/welcome/how_to_use' },
          {
            title: '测试',
            path: '/welcome/test/test1',
            children: [
              { title: '测试1',path: '/welcome/test/test1' },
            ]
          },
        ]
      },
      {
        title: 'MySQL学习',
        collapsable: true,
        children: [
          { title: 'SQL1', path: '/sql/sql1' },
          { title: 'SQL2', path: '/sql/sql2' }
        ]
      },
      {
        title: 'Java学习',
        collapsable: true,
        children: [
          { title: 'Java1', path: '/java/java1' },
        ]
      },
      {
        title: 'SpringBoot学习',
        collapsable: true,
        children: [
          { title: '开始', path: '/springboot/start_up' },
          { title: '介绍', path: '/springboot/intro' },
        ]
      }
    ]
  },
}