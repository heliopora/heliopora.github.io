// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://lethe-protocol.github.io',
	integrations: [
		starlight({
			title: 'pora',
			tagline: 'The passage where code enters, findings emerge, and vulnerability knowledge is destroyed.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/lethe-protocol' },
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				PageFrame: './src/overrides/PageFrame.astro',
			},
			locales: {
				root: { label: 'English', lang: 'en' },
				ko: { label: '한국어', lang: 'ko' },
			},
			sidebar: [
				{
					label: 'Start Here',
					translations: { ko: '시작하기' },
					items: [
						{ label: 'What is pora?', slug: 'guides/what-is-pora', translations: { ko: 'pora란?' } },
						{ label: 'Quick Start', slug: 'guides/quick-start', translations: { ko: '빠른 시작' } },
					],
				},
				{
					label: 'Vision & Strategy',
					translations: { ko: '비전 & 전략' },
					autogenerate: { directory: 'vision' },
				},
				{
					label: 'Market Design',
					translations: { ko: '시장 설계' },
					autogenerate: { directory: 'market' },
				},
				{
					label: 'Participate',
					translations: { ko: '참여하기' },
					items: [
						{ label: 'User Scenarios', slug: 'participate/user-scenarios', translations: { ko: '사용자 시나리오' } },
					],
				},
			],
		}),
	],
});
