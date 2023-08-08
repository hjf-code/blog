import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{
		text: '前端',
		icon: 'fa-solid fa-solar-panel',
		prefix: '/前端/',
		children: [
			{
				text: 'JS',
				icon: 'fa-brands fa-node-js',
				link: 'JS',
			},
			{
				text: 'CSS',
				icon: 'fa-brands fa-css3-alt',
				link: 'CSS',
			},
			{
				text: 'VUE',
				icon: 'fa-brands fa-vuejs',
				link: 'VUE',
			},
		],
	},
	{
		text: '可视化',
		icon: 'fa-solid fa-chart-line',
		prefix: '/可视化/',
		children: [
			{
				text: '数学基础',
				icon: 'fa-solid fa-square-root-variable',
				link: '数学基础',
			},
			{
				text: 'Canvas2D',
				icon: 'fa-solid fa-draw-polygon',
				link: 'Canvas2D',
			},
			{
				text: 'WebGL',
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

