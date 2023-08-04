import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "博客",
  description: "黄建峰的个人博客",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
