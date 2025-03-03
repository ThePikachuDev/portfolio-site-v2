<script>
	let { children } = $props();
    import Header from './header.svelte';
</script>

<main>
    <Header />
</main>

{@render children()}