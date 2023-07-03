<script lang="ts">
	import DarkModeButton from './components/darkModeButton.svelte';
	import app from './app.css';
	import HeaderTab from './components/headerTab.svelte';
	import { P, Heading, Img, Span, Hr, Tooltip, Button } from 'flowbite-svelte';
	import WelcomeText from './components/welcomeText.svelte';
	import GithubProjects from './components/githubProjects.svelte';
	import CareerTimeline from './components/careerTimeline.svelte';
	import SocialBoxes from './components/socialBoxes.svelte';
	import svelteSVG from './assets/svelte-icon.svg';
	import typeScriptSVG from './assets/typescript-icon.svg';
	import supabaseSVG from './assets/supabase-icon.svg';
	import vercelSVG from './assets/vercel-icon.svg';
	import type { iTechstack } from './types/types';

	let yPosition: number = 0;
	let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';

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

	// TODO: Animation
	function hideArrow(y: number) {
		const arrow = document.getElementById('arrowDown');
		if (arrow) {
			if (y > 400) {
				arrow.style.display = 'none';
			} else {
				arrow.style.display = 'flex';
			}
		}
	}

	function showBackToTop(y: number) {
		const backToTop = document.getElementById('backToTop');

		if (window.innerWidth > 576) {
			if (backToTop) {
				if (y > 400) {
					backToTop.style.display = 'flex';
				} else {
					backToTop.style.display = 'none';
				}
			}
		}
	}

	function shrinkHeader(width: number) {
		if (width < 420) {
			tag = 'h2';
		} else {
			tag = 'h1';
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	$: hideArrow(yPosition), showBackToTop(yPosition), shrinkHeader(window.innerWidth);
</script>

<svelte:window bind:scrollY={yPosition} />
<Button
	on:click={() => {
		scrollToTop();
	}}
	id="backToTop"
	class="backUpButton !p-2"
	pill={true}
	outline={true}
	size="xl"
	><svg
		aria-hidden="true"
		class="w-5 h-5"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M11 17V5.414l3.293 3.293a.999.999 0 101.414-1.414l-5-5a.999.999 0 00-1.414 0l-5 5a.997.997 0 000 1.414.999.999 0 001.414 0L9 5.414V17a1 1 0 102 0z"
			clip-rule="evenodd"
		/></svg
	></Button
>
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
	<div id="arrowDown" class="arrow bounce" />
</section>
<section id="lukas">
	<Heading {tag} class="text-left mb-10"><Span underline>about me:</Span></Heading>
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
	<Heading {tag} class="text-left mb-10"><Span underline>My projects:</Span></Heading>
	<GithubProjects />
</section>
<section id="career">
	<Heading {tag} class="text-left mb-10"><Span underline>Career:</Span></Heading>
	<div class="timelineWrapper">
		<CareerTimeline />
	</div>
	<Hr class="my-8" />
	<SocialBoxes />
</section>
