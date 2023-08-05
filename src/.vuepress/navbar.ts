import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{
		text: '常规前端',
		icon: 'laptop-code',
		prefix: '/front/',
		children: [
			{
				text: 'CSS',
				icon: 'css',
				link: '1',
			},
			{
				text: 'JS',
				icon: 'javascript',
				link: '2',
			},
			{
				text: 'VUE',
				icon: 'vue',
				link: '3',
			},
		],
	},
]);
