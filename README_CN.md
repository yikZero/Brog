<h4 align="right"><a href="https://github.com/yikZero/Brog/blob/main/README.md">English</a> | <strong>简体中文</strong></h4>
<h1 align="center">Brog</h1>

<p align="center"><strong>由 Vercel 和 Sanity 驱动的 Next.js 博客</strong></p>

<div align="center">
    <a href="https://twitter.com/yikZero" target="_blank">
    <img alt="推特" src="https://img.shields.io/badge/关注-yikZero-蓝色?logo=Twitter"></a>
    <a href="https://github.com/yikZero/Brog/blob/main/LICENSE" target="_blank">
    <img alt="GitHub 许可" src="https://img.shields.io/github/license/yikZero/Brog"></a>
</div>

## 功能

- 🌓 动态深浅色主题适应
- 📏 简约轻量设计
- ⚡ 极速响应时间

## 技术栈

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

## 部署

[![用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FyikZero%2FBrog&env=NOTION_TOKEN,NOTION_DATABASE_ID&demo-title=Brog%20Demo&demo-url=https%3A%2F%2Fbroog.vercel.app%2F)

#### 环境变量

| 环境变量名                   | 示例值                                              | 备注信息                               |
|-------------------------|-----------------------------------------------------|----------------------------------------|
| WEB_TITLE                | Brog                                              | 网站名称                               |
| BLOG_TITLE               | Brog                                              | 菜单栏名称                             |
| AUTHOR                   | yikZero                                           | 作者名称                               |
| OCCUPATION               | Design Engineer                                   | 职业                                   |
| BIO                      | 我是一位设计师...                                   | 作者简介                               |
| CONTACT_EMAIL            | i@yikzero.com                                     | 邮箱地址，可用于Gravatar头像生成       |
| SITE_URL                 | https://broog.vercel.app                           | 个人网站 用于生成 SiteMap       |
| HOMEPAGE_POST_NUMBER     | 3                                                   | 在首页可显示的文章数量                  |
| HOMEPAGE_PROJECT_NUMBER  | 3                                                   | 在首页可显示的项目数量                  |
| SINCE                    | 2023                                                | 如果留空，则使用当前年份               |

## 本地环境设置

```bash
pnpm install
pnpm run dev
```