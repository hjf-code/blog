import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{
		text: '基础',
		icon: 'fa-solid fa-solar-panel',
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
		icon: 'fa-brands fa-vuejs',
		prefix: '/VUE/',
		children: [
			{
				text: 'VUE3',
				icon: '/icons/VUE.svg',
				link: 'VUE3',
			},
			{
				text: 'mini-vue3',
				icon: 'fa-solid fa-list-ul',
				link: 'mini-vue3',
			},
			{
				text: 'VUE3源码',
				icon: 'fa-solid fa-code',
				link: 'VUE3源码',
			},
			{
				text: 'VUE Router',
				icon: 'fa-solid fa-location-arrow',
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
		icon: 'fa-solid fa-chart-line',
		prefix: '/可视化/',
		children: [
			{
				text: '数学基础(暂停)',
				icon: 'fa-solid fa-square-root-variable',
				link: '数学基础',
			},
			{
				text: 'Canvas2D(暂停)',
				icon: 'fa-solid fa-draw-polygon',
				link: 'Canvas2D',
			},
			{
				text: 'WebGL(暂停)',
				icon: 'fa-solid fa-cubes',
				link: 'WebGL',
			},
		],
	},
	{
		text: '两只猫',
		icon: 'fa-solid fa-paw',
		link: '/cats',
	},
	{
		text: '关于我',
		icon: 'fa-solid fa-person-snowboarding',
		link: '/me',
	},
]);
