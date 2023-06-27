<script lang="ts">
	import { Badge, Card, Heading } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { type iGithubProject, type Repo } from '../types/types';

	let projects: iGithubProject[] = [];

	onMount(async () => {
		const response = await axios.get<Repo[]>('https://api.github.com/users/Lukas-Klein/repos');
		projects = response.data.map((project) => ({
			name: project.full_name,
			description: project.description,
			url: project.html_url,
			forks: project.forks_count,
			stars: project.stargazers_count,
			watchers: project.watchers_count
		}));
	});
</script>

<div class="projectsWrapper">
	{#each projects as project}
		<Card size="xl" class="Card my-5" target="_blank" href={project.url}>
			<Heading tag="h4">{project.name}</Heading>
			<p class="mt-2 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{project.description}
			</p>
			<div class="projectIcons">
				<Badge rounded color="dark"><i class="fa fa-star pr-1.5" />{project.stars}</Badge>
				<Badge rounded color="dark"><i class="fa fa-code-fork pr-1.5" />{project.forks}</Badge>
				<Badge rounded color="dark"><i class="fa fa-eye pr-1.5" />{project.watchers}</Badge>
			</div>
		</Card>
	{/each}
</div>
