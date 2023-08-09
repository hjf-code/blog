import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';

export default hopeTheme({
	// 当前网站部署到的域名
	hostname: 'https://hjf.plus',
	// 作者
	author: {
		// 姓名
		name: '黄建峰',
		// 网站
		url: 'https://hjf.plus',
		// 邮箱
		email: '372832391@qq.com',
	},
	// favicon图标
	favicon: '/favicon.ico',
	// 网站logo, 填写绝对路径并将 logo 放在 .vuepress/public 文件夹中
	logo: '/logo.jpg',
	// 顶部导航栏菜单
	navbar,
	// 顶部导航栏布局
	navbarLayout: {
		// 最前面显示: logo
		start: ['Brand'],
		// 中间显示：顶部导航栏菜单
		center: ['Links'],
		// 尾部显示：搜索框、外观、仓库
		end: ['Search', 'Outlook', 'Repo'],
	},
	// 导航栏标题
	navTitle: '放开我，我还能卷！',
	// icon图标资源，这里使用了fontawesome-free中的solid和brands
	iconAssets: [
		'/assets/fontawesome-free-6.4.2/css/fontawesome.min.css',
		'/assets/fontawesome-free-6.4.2/css/brands.min.css',
		'/assets/fontawesome-free-6.4.2/css/solid.min.css',
	],
	// icon图标的前缀，方便简写，但是上面使用了2个类型的图标，所以不能设置统一前缀
	iconPrefix: '',
	// 关闭全屏按钮
	fullscreen: false,
	// 强制为深色模式
	darkmode: 'enable',
	// 是否在导航栏内显示仓库链接，默认为 `true`
	repoDisplay: true,
	// 默认为 GitHub. 同时也可以是一个完整的 URL
	repo: 'hjf-code/blog',
	// 自定义仓库链接文字。默认从 `repo` 中自动推断为
	// "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
	repoLabel: 'GitHub',
	// 博客功能配置
	blog: {
		// 座右铭或介绍语
		description: '可视化爱好者',
		// 介绍页地址
		intro: '/me',
		// 是否剪裁头像为圆形形状
		roundAvatar: true,
		// 在侧边栏显示个人信息，会覆盖sidebar
		sidebarDisplay: 'always',
		// 时间轴的顶部文字
		timeline: '往事随风',
		// 文章列表中展示的文章信息: 写作日期, 字数, 预计阅读时间, 分类, 标签
		articleInfo: ['Date', 'Word', 'ReadingTime', 'Category', 'Tag'],
	},
	// 文章信息
	pageInfo: ['Date', 'Word', 'ReadingTime', 'Category', 'Tag'],
	// 是否显示页面贡献者
	contributors: false,
	// 是否展示编辑此页链接
	editLink: false,
	copyright: false,
	// 显示页脚
	displayFooter: true,
	// 页脚内容，可传HTML字符串
	footer: `<img style="width: 12px; height: 12px;" src="/police.png" title="备案">&nbsp;<a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43100302000292" target="_blank">湘公网安备43100302000292号</a>&nbsp;|&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2023002259号-1</a>&nbsp;|&nbsp;<a href="https://github.com/hjf-code/blog" target="_blank">Copyright ©2023 黄建峰</a>`,
	// 是否显示打印按钮
	print: false,
	// 插件
	plugins: {
		// 启动博客插件
		blog: true,
		// all features are enabled for demo, only preserve features you need here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ['ts', 'vue'],
			},
			presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
			stylize: [
				{
					matcher: 'Recommended',
					replacer: ({ tag }) => {
						if (tag === 'em')
							return {
								tag: 'Badge',
								attrs: { type: 'tip' },
								content: 'Recommended',
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},
	},
});

