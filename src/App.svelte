<script lang="ts">
	import DarkModeButton from './components/darkModeButton.svelte';
	import app from './app.css';
	import HeaderTab from './components/headerTab.svelte';
	import { P, Heading, Img, Span, Hr, Tooltip } from 'flowbite-svelte';
	import WelcomeText from './components/welcomeText.svelte';
	import GithubProjects from './components/githubProjects.svelte';
	import CareerTimeline from './components/careerTimeline.svelte';
	import SocialBoxes from './components/socialBoxes.svelte';
	import svelteSVG from './assets/svelte-icon.svg';
	import typeScriptSVG from './assets/typescript-icon.svg';
	import supabaseSVG from './assets/supabase-icon.svg';
	import vercelSVG from './assets/vercel-icon.svg';
	import type { iTechstack } from './types/types';

	const techstack: iTechstack[] = [
		{
			name: 'Svelte',
			icon: svelteSVG,
			url: 'https://svelte.dev/'
		},
		{
			name: 'TypeScript',
			icon: typeScriptSVG,
			url: 'https://www.typescriptlang.org/'
		},
		{
			name: 'Supabase',
			icon: supabaseSVG,
			url: 'https://supabase.io/'
		},
		{
			name: 'Vercel',
			icon: vercelSVG,
			url: 'https://vercel.com/'
		}
	];

	const birthday: Date = new Date('2002-04-16');
	const age: number = Math.floor(
		(Date.now() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
	);
</script>

<section id="home">
	<nav class="navHeader">
		<div class="menuL"><HeaderTab title="lukas" /></div>
		<div class="menuR">
			<HeaderTab title="projects" />
			<HeaderTab title="career" />
			<!-- <HeaderTab title="contact" /> -->
			<DarkModeButton />
		</div>
	</nav>
	<WelcomeText />
	<div class="arrow bounce" />
</section>
<section id="lukas">
	<Heading class="text-left mb-10"><Span underline>about me:</Span></Heading>
	<Img src="Lukas.JPEG" size="w-72" imgClass="h-72" alignment="mx-auto" class="rounded-full" />
	<P size="xl" align="center" class="mt-20 mx-10 aboutText" weight="light">
		Hi there! My name is Lukas Klein, a {age}-year-old studying <Span underline
			>computer science</Span
		> at the Provadis Hochschule as part of my dual program with Deutsche Telekom AG. I'm particularly
		drawn to <Span underline>web development</Span>, where I enjoy enhancing the user experience and
		exploring the realms of technology.
	</P>
	<Hr class="my-8" />
	<P size="xl">My current Techstack consists of:</P>
	<div class="techstackWrapper">
		{#each techstack as tech}
			<a target="_blank" href={tech.url}>
				<Img src={tech.icon} class="mt-3" size="w-16" imgClass="h-16" />
				<Tooltip placement="bottom">{tech.name}</Tooltip>
			</a>
		{/each}
	</div>
</section>
<section id="projects">
	<Heading class="text-left mb-10"><Span underline>My projects:</Span></Heading>
	<GithubProjects />
</section>
<section id="career">
	<Heading class="text-left mb-10"><Span underline>Career:</Span></Heading>
	<div class="timelineWrapper">
		<CareerTimeline />
	</div>
	<Hr class="my-8" />
	<SocialBoxes />
</section>
