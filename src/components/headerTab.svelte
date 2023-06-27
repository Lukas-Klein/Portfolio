<script lang="ts">
	import { A } from 'flowbite-svelte';
	export let title: string;
</script>

<div class="hoverHelper" style="position: relative;">
	<A color="text-gray-900 dark:text-white" aClass="text-xl" class="navtext" href="#{title}"
		><span class="spanLeft">[</span><span>{title}</span><span class="spanRight">]</span></A
	>
</div>

<style>
	.spanLeft {
		position: absolute;
		left: 2px;
		opacity: 0;
		transition: 0.25s;
	}

	.spanRight {
		position: absolute;
		right: 2px;
		opacity: 0;
		transition: 0.25s;
	}

	.hoverHelper::after {
		content: '';
		position: absolute;
		background: linear-gradient(90deg, var(--iconColor), var(--accent));
		height: 2px;
		width: 0;
		left: 0;
		bottom: -4px;
		transition: 0.25s;
	}

	.hoverHelper:hover::after {
		width: 100%;
	}

	.hoverHelper:hover .spanLeft {
		position: absolute;
		left: -20px;
		opacity: 1;
		color: var(--iconColor);
	}

	.hoverHelper:hover .spanRight {
		position: absolute;
		right: -20px;
		opacity: 1;
		color: var(--accent);
	}
</style>
