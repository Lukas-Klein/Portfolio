<script lang="ts">
	import DarkModeButton from './components/darkModeButton.svelte';
	import app from './app.css';
	import HeaderTag from './components/headerTag.svelte';
	import { P, Heading, Img, Span } from 'flowbite-svelte';
	import WelcomeText from './components/welcomeText.svelte';

	const birthday: Date = new Date('2002-04-16');
	const age: number = Math.floor(
		(Date.now() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
	);
</script>

<section id="home">
	<nav class="navHeader">
		<div class="menuL"><HeaderTag title="lukas" /></div>
		<div class="menuR">
			<HeaderTag title="projects" />
			<HeaderTag title="career" />
			<HeaderTag title="contact" />
			<DarkModeButton />
		</div>
	</nav>
	<WelcomeText />
	<div class="arrow bounce" />
</section>
<section id="about">
	<div>
		<Heading class="text-left">about me:</Heading>
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
			drawn to web development, where I enjoy enhancing the user experience and exploring the realms
			of technology.
		</P>
	</div>
</section>
