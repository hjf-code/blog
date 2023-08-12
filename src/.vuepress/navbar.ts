import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{
		text: '基础',
		icon: '/icons/base.svg',
		prefix: '/基础/',
		children: [
			{
				text: 'JS',
				icon: '/icons/JS.svg',
				link: 'JS',
			},
			{
				text: 'CSS',
				icon: '/icons/CSS.svg',
				link: 'CSS',
			},
		],
	},
	{
		text: 'VUE',
		icon: '/icons/VUE.svg',
		prefix: '/VUE/',
		children: [
			{
				text: 'VUE3',
				icon: '/icons/VUE.svg',
				link: 'VUE3',
			},
			{
				text: 'mini-vue3',
				icon: '/icons/mini.svg',
				link: 'mini-vue3',
			},
			{
				text: 'VUE3源码',
				icon: '/icons/Code.svg',
				link: 'VUE3源码',
			},
			{
				text: 'VUE Router',
				icon: '/icons/navigation.svg',
				link: 'VUE Router',
			},
			{
				text: 'Pinia',
				icon: '/icons/Pinia.svg',
				link: 'Pinia',
			},
			{
				text: 'Vite',
				icon: '/icons/Vite.svg',
				link: 'Vite',
			},
		],
	},
	{
		text: '可视化(暂停)',
		icon: '/icons/visual.svg',
		prefix: '/可视化/',
		children: [
			{
				text: '数学基础(暂停)',
				icon: '/icons/math.svg',
				link: '数学基础',
			},
			{
				text: 'Canvas2D(暂停)',
				icon: '/icons/2D.svg',
				link: 'Canvas2D',
			},
			{
				text: 'WebGL(暂停)',
				icon: '/icons/3D.svg',
				link: 'WebGL',
			},
		],
	},
	{
		text: '两只猫',
		icon: '/icons/cat.svg',
		link: '/cats',
	},
	{
		text: '关于我',
		icon: '/icons/me.svg',
		link: '/me',
	},
]);

