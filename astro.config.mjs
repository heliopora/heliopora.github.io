// @ts-check
// trigger restart
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'node:fs';

const seafoamTheme = JSON.parse(fs.readFileSync(new URL('./seafoam-theme.json', import.meta.url), 'utf-8'));

export default defineConfig({
	site: 'https://heliopora.github.io',
	integrations: [
		starlight({
			title: 'pora',
			expressiveCode: {
				themes: [seafoamTheme],
				styleOverrides: {
					frames: {
						frameBoxShadowCssValue: 'none',
						editorActiveTabBackground: '#1f2d2e',
						editorActiveTabBorderColor: '#4d7b82',
						editorActiveTabIndicatorTopColor: '#729494',
						editorTabBarBackground: '#1a2627',
						editorTabBarBorderColor: '#384e50',
						editorBackground: '#1a2627',
						terminalTitlebarBackground: '#1a2627',
						terminalTitlebarBorderBottomColor: '#384e50',
						terminalBackground: '#1a2627',
					},
					codeBackground: '#1a2627',
					codeFontFamily: "'Fira Code', 'Fira Mono', monospace",
					codeFontSize: '0.875rem'
				}
			},
			tagline: 'The passage where code enters, findings emerge, and vulnerability knowledge is destroyed.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/heliopora' },
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				PageFrame: './src/overrides/PageFrame.astro',
				MarkdownContent: './src/overrides/MarkdownContent.astro',
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

