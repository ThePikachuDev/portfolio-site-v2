<script>
	let { children } = $props();
    import Header from './header.svelte';
</script>

<Header />

{@render children()}