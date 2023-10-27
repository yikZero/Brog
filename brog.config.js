const BrogConfig = {

  WEB_TITLE:  process.env.NEXT_WEB_TITLE || "Brog", // 网站名称 Website Name
  BLOG_TITLE:  process.env.NEXT_BLOG_TITLE || "Brog", // 菜单栏名称 Menu Bar Name
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || "yikZero", // 作者名称 Author Name
  OCCUPATION: process.env.NEXT_PUBLIC_OCCUPATION || "Design Engineer", // 职业 Careers
  BIO: process.env.NEXT_PUBLIC_BIO || "22 年毕业于工科院校设计专业，目前在小公司当一位 UI 设计师。当时为了实现自己的设计稿而接触了前端，现在就喜欢上了写代码。除此之外，我还喜欢捣鼓各种软件、徒步滑雪，探索这个世界的种种。", // 作者简介 Author Introduction

  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'i@yikzero.com',  //邮箱地址 可用于Gravatar头像生成 Email address can be used for generating Gravatar avatars
  SITE_URL: process.env.SITE_URL || 'https://broog.vercel.app',  // 用于生成 SiteMap Generate SiteMap

  HOMEPAGE_POST_NUMBER: process.env.NEXT_HOMEPAGE_POST_NUMBER || 3, // 在首页可显示的文章数量 The number of posts that can be displayed on the homepage
  HOMEPAGE_PROJECT_NUMBER: process.env.NEXT_HOMEPAGE_PROJECT_NUMBER || 3, // 在首页可显示的项目数量 The number of projects that can be displayed on the homepage

  SINCE: 2023, // 如果留空，则使用当前年份 If left blank, use the current year

};

module.exports = BrogConfig;
