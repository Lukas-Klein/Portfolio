<script lang="ts">
	import { onMount } from 'svelte';

	let isDark = false;

	function applyTheme(dark: boolean) {
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function toggleTheme() {
		isDark = !isDark;
		applyTheme(isDark);
		localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
	}

	onMount(() => {
		const stored = localStorage.getItem('color-theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		isDark = stored ? stored === 'dark' : prefersDark;
		applyTheme(isDark);
	});
</script>

<button
	type="button"
	class="themeToggle"
	aria-label="Toggle dark mode"
	on:click={toggleTheme}
>
	{#if isDark}
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true">
			<path
				fill="currentColor"
				d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
			/>
		</svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" aria-hidden="true">
			<path
				fill="currentColor"
				d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
			/>
		</svg>
	{/if}
</button>

<style>
	.themeToggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border: none;
		border-radius: 9999px;
		background: transparent;
		color: rgb(17 24 39);
		cursor: pointer;
		transition: color 0.2s ease;
	}

	:global(.dark) .themeToggle {
		color: rgb(255 255 255);
	}

	.themeToggle:hover {
		color: var(--iconColor);
	}

	.themeToggle:focus-visible {
		outline: 2px solid var(--iconColor);
		outline-offset: 3px;
	}

	.themeToggle svg {
		font-size: 1.35rem;
	}
</style>
