import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme.js';

export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	title: '两只猫',
	description: '黄建峰的个人博客',
	theme,
	plugins: [
		// 搜索插件
		searchProPlugin({
			// 索引页面的正文内容
			indexContent: true,
			// 自动提示搜索建议
			autoSuggestions: true,
			// 为分类和标签添加索引
			customFields: [
				{
					getter: (page) => page.frontmatter.category as string,
					formatter: '分类：$content',
				},
				{
					getter: (page) => page.frontmatter.tag as string,
					formatter: '标签：$content',
				},
			],
		}),
	],
});
