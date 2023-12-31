<h4 align="right"><a href="https://github.com/yikZero/Brog/blob/content-mdx/README.md">English</a> | <strong>简体中文</strong></h4>
<h1 align="center">Brog</h1>

<p align="center"><strong>由 Sanity 和 MDX 驱动的 Next.js 博客</strong></p>

<div align="center">
    <a href="https://twitter.com/yikZero" target="_blank">
    <img alt="推特" src="https://img.shields.io/badge/关注-yikZero-蓝色?logo=Twitter"></a>
    <a href="https://github.com/yikZero/Brog/blob/content-mdx/LICENSE" target="_blank">
    <img alt="GitHub 许可" src="https://img.shields.io/github/license/yikZero/Brog"></a>
</div>

## 预览

<img alt="Brog" src="Brog.png">

## 功能

- 🌓 自适应深浅色主题
- 📏 简约设计
- ⚡ 极速响应
- 📡 可定制 RSS 订阅
- 🌐 优化搜索引擎
- 🗺️ 网站地图设置

## 技术栈

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [MDX](https://mdxjs.com/)

## 部署

[![用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FyikZero%2FBrog&env=NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET&envDescription=%E8%BF%9E%E6%8E%A5%20Sanity%20%E6%95%B0%E6%8D%AE%E5%BA%93%E6%89%80%E9%9C%80%E5%86%85%E5%AE%B9&envLink=https%3A%2F%2Fwww.sanity.io%2Fguides%2Fnextjs-app-router-live-preview&project-name=brog&repository-name=Brog&demo-title=Brog%20Demo&demo-description=A%20ISR%20Blog%20using%20Next.js%20and%20Sanity&demo-url=https%3A%2F%2Fblog.yikzero.com%2F)

#### 环境变量

| 环境变量名                   | 示例值                                              | 备注信息                               |
|-------------------------|-----------------------------------------------------|----------------------------------------|
| WEB_TITLE                | Brog                                              | 网站名称                               |
| WEB_DESCRIPTION          | 介是我的博客，记录了我研究的各种新奇的玩意。              | 网站介绍                               |
| BLOG_TITLE               | Brog                                              | 菜单栏名称                             |
| AUTHOR                   | yikZero                                           | 作者名称                               |
| OCCUPATION               | Design Engineer                                   | 职业                                   |
| BIO                      | 我是一位设计师...                                   | 作者简介                               |
| CONTACT_EMAIL            | i@yikzero.com                                     | 邮箱地址，可用于Gravatar头像生成       |
| SITE_URL                 | https://blog.yikzero.com                           | 个人网站 用于生成 SiteMap       |
| HOMEPAGE_POST_NUMBER     | 3                                                   | 在首页可显示的文章数量                  |
| HOMEPAGE_PROJECT_NUMBER  | 3                                                   | 在首页可显示的项目数量                  |
| SINCE                    | 2023                                                | 如果留空，则使用当前年份               |

## 本地环境设置

```bash
pnpm install
pnpm run dev
```