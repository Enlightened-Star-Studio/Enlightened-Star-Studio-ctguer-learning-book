---
lang: zh-CN
title: 如何添加文档
author: ssssheep
description: 介绍如何添加文档
date: '2022-06-14'
tags: 
    - 入门
    - 教程
---

> 写在前面：如果想要对此文档进行完善，请先对仓库Fork后，提出PR，由工作室相关负责人进行审批。审批通过后才能进行合并。

## 一、框架介绍

本页面基于`VuePress`页面生成

中文文档网站：https://www.vuepress.cn/

> 事实上，一个 VuePress 网站是一个由 [Vue (opens new window)](http://vuejs.org/)、[Vue Router (opens new window)](https://github.com/vuejs/vue-router)和 [webpack (opens new window)](http://webpack.js.org/)驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。
>
> 在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 [Nuxt (opens new window)](https://nuxtjs.org/)的 `nuxt generate` 命令，以及其他的一些项目，比如 [Gatsby](https://www.gatsbyjs.org/)

目前`VuePress`已经有2.0，但目前是Beta版本。

为了稳定起见，还是使用`1.0`版本

## 二、开始使用

目前的仓库已经完成了基本的配置，拉取了仓库中`main`分支的代码文件后，使用`vscode`或者`webstorm`打开项目文件，只需两步，即可在本地运行此知识星球文档。

1. 安装依赖

   ```bash
   # npm
   npm install
   
   # yarn
   yarn add
   ```

2. 运行

   ```bash
   # npm
   npm run docs:dev
   
   # yarn
   yarn docs:dev
   ```

访问本机的：http://localhost:8081/Enlightened-Star-Studio-ctguer-learning-book/ 即可

## 三、添加文件

> 在开始前，请先了解文件的目录结构
>
> ![image-20220614205828809](http://43.142.84.101:9000/control/202206142058151.png)
>
> 现在，假如您发现，目前知识星球中没有 SpringBoot 的相关文档，想进行相关文档的贡献，您可以按照如下步骤进行操作

1. 在docs文件夹下创建新的文件夹和文件

![](https://insurence-1304011999.cos.ap-shanghai.myqcloud.com/img/202206132327571.png)

2. 配置文件目录
   修改/docs/.vuepress/config/sidebar/index.js文件，在下添加如下配置

```js
    {
        title: 'SpringBoot学习',
        collapsable: true,
        children: [
            { title: '开始', path: '/springboot/start_up' }
        ]
    }
```

3. 配置正常后，会自动热更新到网页中

![image-20220614004402100](https://insurence-1304011999.cos.ap-shanghai.myqcloud.com/img/202206140044798.png)

之后在md文件按照markdown语法编写文档即可，保存后会自动渲染到网页上。

如果需要添加其他的页面，只需要按照上述的步骤再次添加即可。

```js
    {
        title: 'SpringBoot学习',
        collapsable: true,
        children: [
            { title: '开始', path: '/springboot/start_up' },
            { title: '介绍', path: '/springboot/intro' },
        ]
    }
```



![image-20220614004606002](https://insurence-1304011999.cos.ap-shanghai.myqcloud.com/img/202206140046893.png)

## 四、上传Github

### 1、内部成员

为了方便不善于使用Git的成员也能方便快捷的进行文档的编程以及上传自己的文档到Github的仓库中

在项目文件根目录下，编写了快捷上传的脚本命令`deploy.sh`

在GitBash中运行此脚本，即可打包部署并上传到Github仓库

> **注意：** 由于使用SSH的仓库地址，因此需要确认您已经在本机上安装了SSH秘钥，并且有本仓库的相关权限

### 2、外部贡献者