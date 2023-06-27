<script lang="ts">
	import DarkModeButton from './components/darkModeButton.svelte';
	import app from './app.css';
	import HeaderTab from './components/headerTab.svelte';
	import { P, Heading, Img, Span } from 'flowbite-svelte';
	import WelcomeText from './components/welcomeText.svelte';
	import GithubProjects from './components/githubProjects.svelte';

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
			<HeaderTab title="contact" />
			<DarkModeButton />
		</div>
	</nav>
	<WelcomeText />
	<div class="arrow bounce" />
</section>
<section id="lukas">
	<div>
		<Heading class="text-left"><Span underline>about me:</Span></Heading>
		<Img
			src="Lukas.JPEG"
			size="w-72"
			imgClass="h-72"
			alignment="mx-auto"
			class="rounded-full mt-20"
		/>
		<P size="xl" align="center" class="mt-20 mx-10" weight="light">
			Hi there! My name is Lukas Klein, a {age}-year-old studying <Span underline
				>computer science</Span
			> at the Provadis Hochschule as part of my dual program with Deutsche Telekom AG. I'm particularly
			drawn to <Span underline>web development</Span>, where I enjoy enhancing the user experience
			and exploring the realms of technology.
		</P>
	</div>
</section>
<section id="projects">
	<Heading class="text-left"><Span underline>My projects:</Span></Heading>
	<GithubProjects />
</section>
