import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{
		text: '常规前端',
		icon: 'fa-solid fa-laptop-code',
		prefix: '/front/',
		children: [
			{
				text: 'CSS',
				icon: 'fa-brands fa-css3-alt',
				link: '1',
			},
			{
				text: 'JS',
				icon: 'fa-brands fa-node-js',
				link: '2',
			},
			{
				text: 'VUE',
				icon: 'fa-brands fa-vuejs',
				link: '3',
			},
		],
	},
]);
