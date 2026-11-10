<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	import '../app.css'
	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="">about</a>
	<a href="">skill-set</a>
	<a href="">projects</a>
	<a href="">contact-details</a>
</nav>

{@render children()}

<style>
	nav {
		position: sticky;
		top: 1.5rem;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		padding: 1.5rem 3rem 1.5rem 3rem;
		margin: 2rem;
		border-radius: 8px;

		width: 60%;

		background: rgb(255, 255, 255, 0.12);
		backdrop-filter: blur(12px);

	}

	nav a {
		text-decoration: none;
		color: black;
		font-size: 1.5rem;
	}

</style>