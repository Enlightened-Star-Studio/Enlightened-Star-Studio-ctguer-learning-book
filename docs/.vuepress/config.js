const sidebar = require('./config/sidebar')
const themeConfig = require('./config/theme')
const plugins = require('./config/plugins')
module.exports = {
  // 站点配置
  port: 10030,
  lang: 'zh-CN',
  title: '知识星球',
  description: 'make a difference~',
  // 主题和它的配置
  theme: 'reco',
  base: '/Enlightened-Star-Studio-ctguer-learning-book/',
  plugins,
  themeConfig
}
